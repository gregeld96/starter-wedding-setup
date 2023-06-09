import React from 'react';
import DateTimeDisplay from './Display';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice text-center">
      <span>It Show Time!!!</span>
      <p>Get yourself ready.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex justify-center">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
        <div>
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
        </div>
    );
  }
};

export default CountdownTimer;