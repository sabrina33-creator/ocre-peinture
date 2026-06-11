// GA4 Analytics — Measurement ID: G-QQSXYNBXY2
const GA_ID = "G-QQSXYNBXY2";

export function trackPageView(pageName) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_title:    pageName,
    page_location: window.location.href,
    send_to:       GA_ID,
  });
}

// method: "phone" | "whatsapp" | "form" | "devis"
// location: "hero" | "header" | "nav_mobile" | "about" | "cta_final" |
//           "sticky" | "services_header" | "services_cta" | "contact"
export function trackLead(method, location) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", { method, location, send_to: GA_ID });
}
