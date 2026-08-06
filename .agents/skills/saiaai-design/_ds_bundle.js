/* @ds-bundle: {"format":3,"namespace":"SaiaAIDesignSystem_ac1fa8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/surfaces/ServiceCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b711390367d1","components/core/BrandMark.jsx":"e3719442508e","components/core/Button.jsx":"f68a7654c3b0","components/core/Eyebrow.jsx":"fdab9c6c3bc4","components/core/Logo.jsx":"62c3c8c1e40b","components/core/TextLink.jsx":"770ebe8653e0","components/core/Wordmark.jsx":"55313784b72a","components/forms/Input.jsx":"5e8de81d3e2a","components/surfaces/Card.jsx":"8a2bb577348c","components/surfaces/ServiceCard.jsx":"8e8c7ade78fd","ui_kits/website/Footer.jsx":"52e2c63c564e","ui_kits/website/Header.jsx":"7e080617afd3","ui_kits/website/Hero.jsx":"4f3963fd94c5","ui_kits/website/Services.jsx":"4e5472a0ca79"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaiaAIDesignSystem_ac1fa8 = window.SaiaAIDesignSystem_ac1fa8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / keyword pill — pill-shaped, gold-bordered cream chip used for
 * service areas and specialties (e.g. "West Orange", "Essex County").
 */
function Badge({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--gold-border-24)",
      borderRadius: "var(--radius-pill)",
      background: "rgba(250, 248, 242, 0.78)",
      padding: "0.45rem 0.75rem",
      color: "var(--color-ink)",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9rem",
      fontWeight: 600,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BrandMark — the SaiaAI North Star symbol. A four-point guiding star with a
 * single twinkle, in gold. Use standalone (favicon, avatar, stamp) or inside the Logo lockup.
 */
function BrandMark({
  size = 40,
  solo = false,
  title = "SaiaAI",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    role: "img",
    "aria-label": title,
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), !solo && /*#__PURE__*/React.createElement("path", {
    d: "M45.5 8 L47 13.6 L52.6 15 L47 16.4 L45.5 22 L44 16.4 L38.4 15 L44 13.6 Z",
    fill: "var(--color-gold)",
    opacity: "0.92"
  }), /*#__PURE__*/React.createElement("path", {
    d: solo ? "M32 3 L35.2 28.8 L61 32 L35.2 35.2 L32 61 L28.8 35.2 L3 32 L28.8 28.8 Z" : "M30 6 L33 30 L57 33 L33 36 L30 60 L27 36 L3 33 L27 30 Z",
    fill: "var(--color-gold)"
  }));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SaiaAI Button — square-cornered, uppercase, letter-spaced.
 * Variants mirror the marketing site: primary (dark), ghost (outlined cream), dark.
 */
function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: size === "sm" ? 40 : 48,
    border: "1px solid transparent",
    borderRadius: "var(--radius-button)",
    padding: size === "sm" ? "0.55rem 0.9rem" : "0.75rem 1.05rem",
    fontFamily: "var(--font-sans)",
    fontSize: size === "sm" ? "0.9rem" : "1rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 160ms ease, box-shadow 160ms ease, background 160ms ease"
  };
  const variants = {
    primary: {
      background: "var(--color-ink)",
      color: "var(--color-cream-2)",
      boxShadow: "var(--shadow-button)"
    },
    ghost: {
      borderColor: "var(--gold-border-34)",
      background: "rgba(250, 248, 242, 0.72)",
      color: "var(--color-ink)"
    },
    dark: {
      background: "var(--color-ink)",
      color: "var(--color-cream-2)"
    }
  };
  const props = {
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-1px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)",
    ...rest
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small gold, uppercase, wide-tracked kicker above headings.
 */
function Eyebrow({
  children,
  light = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: "0 0 0.75rem",
      color: "var(--color-gold)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--eyebrow-size)",
      fontWeight: 600,
      letterSpacing: "var(--eyebrow-tracking)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the SaiaAI North Star mark locked up with the wordmark.
 * The canonical brand signature; prefer this over composing mark + wordmark by hand.
 */
function Logo({
  orientation = "horizontal",
  size = "md",
  onDark = false,
  style,
  ...rest
}) {
  const scale = {
    sm: 28,
    md: 40,
    lg: 60
  }[size] || 40;
  const wordSize = {
    sm: "1.25rem",
    md: "1.75rem",
    lg: "2.6rem"
  }[size] || "1.75rem";
  const stacked = orientation === "stacked";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: stacked ? "column" : "row",
      alignItems: "center",
      gap: stacked ? scale * 0.32 : scale * 0.42,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    size: scale
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: wordSize,
      letterSpacing: "0.14em",
      lineHeight: 1,
      color: onDark ? "var(--color-cream-2)" : "var(--color-ink)"
    }
  }, "Saia", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-gold)"
    }
  }, "AI")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — inline link with a gold underline and a sliding arrow affordance.
 */
function TextLink({
  href = "#",
  children,
  light = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      color: light ? "var(--color-gold)" : "var(--color-ink)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      textDecoration: "underline",
      textDecorationColor: "rgba(194, 164, 95, 0.72)",
      textDecorationThickness: "2px",
      textUnderlineOffset: "5px",
      ...style
    },
    onMouseEnter: e => {
      const a = e.currentTarget.querySelector("[data-arrow]");
      if (a) a.style.transform = "translateX(3px)";
    },
    onMouseLeave: e => {
      const a = e.currentTarget.querySelector("[data-arrow]");
      if (a) a.style.transform = "translateX(0)";
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "data-arrow": true,
    style: {
      marginLeft: "0.35rem",
      transition: "transform 160ms ease"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the SaiaAI logotype (text only). Serif "Saia" + gold "AI", wide-tracked.
 * For the full brand signature use Logo (mark + wordmark); for the symbol use BrandMark.
 */
function Wordmark({
  size = "md",
  onDark = false,
  style,
  ...rest
}) {
  const scale = {
    sm: "1.05rem",
    md: "1.45rem",
    lg: "2.2rem"
  }[size] || size;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: scale,
      letterSpacing: "0.16em",
      lineHeight: 1,
      color: onDark ? "var(--color-cream-2)" : "var(--color-ink)",
      ...style
    }
  }, rest), "Saia", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-gold)"
    }
  }, "AI"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field matching SaiaAI's hairline-bordered cream surfaces.
 */
function Input({
  label,
  id,
  hint,
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "0.4rem"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.85rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: "var(--color-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      minHeight: 48,
      border: "1px solid var(--color-line)",
      borderRadius: "var(--radius-sm)",
      background: "var(--color-white)",
      padding: "0.7rem 0.9rem",
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      color: "var(--color-ink)",
      outline: "none",
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--color-gold)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--color-line)"
  }, rest)), hint && /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--color-muted)",
      fontSize: "0.82rem"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the canonical SaiaAI surface: hairline border, large radius,
 * warm cream fill, soft long shadow. Used for hero cards, service summaries, steps.
 */
function Card({
  children,
  topline = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--color-line)",
      borderRadius: "var(--radius-lg)",
      background: "rgba(250, 248, 242, 0.92)",
      boxShadow: "var(--shadow-soft)",
      padding: "clamp(1.4rem, 4vw, 2rem)",
      ...style
    }
  }, rest), topline && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      width: "100%",
      marginBottom: "1.4rem",
      borderRadius: "var(--radius-pill)",
      background: "linear-gradient(90deg, var(--color-ink), var(--color-gold), var(--color-ink))"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — a Card variant for the services grid: heading, description, and a TextLink.
 */
function ServiceCard({
  title,
  href = "#",
  linkLabel = "Learn more",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--color-line)",
      borderRadius: "var(--radius-lg)",
      background: "rgba(250, 248, 242, 0.92)",
      boxShadow: "var(--shadow-soft)",
      padding: "clamp(1.25rem, 3vw, 2rem)",
      display: "grid",
      gap: "0.75rem",
      alignContent: "start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "var(--text-h3)",
      letterSpacing: "-0.01em",
      color: "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-muted)"
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href
  }, linkLabel));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// CTA band + footer (copy from partials/cta-band.html & footer.html)
function CTA() {
  const {
    Button
  } = window.SaiaAIDesignSystem_ac1fa8;
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "clamp(3rem,6vw,5rem) 0",
      background: "linear-gradient(135deg, var(--color-cream-2), rgba(194,164,95,0.11))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "clamp(2rem,6vw,5rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 0.75rem",
      color: "var(--color-gold)",
      fontSize: "0.77rem",
      fontWeight: 600,
      letterSpacing: "0.28em",
      textTransform: "uppercase"
    }
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(2.15rem,4.8vw,4rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.02,
      color: "var(--color-ink)"
    }
  }, "Tell Joe what your business is trying to do.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "mailto:Joe5saia@gmail.com"
  }, "Email Joe"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#"
  }, "Schedule a consultation"))));
}
window.CTA = CTA;
function Footer() {
  const {
    Logo
  } = window.SaiaAIDesignSystem_ac1fa8;
  const cols = [["Services", ["Custom Websites", "AI Consulting & Automation"]], ["Company", ["About Joe", "Contact"]], ["Local", ["West Orange", "Essex County", "Livingston", "South Orange"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "4rem 0 2rem",
      background: "var(--color-ink)",
      color: "var(--color-mist)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.7fr 0.7fr 1fr",
      gap: "clamp(2rem,6vw,5rem)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md",
    onDark: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-mist)",
      maxWidth: 280
    }
  }, "Boutique software consulting in West Orange, NJ. Practical software for Essex County businesses.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 0.85rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.8rem",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--color-cream-2)"
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: "0.4rem",
      padding: 0,
      margin: 0,
      listStyle: "none"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-cream-2)",
      textDecoration: "underline",
      textDecorationColor: "rgba(194,164,95,0.62)",
      textUnderlineOffset: "4px"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(168,178,194,0.2)",
      marginTop: "3rem",
      paddingTop: "1.4rem",
      color: "rgba(168,178,194,0.72)",
      fontSize: "0.9rem"
    }
  }, "\xA9 2026 SaiaAI \xB7 Joe Saia \xB7 West Orange, NJ")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// SaiaAI website — Header with sticky scroll state, services dropdown, mobile toggle
const {
  useState,
  useEffect
} = React;
function Header() {
  const {
    Logo
  } = window.SaiaAIDesignSystem_ac1fa8;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const el = document.querySelector("[data-scroll]") || window;
    el.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const link = {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 44,
    borderRadius: 999,
    padding: "0.45rem 0.8rem",
    color: "var(--color-muted)",
    fontSize: "0.95rem",
    fontWeight: 500,
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      background: "rgba(244,242,236,0.9)",
      backdropFilter: "blur(18px)",
      boxShadow: scrolled ? "var(--shadow-header)" : "none",
      transition: "border-color 180ms ease, box-shadow 180ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 76,
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.35rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: link
  }, "Home"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: link
  }, "Services"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 0.5rem)",
      left: 0,
      display: "grid",
      minWidth: 310,
      padding: "0.55rem",
      border: "1px solid var(--color-line)",
      borderRadius: "var(--radius-md)",
      background: "var(--color-cream-2)",
      boxShadow: "var(--shadow-soft)"
    }
  }, [["Websites", "Custom websites tailored to your business."], ["AI Consulting & Automation", "Find high-leverage ways to use AI without overspending."]].map(([t, s]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#services",
    style: {
      display: "grid",
      gap: "0.2rem",
      borderRadius: "var(--radius-sm)",
      padding: "0.85rem",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--color-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--color-muted)",
      fontSize: "0.82rem",
      lineHeight: 1.45
    }
  }, s))))), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: link
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: link
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 40,
      padding: "0.55rem 0.9rem",
      background: "var(--color-ink)",
      color: "var(--color-cream-2)",
      fontWeight: 600,
      fontSize: "0.9rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Email Joe"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// SaiaAI homepage hero — copy lifted from content/_index.md and partials/hero.html
function Hero() {
  const {
    Button,
    Eyebrow,
    Badge,
    Card
  } = window.SaiaAIDesignSystem_ac1fa8;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,6rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.2fr) minmax(280px,0.8fr)",
      gap: "clamp(2rem,6vw,5rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "West Orange, New Jersey"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(3.3rem,8vw,7rem)",
      letterSpacing: "-0.025em",
      lineHeight: 1.02,
      color: "var(--color-ink)",
      maxWidth: 760
    }
  }, "Practical software for Essex County businesses."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 680,
      margin: "1.35rem 0 0",
      color: "var(--color-muted)",
      fontSize: "clamp(1.05rem,2vw,1.25rem)"
    }
  }, "SaiaAI is a boutique software consultancy led by Joe Saia, helping local businesses turn technology into clearer operations, stronger customer experiences, and measurable business improvement."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.8rem",
      marginTop: "1.75rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#contact"
  }, "Email Joe"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#contact"
  }, "Schedule a consultation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.55rem",
      marginTop: "2rem"
    }
  }, ["West Orange", "Essex County", "Livingston", "South Orange"].map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b
  }, b)))), /*#__PURE__*/React.createElement(Card, {
    topline: true
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 0.75rem",
      color: "var(--color-gold)",
      fontSize: "0.77rem",
      fontWeight: 600,
      letterSpacing: "0.28em",
      textTransform: "uppercase"
    }
  }, "Boutique software consulting"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(2rem,4vw,3.1rem)",
      lineHeight: 1.05,
      color: "var(--color-ink)"
    }
  }, "Senior engineering judgment for small business problems."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-muted)"
    }
  }, "Custom websites, practical automation, and AI-enabled workflows built with a clear understanding of how your business works."), /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gap: "0.85rem",
      margin: "1.5rem 0 0"
    }
  }, [["15 years", "writing and leading software work"], ["Local", "West Orange and Essex County focus"]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gap: "0.1rem",
      borderTop: "1px solid var(--color-line)",
      paddingTop: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: "var(--color-gold)",
      fontFamily: "var(--font-serif)",
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1
    }
  }, t), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: "var(--color-muted)"
    }
  }, d)))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services grid + process (copy from services/*.md and partials/process.html)
function Services() {
  const {
    Eyebrow,
    ServiceCard
  } = window.SaiaAIDesignSystem_ac1fa8;
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: "clamp(4rem,8vw,7rem) 0",
      background: "var(--color-cream-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: "2rem"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What SaiaAI does"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(2.15rem,4.8vw,4rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.02,
      color: "var(--color-ink)"
    }
  }, "Two ways to put technology to work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Custom Websites",
    href: "#",
    linkLabel: "Explore websites"
  }, "A custom website tailored to your business, brand, and goals \u2014 not a cookie-cutter WordPress template. Responsive, fast, and built for local search."), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "AI Consulting & Automation",
    href: "#",
    linkLabel: "Explore AI & automation"
  }, "Find high-leverage ways to use AI and automation in your business without spending money on tools you do not need."))));
}
window.Services = Services;
function Process() {
  const {
    Eyebrow
  } = window.SaiaAIDesignSystem_ac1fa8;
  const steps = [["01", "Understand", "Map the goals, customers, tools, constraints, and daily work behind the request."], ["02", "Prioritize", "Separate high-value opportunities from nice-to-have technology and avoid unnecessary spend."], ["03", "Build", "Deliver clean, maintainable software, websites, or automations that your business can trust."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(4rem,8vw,7rem) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1120px, calc(100% - 2rem))",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.2fr) minmax(280px,0.8fr)",
      gap: "clamp(2rem,6vw,5rem)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "How SaiaAI works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(2.15rem,4.8vw,4rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.02,
      color: "var(--color-ink)"
    }
  }, "Approachable consulting with premium technical execution."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-muted)",
      fontSize: "1.12rem"
    }
  }, "Good software work starts with understanding the business. SaiaAI looks for the smallest high-quality solution that creates real leverage.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "1rem"
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    style: {
      border: "1px solid var(--color-line)",
      borderRadius: "var(--radius-lg)",
      background: "rgba(250,248,242,0.92)",
      boxShadow: "var(--shadow-soft)",
      padding: "1.4rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginBottom: "0.85rem",
      color: "var(--color-gold)",
      fontWeight: 600
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: "clamp(1.4rem,2.3vw,2rem)",
      color: "var(--color-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0.5rem 0 0",
      color: "var(--color-muted)"
    }
  }, d))))));
}
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
