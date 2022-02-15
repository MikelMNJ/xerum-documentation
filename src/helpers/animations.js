
export const slideIn = "slideIn";
export const slideOut = "slideOut";
export const fadeIn = "fadeIn";
export const fadeOut = "fadeOut";
export const popIn = "popIn";
export const popOut = "popOut";

export const dismiss = args => {
  const { targets, onClose, time } = args;

  targets?.forEach(target => {
    const element = target?.current || target;
    const classes = element?.classList || [];

    if (classes.contains?.(slideIn)) {
      classes.remove(slideIn);
      classes.add(slideOut);
    }

    if (classes.contains?.(fadeIn)) {
      classes.remove(fadeIn);
      classes.add(fadeOut);
    }

    if (classes.contains?.(popIn)) {
      classes.remove(popIn);
      classes.add(popOut);
    }
  });

  setTimeout(() => {
    if (onClose) onClose();
  }, time || 350);
};