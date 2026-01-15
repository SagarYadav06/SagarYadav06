function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

const search = debounce(() => {
  console.log("Searching...");
}, 500);
