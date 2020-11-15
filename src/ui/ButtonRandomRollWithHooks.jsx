import React from "react";
import { useDispatch } from "react-redux";
import { rollTheDie } from "../redux/actions";

export default function ButtonRandomRollWithHooks() {
  //This is a react-redux hook, used instead of mapDispatchToProps
  const dispatch = useDispatch();

  return (
    <button
      style={{
        width: "600px",
        height: "100px",
        border: "solid black",
        backgroundColor: "grey",
        fontSize: "40px",
        margin: "30px",
      }}
      onClick={() => {
        dispatch(rollTheDie());
        // ^^ using the react-redux 'useDispatch' hook set up on line 7
        // 'rollTheDie()' is the imported action creator
      }}
    >
      Random roll
    </button>
  );
}
