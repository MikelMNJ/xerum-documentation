export const dismiss = args => {
  const { target, ref, classIn, classOut, onClose, time } = args;

  if (target || ref.current) {
    const classes = (target || ref.current).classList;

    classes?.remove(classIn);
    classes?.add(classOut);

    setTimeout(() => {
      if (onClose) onClose();
    }, time || 350);
  }
};