import React from "react-dom";
import Box from "./box";
import { useEffect, useState } from "react";
import { getRandomColor, shuffleArray } from "../utility";

const Boxes = () => {
  const boxHeight = "50px";
  const boxWidth = "50px";

  const [twoDArray, setTwoDArray] = useState([]);

  useEffect(() => {
    load2DArray();
  }, []);

  const load2DArray = () => {
      // boxes calculed from screen size
    const noOfColumns = Math.round(window.screen.width / 50);
    const noOfRows = Math.round(window.screen.height / 50);
    const twoDArray = [];
    for (let i = 0; i < noOfRows; i++) {
      for (let j = 0; j < noOfColumns; j++) {
        twoDArray.push({
          row: i,
          column: j,
          backGroundColor: getRandomColor(),
          updated: false,
        });
      }
    }
    setTwoDArray(twoDArray);
  };

  const handleBoxColorchange = (box, boxArray) => {
    const twoDArray = [...boxArray];
    const boxIndex = twoDArray.findIndex(
      (item) => item.row === box.row && item.column === box.column
    );
    twoDArray[boxIndex].backGroundColor = getRandomColor();
    const neighbours = getNeighbourBoxIndexes(box, boxArray);
    if (neighbours?.length > 0) {
      twoDArray[neighbours[0]].backGroundColor = getRandomColor();
    }
    setTwoDArray(twoDArray);
  };

  const getNeighbourBoxIndexes = (box, boxArray) => {
    const neighbours = [];
    const topNeighbourIndex = boxArray.findIndex(
      (item) => item.row === box.row - 1 && item.column === box.column + 1
    );
    if (topNeighbourIndex > 0) {
      neighbours.push(topNeighbourIndex);
    }
    const bottomNeighbourIndex = boxArray.findIndex(
      (item) => item.row === box.row + 1 && item.column === box.column - 1
    );
    if (bottomNeighbourIndex > 0) {
      neighbours.push(bottomNeighbourIndex);
    }
    const noOfColumns = Math.round(window.screen.width / 50);

    const leftNeighbourIndex = boxArray.findIndex(
      (item) => item.row === box.row && item.column === box.column - 1
    );
    if (leftNeighbourIndex > 0) {
      neighbours.push(leftNeighbourIndex);
    }
    const rightNeighbourIndex = boxArray.findIndex(
      (item) => item.row === box.row && item.column === box.column + 1
    );
    if (rightNeighbourIndex > 0) {
      neighbours.push(rightNeighbourIndex);
    }
    return shuffleArray(neighbours);
  };

  const props = { boxHeight, boxWidth };
  
  return (
    <div className="container">
      {twoDArray.map((box, index) => {
        const forwardProps = { ...props, ...box };
        return (
          <Box
            key={`box-${index}`}
            {...forwardProps}
            twoDArray={twoDArray}
            handleBoxColorchange={handleBoxColorchange}
          />
        );
      })}
    </div>
  );
};

export default Boxes;
