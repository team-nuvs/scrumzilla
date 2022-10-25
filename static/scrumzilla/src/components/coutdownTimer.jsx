import React, { useDeferredValue, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import ProgressBar from "@atlaskit/progress-bar";
import VidPlayIcon from "@atlaskit/icon/glyph/vid-play";
import VidPauseIcon from "@atlaskit/icon/glyph/vid-pause";
import EditorLayoutSingleIcon from "@atlaskit/icon/glyph/editor/layout-single";
import Button from "@atlaskit/button";
import "./countdownTimer.css";
const MyTimer = (props) => {
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: props?.expiryTimestamp,
      onExpire: () => props?.expired(),
      autoStart: props?.autoStart,
    });
  const [showedWarning, setShowedWarning] = useState(false);

  const prependZero = (number) => {
    if (number <= 9) return "0" + number;
    else return number;
  };
  useEffect(() => {
    const remainingTime = hours * 60 * 60 + minutes * 60 + seconds;
    if (remainingTime < 60 && !showedWarning) {
      setShowedWarning(true);
      props.addFlag();
    }
  }, [hours, minutes, seconds]);
  useEffect(() => {
    restart(props?.expiryTimestamp);
    pause();
  }, [props?.totalTime]);
  const remainingTime = hours * 60 * 60 + minutes * 60 + seconds;
  const totalTime = props?.totalTime ?? 1 * 60;
  const percentRemain = 1 - remainingTime / totalTime;
  const primaryBlue = "#0052cc";
  const secondaryGrey = "#505f79";
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <div className={"timeProgress"}>
        <ProgressBar ariaLabel="timer" value={percentRemain} />
      </div>
      <div
        style={{ fontSize: "14px" }}
        className={"timer-controls d-flex align-items-end justify-content-end"}
      >
        <div
          style={{ fontSize: "18px", fontWeight: "bold", color: primaryBlue }}
        >{`${prependZero(minutes)}:${prependZero(seconds)}`}</div>
        <div style={{ color: secondaryGrey }}>{`/${prependZero(
          Math.floor(totalTime / 60)
        )}:${prependZero(totalTime%60)}`}</div>
        <div className="mx-2">
          <Button onClick={isRunning ? pause : resume}>
            {!isRunning ? (
              <div className="play">
                <VidPlayIcon />
              </div>
            ) : (
              <VidPauseIcon primaryColor="#505F79" />
            )}
          </Button>
        </div>
        <div>
          <Button onClick={pause}>
            <EditorLayoutSingleIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyTimer;
