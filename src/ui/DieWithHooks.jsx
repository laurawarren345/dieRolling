import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export default function DieWithConnect() {
  //This is a react-redux hook, used instead of mapStateToProps
  const valueToDisplay = useSelector(
    createSelector([(state) => state.dieValue], (dieValue) => {
      return dieValue;
    })
  );
  // Often, the selector functions are much more complicated, written in
  // different files and imported in.

  return (
    <div
      style={{
        margin: "auto",
        marginTop: "30px",
        width: "80px",
        height: "80px",
        border: "solid black",
        backgroundColor: "green",
        fontSize: "40px",
      }}
    >
      {valueToDisplay}
    </div>
    // ^^ using the react-redux 'useSelector' hook set up on line 7
  );
}
