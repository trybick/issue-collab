// https://john-dugan.com/javascript-debounce/
export const debounce = function(func, wait, immediate) {
  return function() {
    let timeout;
    return function() {
      const context = this;

      // eslint-disable-next-line prefer-rest-params
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait || 200);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };
};

// export const debounce = (function () {
//   var timers = {};

//   return function (callback, delay, id) {
//       delay = delay || 500;
//       id = id || "duplicated event";

//       if (timers[id]) {
//           clearTimeout(timers[id]);
//       }

//       timers[id] = setTimeout(callback, delay);
//   };
// })(); // note the call here so the call for `func_to_param` is omitted
