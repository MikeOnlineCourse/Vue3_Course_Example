export const numPrice = (num) => {
  const n = num + "";
  const numArr = n.split("").reverse();
  const overArr = [];
  let i = 0;
  numArr.forEach((item) => {
    i++;
    if (i > 3) {
      i = 1;
      overArr.push(",");
    }
    overArr.push(item);
  });
  overArr.reverse();
  return overArr.join("");
};
