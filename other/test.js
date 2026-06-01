function delay(ms) {
  // ваш код

  return new Promise((res, req) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

delay(1000).then(() => {
  console.log("1 second");
});
