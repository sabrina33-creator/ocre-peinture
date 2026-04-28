import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import Malek from "./Malek.jpeg";
import photopeinture from "./photopeinture.jpg";
import photopeinture1 from "./photopeinture1.jpg"
import salon2 from "./salon2.jpg"
import salonnetflix from "./salonnetflix.png"
import remise from "./remise.jpg"
import hero from "./hero.jpg"
/* ═══════════════════════════════════════
   OCRÉ — Site Complet
   Peinture Professionnelle · Aquitaine
   ═══════════════════════════════════════ */

const C = {
  cream: "#FAF7F2",
  warmWhite: "#FFFDF9",
  beige: "#EDE5D8",
  sand: "#8C8680",
  terra: "#C4813A",       // Ochre — couleur principale, CTA
  sage: "#2B3440",        // Slate — logo, nav, boutons sombres
  sageDark: "#1E2630",
  dark: "#1A1A1A",
  darkSoft: "#4A4A48",
  white: "#FFFFFF",
};

const PHONE = "tel:+33782674494";           // ← Remplacer par le vrai numéro de Malek
const PHONE_DISPLAY = "+33 6 82 67 44 94";  // ← Remplacer par le vrai numéro de Malek
const EMAIL = "ocre.peinture.aquitaine@gmail.com";   // ← Remplacer par le vrai email de Malek

const IMG = {
  hero:       hero,
  interieur:  salon2,
  exterieur:  photopeinture1,
  pro:        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  renovation: remise,
  chantier:    Malek,
  detail:     salonnetflix,
  aquitaine:  photopeinture,
};
// ── Animation scroll ──
function FadeIn({ children, delay = 0, style = {} }) {
  const [v, setV] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (<div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>{children}</div>);
}

// ── Icônes ──
const Ico = {
  Phone: ({s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: ({s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.terra} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Pin: ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Menu: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Brush: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.67 2.02 5 2.02 2.8 0 5-2.1 5-4.04 0-1.67-1.33-3.02-3-3.02h-2z"/></svg>,
  Home: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Building: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="22" x2="9" y2="2"/><line x1="15" y1="22" x2="15" y2="2"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>,
  Sun: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Sparkle: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
  Clock: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Shield: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  TrendUp: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  AlertCircle: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  Eye: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Users: ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

// ── Logo Ocré ──
function OcreLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill={C.sage}/>
      <text x="20" y="28" fontFamily="Georgia, 'Times New Roman', serif" fontSize="22"
            fontWeight="900" textAnchor="middle" fill="white">O</text>
    </svg>
  );
}

// ── Bouton CTA ──
function Btn({ href, onClick, children, bg, color = C.white, border, style = {} }) {
  const base = { display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", transition: "transform 0.2s, opacity 0.2s", background: bg || C.terra, color, border: border || "none", boxShadow: `0 2px 12px ${(bg || C.terra)}40`, textDecoration: "none", ...style };
  if (href) return <a href={href} style={base}>{children}</a>;
  return <div onClick={onClick} style={base}>{children}</div>;
}

// ══════════ HEADER ══════════
function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const goTo = (p) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0 }); };
  const links = [{ id: "accueil", label: "Accueil" }, { id: "services", label: "Services" }, { id: "contact", label: "Devis" }];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: (scrolled || page !== "accueil") ? "rgba(250,247,242,0.97)" : "transparent", backdropFilter: (scrolled || page !== "accueil") ? "blur(14px)" : "none", borderBottom: (scrolled || page !== "accueil") ? `1px solid ${C.beige}` : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => goTo("accueil")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
          <OcreLogo size={38}/>
          <div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: (scrolled || page !== "accueil") ? C.dark : C.white, letterSpacing: "-0.5px", transition: "color 0.4s" }}>Ocré</span>
            <div style={{ fontSize: 9, color: (scrolled || page !== "accueil") ? C.sand : "rgba(255,255,255,0.7)", letterSpacing: 1.5, fontWeight: 500, marginTop: -2, textTransform: "uppercase", transition: "color 0.4s" }}>Peinture · Aquitaine</div>
          </div>
        </div>
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(n => (<span key={n.id} onClick={() => goTo(n.id)} style={{ fontSize: 14, fontWeight: 500, cursor: "pointer", color: page === n.id ? C.terra : ((scrolled || page !== "accueil") ? C.darkSoft : "rgba(255,255,255,0.85)"), borderBottom: page === n.id ? `2px solid ${C.terra}` : "2px solid transparent", paddingBottom: 4, transition: "all 0.3s" }}>{n.label}</span>))}
          <Btn href={PHONE} bg={C.terra} style={{ padding: "10px 20px", fontSize: 13 }}><Ico.Phone s={15}/> Appeler Malek</Btn>
        </nav>
        <div className="nav-burger" style={{ display: "none", cursor: "pointer", color: (scrolled || page !== "accueil") ? C.dark : C.white }} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <Ico.X/> : <Ico.Menu/>}</div>
      </div>
      {menuOpen && (
        <div style={{ position: "fixed", top: 72, left: 0, right: 0, bottom: 0, background: C.cream, padding: "40px 24px", zIndex: 999, display: "flex", flexDirection: "column", gap: 28 }}>
          {links.map(n => (<span key={n.id} onClick={() => goTo(n.id)} style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 600, color: page === n.id ? C.terra : C.dark, cursor: "pointer" }}>{n.label}</span>))}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <Btn href={PHONE} bg={C.sage} style={{ flex: 1, justifyContent: "center", padding: 16 }}><Ico.Phone s={15}/> Appeler</Btn>
            <Btn onClick={() => goTo("contact")} bg={C.terra} style={{ flex: 1, justifyContent: "center", padding: 16 }}><Ico.Mail s={15}/> Devis gratuit</Btn>
          </div>
        </div>
      )}
      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-burger{display:block!important}}`}</style>
    </header>
  );
}

// ══════════ STICKY CTA MOBILE ══════════
function StickyCTA({ setPage }) {
  return (
    <div>
      <div className="sticky-cta" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, background: "rgba(250,247,242,0.97)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.beige}`, padding: "10px 16px", display: "none", gap: 10 }}>
        <Btn href={PHONE} bg={C.sage} style={{ flex: 1, justifyContent: "center", padding: "13px 6px", fontSize: 14, borderRadius: 10 }}><Ico.Phone s={15}/> Appeler</Btn>
        <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg={C.terra} style={{ flex: 1, justifyContent: "center", padding: "13px 6px", fontSize: 14, borderRadius: 10 }}><Ico.Mail s={15}/> Devis gratuit</Btn>
      </div>
      <style>{`@media(max-width:768px){.sticky-cta{display:flex!important}}`}</style>
    </div>
  );
}

// ══════════ FOOTER ══════════
function Footer({ setPage }) {
  const goTo = (p) => { setPage(p); window.scrollTo({ top: 0 }); };
  return (
    <footer style={{ background: C.sage, padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, marginBottom: 48 }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <OcreLogo size={32}/>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.cream }}>Ocré</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.sand, maxWidth: 300 }}>Peintre professionnel en Aquitaine. Particuliers et entreprises. Le travail bien fait, chaque fois.</p>
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: C.cream, letterSpacing: 1.5, marginBottom: 18, textTransform: "uppercase" }}>Navigation</h4>
            {["accueil","services","contact"].map(p => (<div key={p} onClick={() => goTo(p)} style={{ fontSize: 14, color: C.sand, cursor: "pointer", marginBottom: 12, textTransform: p === "contact" ? "none" : "capitalize" }}>{p === "contact" ? "Devis gratuit" : p.charAt(0).toUpperCase()+p.slice(1)}</div>))}
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: C.cream, letterSpacing: 1.5, marginBottom: 18, textTransform: "uppercase" }}>Contact</h4>
            <p style={{ fontSize: 14, color: C.sand, lineHeight: 2 }}>Toute l'Aquitaine<br/>{PHONE_DISPLAY}<br/>{EMAIL}</p>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: C.cream, letterSpacing: 1.5, marginBottom: 18, textTransform: "uppercase" }}>Zones</h4>
            <p style={{ fontSize: 14, color: C.sand, lineHeight: 2 }}>Bordeaux & agglo<br/>Bassin d'Arcachon<br/>Bayonne · Pau<br/>Mont-de-Marsan</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(140,134,128,0.2)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 12, color: "rgba(140,134,128,0.5)" }}>
          <span>© 2026 Ocré — Peinture Aquitaine</span>
          <span>Assurance décennale · SIRET en cours</span>
        </div>
      </div>
    </footer>
  );
}

// ══════════ PAGE ACCUEIL ══════════
function PageAccueil({ setPage }) {
  const problemes = [
    { icon: <Ico.Clock s={24}/>, title: "L'artisan qui ne rappelle pas", desc: "Vous avez demandé 3 devis, personne ne vous a répondu. Chez Ocré, réponse garantie sous 48h." },
    { icon: <Ico.AlertCircle s={24}/>, title: "Des délais non tenus", desc: "Le chantier devait durer une semaine, il en a duré trois. Malek s'engage sur des dates et les respecte." },
    { icon: <Ico.Eye s={24}/>, title: "Des finitions bâclées", desc: "Traces de pinceau, découpes imprécises, murs striés. Une finition soignée, ça se voit — et ça se négocie pas." },
    { icon: <Ico.Shield s={24}/>, title: "Un chantier laissé sale", desc: "Protection des meubles, nettoyage après travaux. Malek part quand tout est propre, pas avant." },
  ];

  const valeurs = [
    { icon: <Ico.Clock s={28}/>, title: "Ponctualité", desc: "Présent à l'heure prévue. Chantier livré dans les délais convenus." },
    { icon: <Ico.Sparkle s={28}/>, title: "Finition soignée", desc: "Découpes propres, angles nets, surfaces lisses. Pas de compromis sur la qualité." },
    { icon: <Ico.Shield s={28}/>, title: "Propreté du chantier", desc: "Bâches, protections, nettoyage final inclus. Vous retrouvez votre espace impeccable." },
    { icon: <Ico.TrendUp s={28}/>, title: "Devis transparent", desc: "Prix clair, sans surprise. Ce qui est écrit est ce qui est facturé." },
  ];

  const stats = [
    { num: "+200", label: "chantiers réalisés" },
    { num: "10 ans", label: "d'expérience" },
    { num: "4 dép.", label: "d'intervention" },
    { num: "48h", label: "pour un devis" },
  ];

  return (<div>
    {/* ── HERO ── */}
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={IMG.hero} alt="Chantier peinture professionnel" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(27,32,40,0.82) 0%, rgba(27,32,40,0.5) 60%, rgba(27,32,40,0.2) 100%)" }}/>
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", padding: "8px 20px", borderRadius: 50, marginBottom: 28, border: "1px solid rgba(255,255,255,0.2)" }}>
            <Ico.Pin s={14}/><span style={{ fontSize: 12, color: C.white, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Aquitaine — Gironde · Landes · Béarn · Pays Basque</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,6vw,58px)", fontWeight: 700, color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            Peintre professionnel<br/>à Bordeaux et en Aquitaine.<br/><span style={{ color: C.terra, fontStyle: "italic" }}>Le travail bien fait.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
            Artisan peintre en Gironde depuis plus de 10 ans. Malek intervient pour les particuliers et les professionnels — peinture intérieure, extérieure, ravalement de façade.
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Btn href={PHONE} bg={C.terra} style={{ fontSize: 16, padding: "16px 32px" }}><Ico.Phone s={18}/> Appeler Malek</Btn>
            <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg="transparent" border={`2px solid rgba(255,255,255,0.5)`} style={{ fontSize: 16, padding: "14px 32px" }}>Devis gratuit →</Btn>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>Réponse garantie sous 48h · Devis gratuit et sans engagement</p>
        </FadeIn>
      </div>
    </section>

    {/* ── STATS ── */}
    <section style={{ background: C.sage, padding: "48px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 32, textAlign: "center" }}>
        {stats.map((s,i) => (
          <FadeIn key={i} delay={i*0.1}>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: C.terra }}>{s.num}</div>
              <div style={{ fontSize: 13, color: C.sand, marginTop: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    {/* ── SECTION PROBLÈMES ── */}
    <section style={{ padding: "100px 24px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Vous avez déjà vécu ça ?</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark, marginTop: 12 }}>Les problèmes que vous ne <span style={{ color: C.terra, fontStyle: "italic" }}>voulez plus</span> avoir</h2>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20 }}>
          {problemes.map((p,i) => (
            <FadeIn key={i} delay={i*0.1}><div style={{ background: C.white, borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", borderLeft: `4px solid ${C.terra}30` }}>
              <div style={{ color: C.terra, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: C.darkSoft, lineHeight: 1.6 }}>{p.desc}</p>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── À PROPOS DE MALEK ── */}
    <section style={{ padding: "100px 24px", background: C.cream }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
        <FadeIn style={{ flex: "1 1 420px" }}>
          <div style={{ borderRadius: 20, overflow: "hidden" }}>
            <img src={IMG.chantier} alt="Malek au travail" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}/>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} style={{ flex: "1 1 360px" }}>
          <span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Qui est Malek ?</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: C.dark, lineHeight: 1.25, marginTop: 12, marginBottom: 16 }}>
            Pas d'intermédiaire.<br/><span style={{ color: C.terra, fontStyle: "italic" }}>C'est lui qui fait le travail.</span>
          </h2>
          <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 16 }}>
            Artisan peintre en Gironde depuis plus de 10 ans, Malek intervient lui-même sur chaque chantier. Du premier devis peinture à Bordeaux à la dernière couche, vous échangez directement avec lui.
          </p>
          <p style={{ fontSize: 16, color: C.darkSoft, lineHeight: 1.8, marginBottom: 28 }}>
            Aucune sous-traitance. Aucune surprise. Une seule exigence : que vous soyez fier du résultat.
          </p>
          <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg={C.terra}>Demander un devis →</Btn>
        </FadeIn>
      </div>
    </section>

    {/* ── SERVICES APERÇU ── */}
    <section style={{ padding: "100px 24px", background: C.warmWhite }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, color: C.sand, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Ce que fait Malek</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark, marginTop: 12 }}>Peinture intérieure, extérieure et <span style={{ color: C.terra, fontStyle: "italic" }}>remise en état</span></h2>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
          {[
            { icon: <Ico.Home s={28}/>, title: "Peinture intérieure", desc: "Murs, plafonds, boiseries. Malek assure la peinture intérieure à Bordeaux et dans toute la Gironde, de la préparation aux finitions." },
            { icon: <Ico.Sun s={28}/>, title: "Peinture extérieure", desc: "Ravalement de façade à Bordeaux et en Aquitaine. Volets, sous-faces, traitement anti-humidité. Devis sur site gratuit." },
            { icon: <Ico.Building s={28}/>, title: "Chantiers pro", desc: "Bureaux, commerces, copropriétés en Gironde. Intervention planifiée selon vos contraintes, délais tenus." },
            { icon: <Ico.Brush s={28}/>, title: "Remise en état", desc: "Après sinistre ou départ locataire. Malek intervient rapidement pour une remise en état soignée." },
          ].map((s,i) => (
            <FadeIn key={i} delay={i*0.1}>
              <div style={{ background: C.white, borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", textAlign: "center", height: "100%" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${C.terra}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: C.terra }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: C.darkSoft, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}><div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn onClick={() => { setPage("services"); window.scrollTo({ top: 0 }); }} bg={C.sage}>Voir toutes nos prestations →</Btn>
        </div></FadeIn>
      </div>
    </section>

    {/* ── VALEURS ── */}
    <section style={{ padding: "100px 24px", background: C.cream }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, color: C.dark }}>Ce que vous pouvez <span style={{ color: C.terra, fontStyle: "italic" }}>exiger de nous</span></h2>
        </div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
          {valeurs.map((v,i) => (
            <FadeIn key={i} delay={i*0.1}><div style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${C.sage}10`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: C.sage }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: C.darkSoft, lineHeight: 1.6 }}>{v.desc}</p>
            </div></FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── GALERIE PHOTOS ── */}
    <section style={{ padding: "0 24px 100px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {[IMG.interieur, IMG.exterieur, IMG.pro].map((src,i) => (
          <FadeIn key={i} delay={i*0.1}>
            <div style={{ borderRadius: 20, overflow: "hidden" }}>
              <img src={src} alt="Chantier Ocré" style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}/>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    {/* ── CTA FINAL ── */}
    <section style={{ padding: "80px 24px", background: C.sage, textAlign: "center" }}>
      <FadeIn>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, color: C.white, marginBottom: 16 }}>Votre chantier mérite un <span style={{ color: C.terra, fontStyle: "italic" }}>artisan peintre sérieux</span></h2>
        <p style={{ fontSize: 16, color: C.sand, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>Devis peinture à Bordeaux gratuit — réponse sous 48h — toute l'Aquitaine.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Btn href={PHONE} bg={C.terra} style={{ fontSize: 16, padding: "16px 36px" }}><Ico.Phone s={18}/> Appeler Malek</Btn>
          <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg="transparent" border={`2px solid rgba(255,255,255,0.4)`} style={{ fontSize: 16, padding: "14px 36px" }}>Envoyer une demande →</Btn>
        </div>
      </FadeIn>
    </section>
  </div>);
}

// ══════════ PAGE SERVICES ══════════
function PageServices({ setPage }) {
  const services = [
    {
      icon: <Ico.Home s={32}/>,
      title: "Peinture intérieure",
      subtitle: "Particuliers & copropriétés",
      img: IMG.detail,
      items: ["Murs et plafonds toutes surfaces","Boiseries, plinthes, huisseries","Enduits décoratifs et effets matière","Mise en peinture complète après rénovation","Rafraîchissement locatif entre deux locataires"],
      desc: "Murs, plafonds, boiseries, enduits décoratifs — Malek assure la peinture intérieure à Bordeaux et dans toute la Gironde. Préparation des surfaces, protections et finitions soignées incluses.",
    },
    {
      icon: <Ico.Sun s={32}/>,
      title: "Peinture extérieure",
      subtitle: "Façades & ravalement",
      img: IMG.exterieur,
      items: ["Ravalement de façade complet","Peinture de volets et fenêtres","Sous-faces, avant-toits, appuis de fenêtre","Traitement anti-humidité et préparation","Nettoyage haute pression inclus"],
      desc: "Peintre en bâtiment en Gironde, Malek réalise le ravalement de façade et la peinture extérieure à Bordeaux. Chaque support est traité avec le matériau adapté : crépi, bois, béton, aluminium.",
    },
    {
      icon: <Ico.Building s={32}/>,
      title: "Chantiers professionnels",
      subtitle: "Entreprises & commerces",
      img: IMG.pro,
      items: ["Bureaux et open spaces","Commerces, restaurants, boutiques","Halls et parties communes de copropriété","Entrepôts et locaux industriels","Intervention hors horaires si besoin"],
      desc: "Artisan peintre en Gironde, Malek intervient pour les professionnels : bureaux, commerces, copropriétés. Délais respectés, travail en plusieurs phases si besoin.",
    },
    {
      icon: <Ico.Brush s={32}/>,
      title: "Remise en état",
      subtitle: "Rapide et soigné",
      img: IMG.renovation,
      items: ["Remise en état après sinistre (dégât des eaux, incendie)","Sortie de locataire : état des lieux impeccable","Après travaux : raccords et finitions","Retouches ponctuelles","Intervention sous 72h si urgence"],
      desc: "Dégât des eaux, sortie de locataire, fin de chantier — Malek remet votre bien en état rapidement. Résultat propre, prêt à être habité ou mis en location.",
    },
  ];

  return (<div style={{ paddingTop: 72 }}>
    {/* HERO SERVICES */}
    <section style={{ background: C.sage, padding: "80px 24px 64px", textAlign: "center" }}>
      <FadeIn>
        <span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Peinture intérieure & extérieure</span>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, color: C.white, marginTop: 12, marginBottom: 16 }}>Peintre en bâtiment <span style={{ color: C.terra, fontStyle: "italic" }}>en Aquitaine</span></h1>
        <p style={{ fontSize: 16, color: C.sand, maxWidth: 500, margin: "0 auto" }}>Particuliers, professionnels, copropriétés — Malek intervient pour tous types de chantiers en Gironde et dans toute l'Aquitaine.</p>
      </FadeIn>
    </section>

    {/* LISTE SERVICES */}
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
        {services.map((s,i) => (
          <FadeIn key={i}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center", flexDirection: i%2===0 ? "row" : "row-reverse" }}>
              <div style={{ flex: "1 1 400px", borderRadius: 20, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}/>
              </div>
              <div style={{ flex: "1 1 340px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: `${C.terra}12`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.dark }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: C.terra, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.subtitle}</div>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: C.darkSoft, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.items.map((t,j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}><Ico.Check/><span style={{ fontSize: 14, color: C.dark }}>{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: "80px 24px", background: C.cream, textAlign: "center" }}>
      <FadeIn>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: C.dark, marginBottom: 12 }}>Besoin d'un devis peinture à Bordeaux ?</h2>
        <p style={{ fontSize: 16, color: C.darkSoft, marginBottom: 32 }}>Devis gratuit — réponse sous 48h — sans engagement</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Btn href={PHONE} bg={C.terra} style={{ fontSize: 16, padding: "16px 36px" }}><Ico.Phone s={18}/> Appeler Malek</Btn>
          <Btn onClick={() => { setPage("contact"); window.scrollTo({ top: 0 }); }} bg={C.sage} style={{ fontSize: 16, padding: "16px 36px" }}><Ico.Mail s={18}/> Demande par formulaire</Btn>
        </div>
      </FadeIn>
    </section>
  </div>);
}

// ══════════ PAGE CONTACT ══════════
function PageContact() {
  const [state, handleSubmit] = useForm("xjgjqdza");

  const inp = { width: "100%", padding: "14px 16px", borderRadius: 10, background: C.warmWhite, border: `1px solid ${C.beige}`, fontSize: 15, color: C.dark, outline: "none" };
  const lab = { display: "block", fontSize: 12, fontWeight: 600, color: C.darkSoft, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 };

  return (<div style={{ paddingTop: 72, background: C.cream, minHeight: "100vh" }}>
    <section style={{ padding: "64px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>

        {/* FORMULAIRE */}
        <FadeIn style={{ flex: "1 1 460px" }}>
          <span style={{ fontSize: 12, color: C.terra, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>Devis gratuit</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,4vw,36px)", fontWeight: 700, color: C.dark, marginTop: 10, marginBottom: 8 }}>Décrivez-nous votre <span style={{ color: C.terra, fontStyle: "italic" }}>chantier</span></h2>
          <p style={{ fontSize: 14, color: C.sand, marginBottom: 32 }}>Artisan peintre en Gironde — Malek vous répond sous 48h. Sans engagement.</p>

          {state.succeeded ? (
            <div style={{ background: C.sage, borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: C.white, marginBottom: 12 }}>Demande envoyée !</h3>
              <p style={{ fontSize: 15, color: C.sand, lineHeight: 1.7 }}>Malek vous répond dans les 48h. Si c'est urgent, appelez directement.</p>
              <Btn href={PHONE} bg={C.terra} style={{ marginTop: 24 }}><Ico.Phone s={15}/> {PHONE_DISPLAY}</Btn>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label style={lab}>Prénom</label><input name="prenom" placeholder="Votre prénom" style={inp} required/></div>
                <div><label style={lab}>Nom</label><input name="nom" placeholder="Votre nom" style={inp}/></div>
              </div>
              <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label style={lab}>Téléphone</label><input name="telephone" placeholder="06 xx xx xx xx" style={inp} required/></div>
                <div><label style={lab}>Email</label><input name="email" placeholder="votre@email.fr" style={inp}/></div>
              </div>
              <div style={{ marginTop: 16 }}>
                <label style={lab}>Ville</label>
                <input name="ville" placeholder="Ex : Bordeaux, Bayonne, Pau..." style={inp}/>
              </div>
              <div style={{ marginTop: 16 }}>
                <label style={lab}>Type de chantier</label>
                <select name="typeChantier" style={inp}>
                  <option value="">Sélectionnez</option>
                  <option>Peinture intérieure — particulier</option>
                  <option>Peinture extérieure / façade</option>
                  <option>Chantier professionnel</option>
                  <option>Remise en état locatif</option>
                  <option>Après sinistre</option>
                  <option>Autre</option>
                </select>
              </div>
              <div style={{ marginTop: 16 }}>
                <label style={lab}>Surface approximative</label>
                <select name="surface" style={inp}>
                  <option value="">Sélectionnez</option>
                  <option>Moins de 30 m²</option>
                  <option>30 à 60 m²</option>
                  <option>60 à 100 m²</option>
                  <option>100 à 200 m²</option>
                  <option>Plus de 200 m²</option>
                  <option>Je ne sais pas</option>
                </select>
              </div>
              <div style={{ marginTop: 16 }}>
                <label style={lab}>Description / précisions</label>
                <textarea name="message" placeholder="Décrivez votre projet : état des murs, couleurs souhaitées, contraintes, délais..." rows={4} style={{ ...inp, resize: "vertical" }}/>
              </div>
              <div style={{ marginTop: 28 }}>
                <button type="submit" disabled={state.submitting} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "16px", borderRadius: 12, background: C.terra, color: C.white, fontSize: 16, fontWeight: 700, cursor: state.submitting ? "not-allowed" : "pointer", opacity: state.submitting ? 0.7 : 1, border: "none", boxShadow: `0 4px 20px ${C.terra}40` }}>
                  <Ico.Mail s={18}/> {state.submitting ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
              </div>
            </form>
          )}
        </FadeIn>

        {/* COORDONNÉES */}
        <FadeIn delay={0.2} style={{ flex: "1 1 300px" }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 24 }}>Contacter Malek directement</h3>

          <a href={PHONE} style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px", background: C.terra, borderRadius: 16, marginBottom: 16, textDecoration: "none", boxShadow: `0 4px 16px ${C.terra}30` }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: C.white }}><Ico.Phone s={22}/></div>
            <div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Appeler maintenant</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: C.white, marginTop: 2 }}>{PHONE_DISPLAY}</div>
            </div>
          </a>

          <a href={"mailto:"+EMAIL} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.terra}10`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra }}><Ico.Mail s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Email</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>{EMAIL}</div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.sage}10`, display: "flex", alignItems: "center", justifyContent: "center", color: C.sage }}><Ico.Pin s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Zone d'intervention</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>Toute l'Aquitaine</div>
            </div>
          </div>

          <div style={{ padding: "18px 20px", background: C.white, borderRadius: 16, marginBottom: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.terra}10`, display: "flex", alignItems: "center", justifyContent: "center", color: C.terra }}><Ico.Clock s={20}/></div>
            <div>
              <div style={{ fontSize: 12, color: C.sand, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Disponibilité</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>Lun – Sam · 8h à 19h</div>
            </div>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden" }}>
            <img src={IMG.aquitaine} alt="Aquitaine" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}/>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>);
}

// ══════════ APP PRINCIPAL ══════════
function App() {
  const [page, setPage] = useState("accueil");

  return (
    <div style={{ paddingBottom: 70 }}>
      <Header page={page} setPage={setPage}/>
      {page === "accueil"  && <PageAccueil setPage={setPage}/>}
      {page === "services" && <PageServices setPage={setPage}/>}
      {page === "contact"  && <PageContact/>}
      <Footer setPage={setPage}/>
      <StickyCTA setPage={setPage}/>
    </div>
  );
}

export default App;