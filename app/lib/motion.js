'use client';
/**
 * CENTRALIZED MOTION SYSTEM
 * Shubh Orthodontic & Dental Clinic
 *
 * All animation values live here. Never scatter animation constants in components.
 * Change once — applies everywhere.
 *
 * Design principle: Premium healthcare = restraint, precision, calmness.
 * NOT flashy. NOT bouncy. NOT childish.
 */

// ─────────────────────────────────────────────────────────────────────────────
// EASING CURVES
// ─────────────────────────────────────────────────────────────────────────────
export const ease = {
  // Standard UI transitions — most common
  standard:   [0.16, 1, 0.3, 1],
  // More deliberate — for hero/large reveals
  emphasized: [0.2, 0, 0, 1],
  // Gentle deceleration — cards, content
  out:        [0.0, 0.0, 0.2, 1],
  // Spring-like without actual spring physics overhead
  spring:     [0.34, 1.06, 0.64, 1],
};

// ─────────────────────────────────────────────────────────────────────────────
// DURATIONS (in seconds)
// ─────────────────────────────────────────────────────────────────────────────
export const dur = {
  micro:  0.18,  // Micro-interactions: button tap, icon state
  fast:   0.28,  // Fast UI: filter pills, toggle
  normal: 0.5,   // Standard section reveals
  slow:   0.7,   // Hero, image reveals
  xslow:  0.9,   // Very deliberate / large imagery
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER DELAYS (seconds between each child)
// ─────────────────────────────────────────────────────────────────────────────
export const stagger = {
  xs:  0.04,  // Dense grids (many items)
  sm:  0.07,  // Cards, list items (mobile-optimised)
  md:  0.10,  // Standard stagger
  lg:  0.14,  // Deliberate, hero-level
};

// ─────────────────────────────────────────────────────────────────────────────
// TRAVEL DISTANCE (translateY, px)
// ─────────────────────────────────────────────────────────────────────────────
export const dist = {
  xs: 12,   // Subtle micro-reveal
  sm: 20,   // Mobile-optimised (use on mobile)
  md: 28,   // Standard section reveals
  lg: 40,   // Hero / large elements (desktop)
};

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE FRAMER-MOTION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Standard fade + rise — most used variant.
 * Usage: <motion.div variants={fadeUp} initial="hidden" animate="show" />
 */
export const fadeUp = {
  hidden: { opacity: 0, y: dist.md },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: dur.normal, ease: ease.standard }
  }
};

/**
 * Mobile-optimised fade + rise (shorter travel).
 */
export const fadeUpMobile = {
  hidden: { opacity: 0, y: dist.sm },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: dur.normal, ease: ease.standard }
  }
};

/**
 * Fade in without movement — for backgrounds, overlays, subtle elements.
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: dur.normal, ease: ease.out } }
};

/**
 * Scale reveal — for cards, images, callout boxes.
 */
export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  show:   {
    opacity: 1, scale: 1,
    transition: { duration: dur.normal, ease: ease.standard }
  }
};

/**
 * Slide in from left — for left-column content, doctor panels, etc.
 */
export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  show:   {
    opacity: 1, x: 0,
    transition: { duration: dur.normal, ease: ease.standard }
  }
};

/**
 * Slide in from right — for right-column content, images, etc.
 */
export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  show:   {
    opacity: 1, x: 0,
    transition: { duration: dur.normal, ease: ease.standard }
  }
};

/**
 * Hero-speed fade up — longer travel, slower duration, more deliberate.
 */
export const heroFadeUp = {
  hidden: { opacity: 0, y: dist.lg },
  show:   {
    opacity: 1, y: 0,
    transition: { duration: dur.slow, ease: ease.emphasized }
  }
};

/**
 * Image reveal — subtle scale from slightly zoomed in + fade.
 * Use on Next.js <Image> wrapper divs only.
 */
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  show:   {
    opacity: 1, scale: 1,
    transition: { duration: dur.xslow, ease: ease.emphasized }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER CONTAINERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Standard stagger container.
 * Apply to parent, use fadeUp/scaleReveal on children.
 */
export const staggerContainer = (delay = 0, staggerVal = stagger.md) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerVal,
      delayChildren: delay,
    }
  }
});

/**
 * Section-level stagger — for large layout grids.
 */
export const sectionStagger = staggerContainer(0.1, stagger.sm);

/**
 * Card grid stagger — for service/treatment card grids.
 */
export const cardStagger = staggerContainer(0.05, stagger.xs);

// ─────────────────────────────────────────────────────────────────────────────
// ACCORDION (FAQ) ANIMATION
// ─────────────────────────────────────────────────────────────────────────────
export const accordionContent = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: dur.fast, ease: ease.out }
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { duration: dur.fast, ease: ease.standard }
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT CONFIG
// Default: trigger once, begin reveal slightly before element enters view.
// ─────────────────────────────────────────────────────────────────────────────
export const viewport = {
  once: true,
  margin: '-80px',    // Start animation 80px before fully in view
  amount: 0.1,        // Trigger when 10% is visible
};

export const viewportEarly = {
  once: true,
  margin: '-40px',
  amount: 0.05,
};

export const viewportLate = {
  once: true,
  margin: '-120px',
  amount: 0.2,
};
