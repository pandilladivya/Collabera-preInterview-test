import React, { useState } from "react";

enum BtnColor {
  Red = "red",
  Blue = "blue",
  Green = "green",
}
interface StateProps {
  lastClicked?: Date;
  buttonColor: BtnColor;
}

const App: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    lastClicked: undefined,
    buttonColor: BtnColor.Red,
  });

  const { lastClicked, buttonColor } = state;

  const onClick = () => {
    setState((prevState) => ({
      lastClicked: new Date(),
      buttonColor: getNextButtonColor(prevState.buttonColor),
    }));
  };

  const getNextButtonColor = (currentColor: BtnColor): BtnColor => {
    switch (currentColor) {
      case BtnColor.Red:
        return BtnColor.Blue;
      case BtnColor.Blue:
        return BtnColor.Green;
      case BtnColor.Green:
        return BtnColor.Red;
      default:
        throw new Error("Invalid color");
    }
  };

  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
        Click
      </button>
      <p>
        Last clicked:&nbsp;
        {!!lastClicked ? lastClicked.toString() : "Never"}
      </p>
    </div>
  );
};

export default App;
