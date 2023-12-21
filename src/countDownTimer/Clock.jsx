import { useState, useEffect } from "react";

const Clock = ({ deadLine }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const getTimeUntil = (deadLine) => {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadLine), 1000);

    return () => getTimeUntil(deadLine);
  }, [deadLine]);

  return (
    <>
      <div className="">
        <div className="">
          <h3 className="md:text-xl my-2">Dec 22, 2023 (Friday)</h3>
          <h3 className="md:text-xl">Match Start 7:30 am</h3>
          <h3 className="md:text-xl mt-2">Venue: Technical Cricket Ground</h3>
        </div>
        <div className="">{leadingZero(days)} Days</div>
        <div className="">{leadingZero(hours)} Hours</div>
        <div className="">{leadingZero(minutes)} Minutes</div>
        <div className="">{leadingZero(seconds)} Seconds</div>
      </div>
    </>
  );
};

export default Clock;
