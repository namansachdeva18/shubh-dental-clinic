'use client';
/**
 * SCROLL REVEAL — Reusable IntersectionObserver-based animation wrapper.
 *
 * Uses framer-motion `whileInView` for efficient, GPU-accelerated reveals.
 * Triggers once by default. Respects `prefers-reduced-motion`.
 *
 * Usage:
 *   <ScrollReveal>
 *     <div>Any content</div>
 *   </ScrollReveal>
 *
 *   <ScrollReveal variant="slideLeft" delay={0.1}>
 *     <Card />
 *   </ScrollReveal>
 */
import { m } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show:   { opacity: 1 },
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.98 },
    show:   { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -18 },
    show:   { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 18 },
    show:   { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  variant  = 'fadeUp',
  delay    = 0,
  duration = 0.24,
  margin   = '0px',
  className,
  style,
  as = 'div',
}) {
  const Tag = m[as] || m.div;

  return (
    <Tag
      className={className}
      style={{ ...style, willChange: 'transform, opacity' }}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * STAGGER CONTAINER — Stagger-animates its direct children instantly.
 */
export function StaggerReveal({
  children,
  stagger  = 0.03,
  delay    = 0,
  margin   = '0px',
  className,
  style,
}) {
  return (
    <m.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </m.div>
  );
}

/**
 * STAGGER ITEM — Child component for StaggerReveal.
 */
export function StaggerItem({
  children,
  className,
  style,
  variant = 'fadeUp',
}) {
  const itemVariants = {
    hidden: variants[variant].hidden,
    show: {
      ...variants[variant].show,
      transition: { duration: 0.35, ease: [0.2, 0.9, 0.3, 1] },
    },
  };

  return (
    <m.div
      className={className}
      style={{ ...style, willChange: 'transform, opacity' }}
      variants={itemVariants}
    >
      {children}
    </m.div>
  );
}
