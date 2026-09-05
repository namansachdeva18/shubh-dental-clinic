/**
 * First-Touch & Latest-Touch Marketing Attribution System
 * Shubh Orthodontic & Dental Clinic
 * 
 * Preserves marketing campaign parameters (UTMs, GCLID, GBRAID, WBRAID) across
 * internal site navigation and route changes.
 */

const STORAGE_KEYS = {
  FIRST_TOUCH: 'shubh_attr_first',
  LATEST_TOUCH: 'shubh_attr_latest',
};

// In-memory fallback if sessionStorage is unavailable (e.g. strict private browsing)
let memoryStore = {
  firstTouch: null,
  latestTouch: null,
};

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
}

function safeGetStorage(key) {
  if (!isBrowser()) return null;
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return memoryStore[key === STORAGE_KEYS.FIRST_TOUCH ? 'firstTouch' : 'latestTouch'];
  }
}

function safeSetStorage(key, data) {
  if (!isBrowser()) return;
  try {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    if (key === STORAGE_KEYS.FIRST_TOUCH) memoryStore.firstTouch = data;
    if (key === STORAGE_KEYS.LATEST_TOUCH) memoryStore.latestTouch = data;
  }
}

/**
 * Initializes and captures attribution from current URL and document referrer.
 * Safe to call repeatedly on route changes or form mount.
 */
export function initAttribution() {
  if (!isBrowser()) return;

  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const utm_source = params.get('utm_source') || '';
    const utm_medium = params.get('utm_medium') || '';
    const utm_campaign = params.get('utm_campaign') || '';
    const utm_term = params.get('utm_term') || '';
    const utm_content = params.get('utm_content') || '';
    const gclid = params.get('gclid') || '';
    const gbraid = params.get('gbraid') || '';
    const wbraid = params.get('wbraid') || '';

    const hasCampaignParams = !!(
      utm_source || utm_medium || utm_campaign || utm_term || utm_content || gclid || gbraid || wbraid
    );

    const existingFirstTouch = safeGetStorage(STORAGE_KEYS.FIRST_TOUCH);

    // 1. Establish First-Touch if not already set
    if (!existingFirstTouch) {
      const firstTouchData = {
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        gclid,
        gbraid,
        wbraid,
        landing_page: window.location.pathname + window.location.search,
        initial_referrer: document.referrer || 'direct / organic',
        first_touch_timestamp: new Date().toISOString(),
      };
      safeSetStorage(STORAGE_KEYS.FIRST_TOUCH, firstTouchData);
    }

    // 2. Update Latest-Touch if new campaign parameters arrived
    if (hasCampaignParams) {
      const latestTouchData = {
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        gclid,
        gbraid,
        wbraid,
        current_page: window.location.pathname + window.location.search,
        referrer: document.referrer || 'direct',
        timestamp: new Date().toISOString(),
      };
      safeSetStorage(STORAGE_KEYS.LATEST_TOUCH, latestTouchData);
    }
  } catch (e) {
    // Non-blocking catch
  }
}

/**
 * Retrieves full attribution payload for form submissions.
 */
export function getAttribution() {
  if (!isBrowser()) return {};

  initAttribution();

  const firstTouch = safeGetStorage(STORAGE_KEYS.FIRST_TOUCH) || {};
  const latestTouch = safeGetStorage(STORAGE_KEYS.LATEST_TOUCH) || {};

  return {
    // First Touch (Permanent source)
    first_utm_source: firstTouch.utm_source || '',
    first_utm_medium: firstTouch.utm_medium || '',
    first_utm_campaign: firstTouch.utm_campaign || '',
    first_utm_term: firstTouch.utm_term || '',
    first_utm_content: firstTouch.utm_content || '',
    first_gclid: firstTouch.gclid || '',
    first_gbraid: firstTouch.gbraid || '',
    first_wbraid: firstTouch.wbraid || '',
    landing_page: firstTouch.landing_page || window.location.pathname,
    initial_referrer: firstTouch.initial_referrer || document.referrer || 'direct',
    first_touch_time: firstTouch.first_touch_timestamp || '',

    // Standard fields (Derived from first touch, or latest if first was empty)
    utm_source: firstTouch.utm_source || latestTouch.utm_source || '',
    utm_medium: firstTouch.utm_medium || latestTouch.utm_medium || '',
    utm_campaign: firstTouch.utm_campaign || latestTouch.utm_campaign || '',
    utm_term: firstTouch.utm_term || latestTouch.utm_term || '',
    utm_content: firstTouch.utm_content || latestTouch.utm_content || '',
    gclid: firstTouch.gclid || latestTouch.gclid || '',
    gbraid: firstTouch.gbraid || latestTouch.gbraid || '',
    wbraid: firstTouch.wbraid || latestTouch.wbraid || '',

    // Current context
    current_page_url: window.location.href,
  };
}
