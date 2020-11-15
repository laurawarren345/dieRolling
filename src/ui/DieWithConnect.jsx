import React from "react";
import { connect } from "react-redux";

function DieWithConnect(props) {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "30px",
        width: "80px",
        height: "80px",
        border: "solid black",
        backgroundColor: "red",
        fontSize: "40px",
      }}
    >
      {props.dieValue}
    </div>
  );
}

// MapDispatchToProps is not required in this component so no second argument is supplied
function mapStateToProps(state) {
  return {
    dieValue: state.dieValue,
  };
}

export default connect(mapStateToProps)(DieWithConnect);
