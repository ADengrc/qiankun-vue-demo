import { isIE } from "./assert";

export function wrapRender(render, containerId) {
  let timer = null;
  const clear = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  return function() {
    if (isIE()) {
      clear();
      timer = setInterval(() => {
        if (document.querySelector(containerId)) {
          render();
          clear();
        }
      }, 0);
    } else {
      render();
    }
  };
}
