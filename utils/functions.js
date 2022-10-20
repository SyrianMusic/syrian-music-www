export const debounce = (func, timeout = 300) => {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
      func.apply(this, args);
    }, timeout);
  };
};

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
