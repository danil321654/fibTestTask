const getNFibNum = n => {
  let k = 1,
    s = 1;
  n = +n;

  for (let i = 0; i < n - 1; i++) {
    let temp = s;
    s += k;
    k = temp;
  }
  return k;
};

module.exports = getNFibNum;
