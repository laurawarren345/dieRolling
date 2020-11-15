import React from "react";
import { connect } from "react-redux";
import { rollTheDie } from "../redux/actions";

function ButtonRandomRollWithConnect(props) {
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
        props.randomRoll();
      }}
    >
      Random roll
    </button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    randomRoll: () => dispatch(rollTheDie()),
  };
}

// The first argument of connect is the mapStateToProps function.
// We don't need it in this component so an empty function is supplied
export default connect(() => {}, mapDispatchToProps)(
  ButtonRandomRollWithConnect
);
