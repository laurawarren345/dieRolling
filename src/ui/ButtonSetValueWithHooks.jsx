import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDieToValue } from "../redux/actions";

export default function ButtonSetValueWithHooks() {
  //This is a react-redux hook, used instead of mapDispatchToProps
  const dispatch = useDispatch();

  //This is a react hook, use to manage some non-Redux-store state (within the scope of this component)
  const [newDieValue, setNewDieValue] = useState("");

  return (
    <div>
      <form>
        <input
          style={{ height: "50px", fontSize: "40px", textAlign: "center" }}
          type="text"
          value={newDieValue}
          onChange={(event) => {
            setNewDieValue(event.target.value);
            // ^^ using the react hook
          }}
        />
      </form>
      <button
        style={{
          width: "600px",
          height: "100px",
          border: "solid black",
          backgroundColor: "grey",
          fontSize: "40px",
        }}
        onClick={() => {
          dispatch(setDieToValue(newDieValue));
          // ^^ using the react-redux 'useDispatch' hook set up on line 7 to dispatch
          // and the react hook 'useState' set up on line 10 to provide the value.
          // 'setDieToValue()' is the imported action creator
        }}
      >
        Set die to this value
      </button>
    </div>
  );
}
