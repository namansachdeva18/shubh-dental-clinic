/**
 * Centralized Conversion Tracking Abstraction
 * Shubh Orthodontic & Dental Clinic
 * 
 * Safely dispatches conversion events to window.dataLayer (GTM) and window.gtag (GA4 / Google Ads)
 * with duplicate-firing protection and vendor isolation.
 */

// Debounce map to prevent accidental double-clicks from firing duplicate conversions
const recentEvents = new Map();
const DEBOUNCE_MS = 2500;

export const CONVERSION_EVENTS = {
  // Primary Lead Conversions
  GENERATE_LEAD: 'generate_lead',
  APPOINTMENT_REQUEST: 'appointment_request',
  OFFER_LEAD: 'offer_lead',

  // Secondary Conversions
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
};

/**
 * Dispatches a conversion event safely across GTM and gtag interfaces.
 * 
 * @param {string} eventName - One of CONVERSION_EVENTS
 * @param {object} [eventParams={}] - Optional metadata (e.g. treatment, source)
 */
export function trackConversion(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  const eventKey = `${eventName}_${JSON.stringify(eventParams)}`;

  // Duplicate firing guard
  if (recentEvents.has(eventKey) && now - recentEvents.get(eventKey) < DEBOUNCE_MS) {
    return;
  }
  recentEvents.set(eventKey, now);

  const payload = {
    event: eventName,
    event_category: eventName.includes('click') ? 'Engagement' : 'Lead',
    event_timestamp: new Date().toISOString(),
    page_location: typeof window !== 'undefined' && window.location ? window.location.href : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
    ...eventParams,
  };

  try {
    // 1. Google Tag Manager (GTM) / dataLayer support
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }

    // 2. Google Analytics 4 / Google Ads (gtag.js) support
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);

      // If a dedicated Google Ads conversion ID + label are configured in the environment
      const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
      const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
      if (adsId && adsLabel && (eventName === CONVERSION_EVENTS.GENERATE_LEAD || eventName === CONVERSION_EVENTS.APPOINTMENT_REQUEST)) {
        window.gtag('event', 'conversion', {
          send_to: `${adsId}/${adsLabel}`,
          ...payload,
        });
      }
    }
  } catch (err) {
    // Never crash user interface if analytics script throws
  }
}
