export const objectTypeError = (payload, target) => (
  console.error(
    `Unable to add ${typeof payload} type to object:`,
    target,
    "Change payload type to object with valid key/value pair."
));

export const objectKeyError = (isArr, key, target) => {
  if (isArr) {
    return console.warn(`Index ${key} not found, state unchanged.`);
  }

  return console.error(
    `Unable to update! "${key}" does not exist in: `, target
  );
};

export const targetError = mode => (
  console.error(`Unable to find target to ${mode}. Please check key name in state.`)
);