self.onmessage = ({ data }) => {
  console.log(data.num);
  const fn = async () => {
    self.postMessage({ num: parseInt(data.num) * parseInt(data.num) });
  };

  setInterval(fn, 3000);
};
