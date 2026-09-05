/**
 * Web3Forms Lead Submission Helper for Shubh Orthodontic & Dental Clinic
 * Access Key: c66ca63b-ca0b-4ee3-bd2b-1dde22bf1000
 * Automatically captures page URL, referrer, Google Ads click ID (gclid), and UTM parameters.
 */

import { getAttribution } from './attribution';

export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "c66ca63b-ca0b-4ee3-bd2b-1dde22bf1000";

export async function submitToWeb3Forms({
  name,
  phone,
  treatment,
  date,
  timing,
  mode,
  source = "Website Form",
  message = "",
  voucher = ""
}) {
  try {
    const attr = getAttribution();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🏥 New Lead: ${name || 'Patient'} - ${treatment || 'Consultation'} [${source}]`,
      from_name: "Shubh Dental Clinic Lead Desk",
      name: name || "N/A",
      phone: phone || "N/A",
      treatment: treatment || "General Consultation",
      preferred_date: date || "N/A",
      preferred_timing: timing || "N/A",
      consultation_mode: mode || "In-Clinic / Online",
      voucher_code: voucher || "N/A",
      lead_source: source,
      notes: message || "Direct patient enquiry submitted online",
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      page_url: attr.current_page_url || (typeof window !== 'undefined' ? window.location.href : 'N/A'),
      landing_page: attr.landing_page || 'N/A',
      initial_referrer: attr.initial_referrer || 'direct / organic',
      first_touch_time: attr.first_touch_time || 'N/A',
      ...(attr.utm_source && { utm_source: attr.utm_source }),
      ...(attr.utm_medium && { utm_medium: attr.utm_medium }),
      ...(attr.utm_campaign && { utm_campaign: attr.utm_campaign }),
      ...(attr.utm_term && { utm_term: attr.utm_term }),
      ...(attr.utm_content && { utm_content: attr.utm_content }),
      ...(attr.gclid && { gclid: attr.gclid }),
      ...(attr.gbraid && { gbraid: attr.gbraid }),
      ...(attr.wbraid && { wbraid: attr.wbraid }),
      ...(attr.first_utm_source && { first_utm_source: attr.first_utm_source }),
      ...(attr.first_utm_campaign && { first_utm_campaign: attr.first_utm_campaign }),
      ...(attr.first_gclid && { first_gclid: attr.first_gclid }),
    };

    // 1. First try our Next.js server route (avoids client-side CORS/Cloudflare challenge)
    try {
      const internalRes = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (internalRes.ok) {
        const resData = await internalRes.json();
        return resData;
      }
    } catch (routeErr) {
      console.warn("Internal route fallback to direct:", routeErr);
    }

    // 2. Direct Web3Forms submission
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({ success: true }));
    return data;
  } catch (err) {
    console.error("Web3Forms error:", err);
    return { success: true, warning: err.message };
  }
}
