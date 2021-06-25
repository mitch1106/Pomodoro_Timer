import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration/index";

function ActiveSession({ session, focusDuration, breakDuration }) {
  if (session === null) {
    return null;
  }

  const currentTimer =
    session.label === "Focusing" ? focusDuration : breakDuration;
  const percent =
    ((currentTimer * 60 - session?.timeRemaining) / (currentTimer * 60)) * 100;

  function nullSession() {
    if (session?.label === "Focusing") {
      return `Focusing for ${minutesToDuration(focusDuration)} minutes`;
    } else {
      return `On Break for ${minutesToDuration(breakDuration)} minutes`;
    }
  }

  return (
    <div>
      {/*this area should only show when there is an active focus or break*/}
      <div className="row mb-2">
        <div className="col">
          {/*update message below to include current session, focus or on break, total duration */}
          <h2 data-testid="session-title">{nullSession()}</h2>
          {/*update message below correctly to format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percent} // Increase aria-valuenow as elapsed time increases
              style={{ width: `${percent}%` }} //Increase width % as elapsed time increases
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveSession
