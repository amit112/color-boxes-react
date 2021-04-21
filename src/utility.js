const getRandomColor = () => {
  return "#" + getColorCode() + getColorCode() + getColorCode();
};

const getColorCode = () => {
  var hex = Math.floor(Math.random() * 256).toString(16);
  return ("0" + String(hex)).substr(-2);
};
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export { getRandomColor, shuffleArray };
