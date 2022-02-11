// Framer-motion Animation variants
const variants = {
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  showRight: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  showLeft: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const pageCloseVariants = {
  hideLeft: {
    opacity: 0,
    x: "-100%",
  },
  hideRight: {
    opacity: 0,
    x: "200%",
  },
  showLeft: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  showRight: {
    opacity: 1,
    x: "99%",
    transition: {
      duration: 0.2,
    },
  },
};

export { variants, pageCloseVariants };

