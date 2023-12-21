import React from 'react'
import Count from './Count';

const CountDownTimer = () => {
  return (
    <>
      <div className="bg-slate-700 p-5 md:w-96 md:h-42 rounded-xl text-center mt-40">
        <h3 className="md:text-2xl text-xl text-rose-500 uppercase">
          Upcoming Match
        </h3>
        <Count />
      </div>
    </>
  );
}

export default CountDownTimer
