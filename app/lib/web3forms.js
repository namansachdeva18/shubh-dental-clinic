/**
 * Web3Forms Lead Submission Helper for Shubh Orthodontic & Dental Clinic
 * Access Key: c66ca63b-ca0b-4ee3-bd2b-1dde22bf1000
 */

export const WEB3FORMS_ACCESS_KEY = "c66ca63b-ca0b-4ee3-bd2b-1dde22bf1000";

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
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Web3Forms error:", err);
    return { success: false, error: err };
  }
}
