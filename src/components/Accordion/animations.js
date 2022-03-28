import gsap from 'gsap';

const secondTime = 0.05;

export const expand = (ref, duration) => {
  let content = gsap.utils.selector(ref);
  const fadeIn = () => gsap.fromTo(content('.content'), fadeFrom, fadeTo);
  const heightFrom = { height: "3rem" };
  const heightTo = { duration, height: "auto" };
  const fadeFrom = { opacity: 0, y: "-1rem" };
  const fadeTo = {
    duration: secondTime,
    pointerEvents: "unset",
    opacity: 1,
    y: 0,
  };

  gsap.fromTo(ref.current, heightFrom, heightTo);
  gsap.delayedCall(0.1, fadeIn);
};

export const collapse = (ref, duration, setActive, callback, previous, section) => {
  let content = gsap.utils.selector(previous || ref);
  const collapse = () => gsap.to(previous?.current || ref.current, heightTo);
  const heightTo = { duration, height: "3rem" };
  const fadeFrom = { opacity: 1, y: 0 };
  const fadeTo = {
    duration: secondTime,
    pointerEvents: "none",
    opacity: 0,
    y: "-1rem",
  };

  gsap.fromTo(content('.content'), fadeFrom, fadeTo);
  gsap.delayedCall(secondTime, collapse);
  gsap.delayedCall(duration, () => {
    setActive(null);
    if (callback) callback(previous ? section : null);
  });
};