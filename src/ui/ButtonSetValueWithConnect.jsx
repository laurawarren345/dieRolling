import React, { useState } from "react";
import { connect } from "react-redux";
import { setDieToValue } from "../redux/actions";

function ButtonSetValueWithConnect(props) {
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
          props.onSubmit(newDieValue);
        }}
      >
        Set die to this value
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (userInputValue) => dispatch(setDieToValue(userInputValue)),
  };
}

// The first argument of connect is the mapStateToProps function.
// We don't need it in this component so an empty function is supplied
export default connect(
  () => ({}),
  mapDispatchToProps
)(ButtonSetValueWithConnect);
