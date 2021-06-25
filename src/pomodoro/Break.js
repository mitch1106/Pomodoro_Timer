import React, { useState } from "react";
import { minutesToDuration } from "../utils/duration/index";

function BreakTimer({ breakDuration, setBreakDuration, disableButton }) {
  //const [ updateBreak, setUpdateBreak ] = useState(5)

  function handleIncrease() {
    setBreakDuration(Math.min(breakDuration + 1, 15));
  }

  function handleDecrease() {
    setBreakDuration(Math.max(breakDuration - 1, 1));
  }
  return (
    <div className="float-right">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-break">
          {/* TODO: Update this text to display the current break session duration */}
          Break Duration: {minutesToDuration(breakDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-break"
            onClick={handleDecrease}
            disabled={disableButton}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-break"
            onClick={handleIncrease}
            disabled={disableButton}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BreakTimer;
