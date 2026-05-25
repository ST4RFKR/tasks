function debounce(fn, delay) {
  let timerId;

  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(), delay);
  };
}

const debouncedLog = debounce(() => {
  console.log("search");
}, 500);

debouncedLog();
