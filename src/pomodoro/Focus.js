import React, { useState } from "react";
import { minutesToDuration } from "../utils/duration/index";

function FocusTimer({
  session,
  focusDuration,
  setFocusDuration,
  disableButton,
}) {
  function handleIncreaseClick() {
    setFocusDuration(Math.min((focusDuration + 5), 60));
  }
  function handleDecreaseClick() {
    setFocusDuration(Math.max((focusDuration - 5), 5));
  }

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleDecreaseClick}
          disabled={disableButton}
        >
          <span className="oi oi-minus" />
        </button>
        {/* implement increasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleIncreaseClick}
          disabled={disableButton}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default FocusTimer;
