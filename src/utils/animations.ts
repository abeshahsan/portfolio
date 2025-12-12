/**
 * Animation constants and utilities for the portfolio
 * Following Material Design easing curves for professional feel
 */

// ============================================
// EASING FUNCTIONS (Material Design Standard)
// ============================================
export const EASING = {
	// Main easing curve - smooth, professional, modern
	standard: [0.4, 0.0, 0.2, 1] as const,
	// For entering elements
	decelerate: [0.0, 0.0, 0.2, 1] as const,
	// For exiting elements
	accelerate: [0.4, 0.0, 1, 1] as const,
	// For quick interactions
	sharp: [0.4, 0.0, 0.6, 1] as const,
};

// ============================================
// ANIMATION DURATIONS (in milliseconds)
// ============================================
export const DURATION = {
	// Short elements (buttons, icons)
	short: 200,
	// Medium elements (cards, titles)
	medium: 400,
	// Large elements (whole sections)
	long: 500,
	// Very long (page transitions)
	extraLong: 600,
};

// ============================================
// STAGGER DELAYS
// ============================================
export const STAGGER = {
	// Delay between staggered children
	children: 0.1, // 100ms
	// Delay for very subtle stagger
	subtle: 0.08, // 80ms
	// Delay for prominent stagger
	prominent: 0.12, // 120ms
};

// ============================================
// SLIDE DISTANCES
// ============================================
export const SLIDE = {
	small: 15,
	medium: 20,
	large: 25,
};

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

/**
 * Section entrance animation - Fade + Slide Up
 */
export const sectionVariants = {
	hidden: {
		opacity: 0,
		y: SLIDE.medium,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: DURATION.long / 1000,
			ease: EASING.standard,
		},
	},
};

/**
 * Container for staggered children animations
 */
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: STAGGER.children,
			delayChildren: 0.1,
		},
	},
};

/**
 * Child item for staggered animations
 */
export const itemVariants = {
	hidden: {
		opacity: 0,
		y: SLIDE.small,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: DURATION.medium / 1000,
			ease: EASING.standard,
		},
	},
};

/**
 * CTA Button entrance animation
 */
export const ctaEntranceVariants = {
	hidden: {
		opacity: 0,
		scale: 0.96,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: DURATION.short / 1000,
			ease: EASING.decelerate,
		},
	},
};

/**
 * Card entrance animation
 */
export const cardVariants = {
	hidden: {
		opacity: 0,
		y: SLIDE.medium,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: DURATION.medium / 1000,
			ease: EASING.standard,
		},
	},
};

/**
 * Header text animation with letter-spacing
 */
export const headerTextVariants = {
	hidden: {
		opacity: 0,
		letterSpacing: "0.125em", // 2px equivalent
	},
	visible: {
		opacity: 1,
		letterSpacing: "normal",
		transition: {
			duration: DURATION.medium / 1000,
			ease: EASING.standard,
		},
	},
};

/**
 * Fade in animation
 */
export const fadeInVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: DURATION.medium / 1000,
			ease: EASING.standard,
		},
	},
};

// ============================================
// VIEWPORT OPTIONS FOR INTERSECTION OBSERVER
// ============================================
export const VIEWPORT = {
	// Trigger when 15% of element is visible
	default: {
		once: false,
		amount: 0.15,
	},
	// Trigger when 25% of element is visible
	medium: {
		once: false,
		amount: 0.25,
	},
	// Trigger when 10% of element is visible
	small: {
		once: false,
		amount: 0.1,
	},
};
