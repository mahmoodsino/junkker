import React, { useState } from "react";

function getCurrentTime(duration: any) {
  let seconds: any = Math.floor((duration / 1000) % 60);
  let minutes: any = Math.floor((duration / (1000 * 60)) % 60);
  let hours: any = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let days: any = Math.floor(duration / (1000 * 60 * 60 * 24));

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  days = days.toString().padStart(2, "0");

  return {
    hours,
    minutes,
    seconds,
    days,
  };
}

interface Props {
  endDate: any;
}

export default function Timer({ endDate }: Props) {
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  setTimeout(() => {
    const date = new Date();
    const diff = getCurrentTime(new Date(endDate).getTime() - date.getTime());
    setState({
      days: diff.days,
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: diff.seconds,
    });
  }, 1000);

  return (
    <div className=" font-bold whitespace-nowrap  w-[100px]  ">
      {state.days > 0 && (
        <div>
          <div className="inline-block">
            <span>{state.days}</span>
          </div>
          :
          <div className="inline-block">
            <span>{state.hours}</span>
          </div>
          :
          <div className="inline-block">
            <span>{state.minutes}</span>
          </div>
          :
          <div className="inline-block">
            <span>{state.seconds}</span>
          </div>
        </div>
      )}
    </div>
  );
}
