import React from "react";

let Box = (props) => {
  const {
    boxHeight: height,
    boxWidth: width,
    backGroundColor: background,
    handleBoxColorchange,
    column,
    row,
    twoDArray,
  } = props;

  const style = {
    height,
    width,
    background,
  };

  return (
    <div
      style={style}
      onClick={() => handleBoxColorchange({ column, row }, twoDArray)}
    ></div>
  );
};

export default Box = React.memo(Box, (prevProps, nextProps) => {
  if (prevProps.backGroundColor === nextProps.backGroundColor) {
    return true;
  }
  return false;
});
