import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import "./App.css";
import { trackPageView, trackLead } from "./analytics";
import Malek from "./Malek.jpeg";
import photopeinture from "./photopeinture.jpg";
import photopeinture1 from "./photopeinture1.jpg";
import salon2 from "./salon2.jpg";
import salonnetflix from "./salonnetflix.png";
import remise from "./remise.jpg";
import hero from "./hero.jpg";

/* ═══════════════════════════════════════
   OCRÉ — Peinture Professionnelle · Aquitaine
   Fonts : Fraunces (display) + Figtree (body)
   ═══════════════════════════════════════ */

const C = {
  cream:     "#FAF7F2",
  warmWhite: "#FFFDF9",
  beige:     "#EDE5D8",
  sand:      "#8C8680",
  terra:     "#C4813A",
  sage:      "#2B3440",
  sageDark:  "#1E2630",
  dark:      "#1A1A1A",
  darkSoft:  "#4A4A48",
  white:     "#FFFFFF",
};

const PHONE         = "tel:+33782674494";
const PHONE_DISPLAY = "+33 7 82 67 44 94";
const EMAIL         = "ocre.peinture.aquitaine@gmail.com";
const WHATSAPP      = "https://wa.me/33782674494?text=Bonjour%20Malek%2C%20je%20souhaite%20un%20devis%20pour%20un%20chantier.";

const IMG = {
  hero:       hero,
  interieur:  salon2,
  exterieur:  photopeinture1,
  renovation: remise,
  chantier:   Malek,
  detail:     salonnetflix,
  aquitaine:  photopeinture,
  pro:        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
};

// ── Animation scroll ──
function FadeIn({ children, delay = 0, style = {} }) {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(e.target); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={inView ? "fade-in-anim" : undefined}
      style={{ ...(inView && delay > 0 ? { animationDelay: `${delay}s` } : {}), ...style }}
    >
      {children}
    </div>
  );
}

// ── Icônes ──
const Ico = {
  Phone: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12.8 19.79 19.79 0 0 1 1.13 4.18 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Check: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.terra} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Pin: ({ s = 16 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  WhatsApp: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  ),
  Brush: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.67 2.02 5 2.02 2.8 0 5-2.1 5-4.04 0-1.67-1.33-3.02-3-3.02h-2z"/>
    </svg>
  ),
  Home: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Building: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M9 22V12h6v10M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  ),
  Sun: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Clock: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Shield: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

// ── Logo ──
function OcreLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill={C.terra}/>
      <text x="20" y="29" fontFamily="'Fraunces', Georgia, serif" fontSize="26" fontWeight="700" textAnchor="middle" fill={C.white}>O</text>
    </svg>
  );
}

// ── Boutons sémantiques ──
function Btn({ href, onClick, children, variant = "primary", style = {}, loc }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "13px 22px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "'Figtree', sans-serif",
    cursor: "pointer",
    transition: "opacity 0.15s cubic-bezier(0,0,0.2,1), transform 0.15s cubic-bezier(0,0,0.2,1)",
    textDecoration: "none",
    border: "none",
    minHeight: 44,
    letterSpacing: "0.01em",
    lineHeight: 1,
  };
  const variants = {
    primary:   { background: C.terra,    color: C.white,  boxShadow: `0 2px 14px ${C.terra}35` },
    whatsapp:  { background: "#25D366",  color: C.white,  boxShadow: "0 2px 14px rgba(37,211,102,0.28)" },
    ghost:     { background: "rgba(255,255,255,0.12)", color: C.white, border: "1.5px solid rgba(255,255,255,0.30)" },
    secondary: { background: "transparent", color: C.sand, border: `1.5px solid ${C.beige}` },
    light:     { background: C.white,    color: C.terra },
  };
  const finalStyle = { ...base, ...variants[variant], ...style };

  const handleClick = () => {
    if (loc) {
      if (href?.startsWith("tel:"))     trackLead("phone",    loc);
      else if (href?.includes("wa.me")) trackLead("whatsapp", loc);
      else                              trackLead("devis",    loc);
    }
    if (onClick) onClick();
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={loc ? handleClick : undefined}
        style={finalStyle}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button onClick={handleClick} style={finalStyle}>
      {children}
    </button>
  );
}

// ══════════ HEADER ══════════
function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const goTo = (p) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0 }); };
  const links = [
    { id: "accueil",  label: "Accueil"  },
    { id: "services", label: "Services" },
    { id: "contact",  label: "Devis"    },
  ];
  const transparent = page === "accueil" && !scrolled;

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: transparent ? "transparent" : `${C.warmWhite}F2`,
      backdropFilter: transparent ? "none" : "blur(18px)",
      borderBottom: transparent ? "1px solid transparent" : `1px solid ${C.beige}`,
      transition: "all 0.35s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        <button
          onClick={() => goTo("accueil")}
          aria-label="Ocré — retour à l'accueil"
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: "4px 0", minHeight: 44 }}
        >
          <OcreLogo size={34}/>
          <div>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 21, fontWeight: 700, color: transparent ? C.white : C.sage, lineHeight: 1 }}>Ocré</div>
            <div style={{ fontSize: 9, color: transparent ? "rgba(255,255,255,0.65)" : C.sand, letterSpacing: 2, fontWeight: 500, textTransform: "uppercase", marginTop: 2 }}>Peinture · Aquitaine</div>
          </div>
        </button>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 24 }} aria-label="Navigation principale">
          {links.map(n => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              aria-current={page === n.id ? "page" : undefined}
              style={{
                fontSize: 14, fontWeight: 500, cursor: "pointer", background: "none", border: "none",
                color: page === n.id ? C.terra : (transparent ? "rgba(255,255,255,0.75)" : C.sand),
                borderBottom: page === n.id ? `1.5px solid ${C.terra}` : "1.5px solid transparent",
                padding: "4px 0", fontFamily: "'Figtree', sans-serif",
                transition: "color 0.2s", minHeight: 44,
              }}
            >
              {n.label}
            </button>
          ))}
          <Btn href={WHATSAPP} variant="whatsapp" style={{ padding: "9px 16px", fontSize: 13 }} loc="header">
            <Ico.WhatsApp s={14}/> WhatsApp
          </Btn>
          <Btn href={PHONE} variant="primary" style={{ padding: "9px 16px", fontSize: 13 }} loc="header">
            <Ico.Phone s={14}/> Appeler
          </Btn>
        </nav>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: transparent ? C.white : C.sage, padding: 4, minHeight: 44, minWidth: 44, alignItems: "center", justifyContent: "center" }}
        >
          {menuOpen ? <Ico.X/> : <Ico.Menu/>}
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: C.warmWhite, padding: "48px 28px", zIndex: 999, display: "flex", flexDirection: "column" }}>
          {links.map(n => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              style={{
                fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 700,
                color: page === n.id ? C.terra : C.sage,
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 0", textAlign: "left", minHeight: 60,
              }}
            >
              {n.label}
            </button>
          ))}
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 10 }}>
            <Btn href={WHATSAPP} variant="whatsapp" style={{ width: "100%", padding: 15, fontSize: 15 }} loc="nav_mobile">
              <Ico.WhatsApp s={18}/> Écrire sur WhatsApp
            </Btn>
            <Btn href={PHONE} variant="primary" style={{ width: "100%", padding: 15, fontSize: 15 }} loc="nav_mobile">
              <Ico.Phone s={18}/> Appeler Malek
            </Btn>
            <Btn onClick={() => goTo("contact")} variant="secondary" style={{ width: "100%", padding: 15, fontSize: 15 }} loc="nav_mobile">
              <Ico.Mail s={18}/> Demander un devis
            </Btn>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-burger{display:flex!important}
        }
      `}</style>
    </header>
  );
}

// ══════════ STICKY CTA MOBILE ══════════
function StickyCTA({ setPage }) {
  return (
    <>
      <div
        className="sticky-cta"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999,
          background: `${C.warmWhite}F5`, backdropFilter: "blur(16px)",
          borderTop: `1px solid ${C.beige}`, padding: "10px 14px",
          paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
          display: "none", gap: 8,
        }}
      >
        <Btn href={PHONE} variant="primary" style={{ flex: 1, padding: "12px 6px", fontSize: 13, borderRadius: 9 }} loc="sticky">
          <Ico.Phone s={14}/> Appeler
        </Btn>
        <Btn href={WHATSAPP} variant="whatsapp" style={{ flex: 1, padding: "12px 6px", fontSize: 13, borderRadius: 9 }} loc="sticky">
          <Ico.WhatsApp s={14}/> WhatsApp
        </Btn>
        <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} variant="secondary" style={{ flex: 1, padding: "12px 6px", fontSize: 13, borderRadius: 9, border: `1.5px solid ${C.beige}` }} loc="sticky">
          <Ico.Mail s={14}/> Devis
        </Btn>
      </div>
      <style>{`@media(max-width:768px){.sticky-cta{display:flex!important}}`}</style>
    </>
  );
}

// ══════════ FOOTER ══════════
function Footer({ setPage }) {
  const goTo = (p) => { setPage(p); window.scrollTo({ top: 0 }); };
  return (
    <footer style={{ background: C.warmWhite, borderTop: `1px solid ${C.beige}`, padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-cols" style={{ display: "flex", flexWrap: "wrap", gap: 48, marginBottom: 48 }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <OcreLogo size={30}/>
              <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, color: C.sage }}>Ocré</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.sand, maxWidth: 280 }}>
              Peintre professionnel en Aquitaine. Malek intervient lui-même, du devis à la finition.
            </p>
          </div>
          <nav aria-label="Navigation secondaire" style={{ flex: "1 1 140px" }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: C.sand, letterSpacing: 1.5, marginBottom: 16, textTransform: "uppercase" }}>Navigation</h4>
            {[["accueil","Accueil"],["services","Services"],["contact","Devis gratuit"]].map(([p, label]) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                style={{ display: "block", fontSize: 14, color: C.sand, cursor: "pointer", marginBottom: 10, background: "none", border: "none", padding: "4px 0", textAlign: "left", minHeight: 44 }}
              >
                {label}
              </button>
            ))}
          </nav>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: C.sand, letterSpacing: 1.5, marginBottom: 16, textTransform: "uppercase" }}>Contact</h4>
            <p style={{ fontSize: 14, color: C.sand, lineHeight: 2.2 }}>
              Toute l'Aquitaine<br/>
              <a href={PHONE} onClick={() => trackLead("phone", "footer")} style={{ color: C.dark, textDecoration: "none" }}>{PHONE_DISPLAY}</a><br/>
              <a href={"mailto:"+EMAIL} style={{ color: C.sand, textDecoration: "none", fontSize: 12 }}>{EMAIL}</a>
            </p>
          </div>
          <div style={{ flex: "1 1 180px" }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, color: C.sand, letterSpacing: 1.5, marginBottom: 16, textTransform: "uppercase" }}>Zones</h4>
            <p style={{ fontSize: 14, color: C.sand, lineHeight: 2.2 }}>
              Bordeaux & agglo<br/>
              Bassin d'Arcachon<br/>
              Bayonne · Pau<br/>
              Mont-de-Marsan
            </p>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.beige}`, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 12, color: C.sand }}>
          <span>© 2026 Ocré · Peinture Aquitaine</span>
          <span>Artisan assuré · SIRET en cours</span>
        </div>
      </div>
    </footer>
  );
}

// ══════════ PAGE ACCUEIL ══════════
function PageAccueil({ setPage }) {
  const problemes = [
    {
      title: "L'artisan qui disparaît",
      desc: "Vous avez demandé trois devis. Deux n'ont jamais répondu. Malek répond sous 48h, ou il refuse le chantier clairement.",
    },
    {
      title: "La semaine qui dure un mois",
      desc: "Cinq jours annoncés. Dix-huit jours plus tard, il était encore là. Malek donne une date et la tient.",
    },
    {
      title: "Les murs qu'on regarde de côté",
      desc: "Traces de pinceau, découpes approximatives, retouches qui se voient. Une finition soignée ne se négocie pas.",
    },
    {
      title: "Le chantier laissé en état",
      desc: "Meubles non protégés, poussière dans toutes les pièces. Malek repart quand tout est propre. Bâches, sol, déchets : il emmène tout.",
    },
  ];

  const valeurs = [
    { icon: <Ico.Clock s={22}/>,  title: "Ponctualité",       desc: "Il arrive à l'heure convenue. Le chantier se termine à la date annoncée au devis." },
    { icon: <Ico.Brush s={22}/>,  title: "Finition soignée",  desc: "Découpes nettes, angles propres. Malek ne passe pas à la suite tant que c'est pas bon." },
    { icon: <Ico.Shield s={22}/>, title: "Propreté",          desc: "Bâches, protections, nettoyage final. Vous retrouvez votre espace impeccable." },
    { icon: <Ico.Check s={22}/>,  title: "Devis transparent", desc: "Ce qui est écrit est ce qui est facturé. Aucune surprise après signature." },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={IMG.hero}
            alt="Malek au travail, artisan peintre en Aquitaine"
            fetchPriority="high"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(108deg, ${C.sageDark}EC 0%, ${C.sageDark}A8 55%, ${C.sageDark}38 100%)` }}/>
        </div>

        <div className="hero-content" style={{ maxWidth: 1100, margin: "0 auto", padding: "140px 24px 100px", position: "relative", zIndex: 1, width: "100%" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.terra}20`, padding: "7px 16px", borderRadius: 50, marginBottom: 32, border: `1px solid ${C.terra}35` }}>
              <Ico.Pin s={13}/>
              <span style={{ fontSize: 11, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Gironde · Landes · Béarn · Pays Basque</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, color: C.white, lineHeight: 1.1, marginBottom: 8, maxWidth: 800, letterSpacing: "-0.02em" }}>
              Un peintre qui arrive à l'heure.
            </h1>
            <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: C.terra, lineHeight: 1.2, marginBottom: 32, letterSpacing: "-0.01em", fontStyle: "italic" }}>
              Malek le fait lui-même.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.80)", lineHeight: 1.7, maxWidth: 580, marginBottom: 40 }}>
              Artisan peintre en Gironde depuis plus de 10 ans. Du devis à la dernière couche, c'est lui, pas un sous-traitant. Réponse garantie sous 48h.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
              <Btn href={PHONE} variant="primary" style={{ fontSize: 15, padding: "14px 28px" }} loc="hero">
                <Ico.Phone s={16}/> Appeler Malek
              </Btn>
              <Btn href={WHATSAPP} variant="whatsapp" style={{ fontSize: 15, padding: "14px 28px" }} loc="hero">
                <Ico.WhatsApp s={16}/> WhatsApp
              </Btn>
              <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} variant="ghost" style={{ fontSize: 15, padding: "12px 28px" }} loc="hero">
                Demander mon devis →
              </Btn>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)" }}>
              Artisan assuré · Devis gratuit · Sans engagement
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PROBLÈMES ── */}
      <section className="sec-p" style={{ padding: "120px 24px 96px", background: C.cream }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(30px, 4.5vw, 54px)", fontWeight: 700, color: C.sage, marginBottom: 56, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              On sait ce qui{" "}
              <span style={{ color: C.terra }}>vous agace.</span>
            </h2>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {problemes.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px 56px",
                  padding: "36px 0",
                  borderTop: `1px solid ${C.beige}`,
                  alignItems: "flex-start",
                }}>
                  <h3 style={{
                    flex: "1 1 280px",
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "clamp(22px, 3vw, 36px)",
                    fontWeight: 600,
                    color: C.sage,
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ flex: "1 1 280px", fontSize: 16, color: C.darkSoft, lineHeight: 1.75, paddingTop: 4 }}>
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: `1px solid ${C.beige}` }}/>
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="sec-p-sm" style={{ padding: "80px 24px 120px", background: C.warmWhite }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
          <FadeIn style={{ flex: "1 1 420px" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", position: "relative" }}>
              <img
                src={IMG.chantier}
                alt="Malek, artisan peintre, sur un chantier en Gironde"
                loading="lazy"
                width={800}
                height={460}
                className="about-img"
                style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", bottom: 18, left: 18,
                background: `${C.warmWhite}E8`, backdropFilter: "blur(10px)",
                borderRadius: 10, padding: "11px 16px", border: `1px solid ${C.beige}`,
              }}>
                <div style={{ fontSize: 10, color: C.terra, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>Artisan assuré</div>
                <div style={{ fontSize: 13, color: C.dark, marginTop: 2 }}>Gironde · 10 ans d'expérience</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} style={{ flex: "1 1 340px" }}>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: C.sage, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
              C'est lui qui{" "}
              <span style={{ color: C.terra }}>tient le pinceau.</span>
            </h2>
            <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 16 }}>
              Depuis plus de 10 ans en Gironde, Malek fait le travail lui-même. Toujours lui, sur chaque chantier, du premier jour au dernier.
            </p>
            <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 32 }}>
              Vous le rencontrez pour le devis : c'est lui que vous retrouvez sur le chantier. Vous savez à qui vous parlez. Et lui sait ce qu'il a promis.
            </p>
            <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} variant="primary" loc="about">
              Demander mon devis →
            </Btn>
          </FadeIn>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section>
        <div className="gallery-grid">
          {[
            [IMG.interieur, "Chantier peinture intérieure"],
            [IMG.exterieur, "Chantier peinture extérieure"],
            [IMG.detail,    "Finition peinture Malek"],
          ].map(([src, alt], i) => (
            <div key={i} style={{ overflow: "hidden", height: 280 }}>
              <img
                src={src}
                alt={alt}
                loading="lazy"
                width={800}
                height={280}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES (aperçu) ── */}
      <section className="sec-p" style={{ padding: "120px 24px 100px", background: C.cream }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 700, color: C.sage, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Ce que Malek{" "}
                <span style={{ color: C.terra }}>fait bien.</span>
              </h2>
              <Btn onClick={() => { setPage("services"); window.scrollTo({ top: 0 }); }} variant="secondary">
                Toutes les prestations →
              </Btn>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2, background: C.beige }}>
            {[
              { icon: <Ico.Home s={22}/>,     title: "Peinture intérieure",    desc: "Murs, plafonds, boiseries. Préparation des supports, enduit si besoin, finition propre." },
              { icon: <Ico.Sun s={22}/>,      title: "Peinture extérieure",    desc: "Façade, volets, sous-faces. Traitement adapté à chaque support. Nettoyage haute pression inclus." },
              { icon: <Ico.Building s={22}/>, title: "Chantiers pro",          desc: "Bureaux, commerces, copropriétés. Intervention planifiée selon vos contraintes. Délais tenus." },
              { icon: <Ico.Brush s={22}/>,    title: "Remise en état",         desc: "Dégât des eaux, départ locataire, après travaux. Intervention rapide, résultat soigné." },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: i === 0 ? C.warmWhite : C.cream,
                  padding: "40px 32px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <span style={{
                    position: "absolute",
                    bottom: -10,
                    right: 18,
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: 96,
                    fontWeight: 700,
                    color: C.terra,
                    opacity: 0.06,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}>{i + 1}</span>
                  <div style={{ color: C.terra, marginBottom: 16, position: "relative" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: C.sage, marginBottom: 10, letterSpacing: "-0.01em", position: "relative" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.7, position: "relative" }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="sec-p-sm" style={{ padding: "80px 24px 100px", background: C.warmWhite }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: C.sage, marginBottom: 64, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Ce que vous êtes en droit{" "}
              <span style={{ color: C.terra }}>d'exiger.</span>
            </h2>
          </FadeIn>
          <div className="valeurs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: "48px 56px" }}>
            {valeurs.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ color: C.terra, flexShrink: 0, marginTop: 6 }}>
                    {v.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: C.sage, marginBottom: 8, letterSpacing: "-0.01em" }}>{v.title}</h3>
                    <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="sec-p" style={{ padding: "100px 24px", background: C.terra }}>
        <FadeIn>
          <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 700, color: C.white, marginBottom: 20, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Votre chantier mérite un artisan sérieux.
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: C.white, marginBottom: 40 }}>
              Devis gratuit sur place · Réponse sous 48h · Toute l'Aquitaine
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
              <Btn href={PHONE} variant="light" style={{ fontSize: 15, padding: "14px 28px" }} loc="cta_final">
                <Ico.Phone s={16}/> Appeler Malek
              </Btn>
              <Btn href={WHATSAPP} variant="whatsapp" style={{ fontSize: 15, padding: "14px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.2)" }} loc="cta_final">
                <Ico.WhatsApp s={16}/> WhatsApp
              </Btn>
              <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} style={{ background: "rgba(255,255,255,0.15)", color: C.white, border: "1.5px solid rgba(255,255,255,0.35)", fontSize: 15, padding: "12px 28px", borderRadius: 10, minHeight: 44, cursor: "pointer", fontFamily: "'Figtree', sans-serif", fontWeight: 600 }} loc="cta_final">
                Envoyer ma demande →
              </Btn>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

// ══════════ PAGE SERVICES ══════════
function PageServices({ setPage }) {
  const services = [
    {
      icon: <Ico.Home s={26}/>,
      title: "Peinture intérieure",
      subtitle: "Particuliers & copropriétés",
      img: IMG.detail,
      items: ["Murs et plafonds toutes surfaces","Boiseries, plinthes, huisseries","Enduits décoratifs et effets matière","Mise en peinture complète après rénovation","Rafraîchissement locatif entre deux locataires"],
      desc: "Murs, plafonds, boiseries, enduits décoratifs. Malek prépare les surfaces, protège vos affaires et finit proprement. Du premier enduit à la dernière couche.",
    },
    {
      icon: <Ico.Sun s={26}/>,
      title: "Peinture extérieure",
      subtitle: "Façades & ravalement",
      img: IMG.exterieur,
      items: ["Ravalement de façade complet","Peinture de volets et fenêtres","Sous-faces, avant-toits, appuis de fenêtre","Traitement anti-humidité et préparation","Nettoyage haute pression inclus"],
      desc: "Façade, volets, sous-faces. Traitement adapté à chaque support : crépi, bois, béton, aluminium. Nettoyage haute pression inclus avant de commencer.",
    },
    {
      icon: <Ico.Building s={26}/>,
      title: "Chantiers professionnels",
      subtitle: "Entreprises & commerces",
      img: IMG.pro,
      items: ["Bureaux et open spaces","Commerces, restaurants, boutiques","Halls et parties communes de copropriété","Entrepôts et locaux industriels","Intervention hors horaires si besoin"],
      desc: "Bureaux, commerces, copropriétés. Malek planifie l'intervention autour de vos contraintes. Les délais sont tenus.",
    },
    {
      icon: <Ico.Brush s={26}/>,
      title: "Remise en état",
      subtitle: "Rapide et soigné",
      img: IMG.renovation,
      items: ["Remise en état après sinistre","Sortie de locataire : état des lieux impeccable","Après travaux : raccords et finitions","Retouches ponctuelles","Intervention sous 72h si urgence"],
      desc: "Dégât des eaux, départ locataire, fin de chantier. Malek intervient vite et repart quand le bien est prêt à être habité ou mis en location.",
    },
  ];

  return (
    <div style={{ paddingTop: 68, background: C.cream }}>
      <section className="sec-p-sm" style={{ background: C.warmWhite, padding: "80px 24px 64px", textAlign: "center", borderBottom: `1px solid ${C.beige}` }}>
        <FadeIn>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 700, color: C.sage, marginBottom: 14, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Ce que Malek fait.{" "}
            <span style={{ color: C.terra }}>Et comment.</span>
          </h1>
          <p style={{ fontSize: 16, color: C.darkSoft, maxWidth: 500, margin: "0 auto 28px" }}>
            Particuliers, professionnels, copropriétés : Malek intervient en Gironde et dans toute l'Aquitaine.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <Btn href={PHONE} variant="primary" style={{ fontSize: 14 }} loc="services_header"><Ico.Phone s={15}/> Appeler Malek</Btn>
            <Btn href={WHATSAPP} variant="whatsapp" style={{ fontSize: 14 }} loc="services_header"><Ico.WhatsApp s={15}/> WhatsApp</Btn>
          </div>
        </FadeIn>
      </section>

      <section className="sec-p-sm" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
          {services.map((s, i) => (
            <FadeIn key={i}>
              <div className="service-row" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
                <div style={{ flex: "1 1 400px", borderRadius: 12, overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={320}
                    style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ flex: "1 1 320px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${C.terra}15`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra, flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 21, fontWeight: 700, color: C.sage }}>{s.title}</div>
                      <div style={{ fontSize: 11, color: C.terra, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2, marginTop: 2 }}>{s.subtitle}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.items.map((t, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{ flexShrink: 0, marginTop: 1 }}><Ico.Check s={16}/></div>
                        <span style={{ fontSize: 15, color: C.dark }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="sec-p-sm" style={{ padding: "80px 24px", background: C.warmWhite, textAlign: "center", borderTop: `1px solid ${C.beige}` }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, color: C.sage, marginBottom: 12, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Besoin d'un devis ?
          </h2>
          <p style={{ fontSize: 16, color: C.sand, marginBottom: 32 }}>Gratuit · Réponse sous 48h · Sans engagement</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <Btn href={PHONE} variant="primary" style={{ fontSize: 15, padding: "14px 28px" }} loc="services_cta"><Ico.Phone s={16}/> Appeler Malek</Btn>
            <Btn href={WHATSAPP} variant="whatsapp" style={{ fontSize: 15, padding: "14px 28px" }} loc="services_cta"><Ico.WhatsApp s={16}/> WhatsApp</Btn>
            <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} variant="secondary" style={{ fontSize: 15, padding: "14px 28px" }} loc="services_cta">
              <Ico.Mail s={16}/> Formulaire de devis
            </Btn>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

// ══════════ PAGE CONTACT ══════════
function PageContact() {
  const [state, handleSubmit] = useForm("xjgjqdza");
  useEffect(() => {
    if (state.succeeded) trackLead("form", "contact");
  }, [state.succeeded]); // eslint-disable-line react-hooks/exhaustive-deps

  const inp = {
    width: "100%", padding: "13px 16px", borderRadius: 10,
    background: C.warmWhite, border: `1px solid ${C.beige}`,
    fontSize: 15, color: C.dark, outline: "none",
    fontFamily: "'Figtree', sans-serif",
    boxSizing: "border-box",
  };
  const lab = {
    display: "block", fontSize: 11, fontWeight: 600,
    color: C.sand, marginBottom: 6,
    textTransform: "uppercase", letterSpacing: 0.8,
  };

  return (
    <div style={{ paddingTop: 68, background: C.cream, minHeight: "100vh" }}>
      <section style={{ padding: "64px 24px 100px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>

          {/* Formulaire */}
          <FadeIn style={{ flex: "1 1 440px" }}>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: C.sage, marginTop: 0, marginBottom: 8, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Décrivez votre{" "}
              <span style={{ color: C.terra }}>chantier.</span>
            </h1>
            <p style={{ fontSize: 16, color: C.darkSoft, marginBottom: 32 }}>
              Malek vous rappelle sous 48h. Si c'est urgent, appelez directement au{" "}
              <a href={PHONE} style={{ color: C.dark, textDecoration: "none", fontWeight: 600 }}>{PHONE_DISPLAY}</a>.
            </p>

            {state.succeeded ? (
              <div style={{ background: C.warmWhite, borderRadius: 12, padding: "48px 32px", textAlign: "center", border: `1px solid ${C.beige}` }}>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 56, color: C.terra, marginBottom: 16, lineHeight: 1 }}>✓</div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 26, fontWeight: 600, color: C.sage, marginBottom: 12 }}>Reçu.</h3>
                <p style={{ fontSize: 15, color: C.sand, lineHeight: 1.7 }}>
                  Malek vous rappelle dans les 48h.<br/>Besoin d'une réponse plus rapide ?
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
                  <Btn href={PHONE} variant="primary" loc="success_card"><Ico.Phone s={15}/> {PHONE_DISPLAY}</Btn>
                  <Btn href={WHATSAPP} variant="whatsapp" loc="success_card"><Ico.WhatsApp s={15}/> WhatsApp</Btn>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label htmlFor="prenom" style={lab}>Prénom *</label>
                    <input id="prenom" name="prenom" type="text" placeholder="Votre prénom" className="form-input" style={inp} required aria-required="true"/>
                  </div>
                  <div>
                    <label htmlFor="telephone" style={lab}>Téléphone *</label>
                    <input id="telephone" name="telephone" type="tel" placeholder="06 xx xx xx xx" className="form-input" style={inp} required aria-required="true"/>
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label htmlFor="typeChantier" style={lab}>Type de chantier</label>
                  <select id="typeChantier" name="typeChantier" className="form-input" style={{ ...inp, cursor: "pointer" }}>
                    <option value="">Sélectionnez</option>
                    <option>Peinture intérieure / particulier</option>
                    <option>Peinture extérieure / façade</option>
                    <option>Chantier professionnel</option>
                    <option>Remise en état locatif</option>
                    <option>Après sinistre</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="message" style={lab}>Décrivez votre projet</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="État des murs, surface approximative, contraintes, délais souhaités..."
                    rows={4}
                    className="form-input"
                    style={{ ...inp, resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", padding: "15px",
                    borderRadius: 10,
                    background: state.submitting ? `${C.terra}99` : C.terra,
                    color: C.white, fontSize: 16, fontWeight: 600,
                    cursor: state.submitting ? "not-allowed" : "pointer",
                    border: "none",
                    fontFamily: "'Figtree', sans-serif",
                    minHeight: 52,
                    boxShadow: `0 4px 20px ${C.terra}35`,
                    transition: "background 0.2s",
                  }}
                >
                  <Ico.Mail s={18}/>
                  {state.submitting ? "Envoi…" : "Envoyer ma demande"}
                </button>
                <p style={{ fontSize: 12, color: C.sand, textAlign: "center", marginTop: 10 }}>
                  Sans engagement · Réponse sous 48h
                </p>
              </form>
            )}
          </FadeIn>

          {/* Coordonnées */}
          <FadeIn delay={0.2} style={{ flex: "1 1 280px" }}>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, color: C.sage, marginBottom: 24 }}>
              Contacter Malek
            </h2>

            <a href={PHONE} onClick={() => trackLead("phone", "contact")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "17px", background: C.terra, borderRadius: 12, marginBottom: 10, textDecoration: "none", boxShadow: `0 4px 16px ${C.terra}30` }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, flexShrink: 0 }}>
                <Ico.Phone s={20}/>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2 }}>Appeler maintenant</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: C.white, marginTop: 2 }}>{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a href={WHATSAPP} onClick={() => trackLead("whatsapp", "contact")} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 17px", background: "#25D366", borderRadius: 12, marginBottom: 10, textDecoration: "none", boxShadow: "0 2px 12px rgba(37,211,102,0.22)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, flexShrink: 0 }}>
                <Ico.WhatsApp s={20}/>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2 }}>WhatsApp</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.white }}>Envoyer un message</div>
              </div>
            </a>

            <a href={"mailto:"+EMAIL} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 17px", background: C.warmWhite, borderRadius: 12, marginBottom: 10, textDecoration: "none", border: `1px solid ${C.beige}` }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${C.terra}15`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra, flexShrink: 0 }}>
                <Ico.Mail s={20}/>
              </div>
              <div>
                <div style={{ fontSize: 10, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2 }}>Email</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.dark }}>{EMAIL}</div>
              </div>
            </a>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
              {[
                [<Ico.Pin s={17}/>, "Zone", "Toute l'Aquitaine"],
                [<Ico.Clock s={17}/>, "Horaires", "Lun–Sam · 8h–19h"],
              ].map(([icon, label, val], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px", background: C.warmWhite, borderRadius: 12, border: `1px solid ${C.beige}` }}>
                  <div style={{ color: C.terra, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 10, color: C.sand, textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 600 }}>{label}</div>
                    <div style={{ fontSize: 13, color: C.dark, fontWeight: 600, marginTop: 1 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderRadius: 12, overflow: "hidden" }}>
              <img
                src={IMG.aquitaine}
                alt="Chantier peinture Aquitaine"
                loading="lazy"
                width={800}
                height={240}
                style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ══════════ APP ══════════
function App() {
  const [page, setPage] = useState("accueil");

  useEffect(() => {
    const names = { accueil: "Accueil", services: "Services", contact: "Devis" };
    trackPageView(names[page] || page);
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app-root" style={{ background: C.cream, minHeight: "100vh", paddingBottom: 70 }}>
      <Header page={page} setPage={setPage}/>
      <main>
        {page === "accueil"  && <PageAccueil  setPage={setPage}/>}
        {page === "services" && <PageServices setPage={setPage}/>}
        {page === "contact"  && <PageContact/>}
      </main>
      <Footer setPage={setPage}/>
      <StickyCTA setPage={setPage}/>
    </div>
  );
}

export default App;
