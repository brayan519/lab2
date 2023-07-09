import { useState, useEffect } from 'react';
import './styles.css';

const Counter = (props) => {
  const { uri } = props;
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;
        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes = prevTime.minutes + 1;
        }
        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const incrementMinutes = () => {
    setTime((prevTime) => {
      return { minutes: prevTime.minutes + 1, seconds: prevTime.seconds };
    });
  };

  const decrementMinutes = () => {
    setTime((prevTime) => {
      if (prevTime.minutes > 0) {
        return { minutes: prevTime.minutes - 1, seconds: prevTime.seconds };
      }
      return prevTime;
    });
  };

  return (
    <div className='wrapper'>
      <h2>Contador de Minutos y Segundos</h2>
      <p className='count'>
        {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
        {time.seconds < 10 ? '0' + time.seconds : time.seconds}
      </p>
      <div className='buttons'>
        <button className='increment' onClick={incrementMinutes}>Incrementar Minutos</button>
        <button className='decrement' onClick={decrementMinutes}>Decrementar Minutos</button>
      </div>
    </div>
  );
};

export default Counter;

