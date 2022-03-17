
export const slideIn = "slideIn";
export const slideOut = "slideOut";
export const fadeIn = "fadeIn";
export const fadeOut = "fadeOut";
export const popIn = "popIn";
export const popOut = "popOut";

export const dismiss = args => {
  const { targets, onClose, time } = args;

  targets?.forEach(target => {
    transitionOut(target, slideOut);
    transitionOut(target, fadeOut);
    transitionOut(target, popOut);
  });

  if (onClose) {
    setTimeout(() => onClose(), time || 200);
  }
};

function transitionOut(target, classOut) {
  const element = target?.current || target;
  const classes = element?.classList || [];
  classes.add?.(classOut);
};