import { useState } from "react";
import TimeBox from "./components/TimeBox.js";

function App() {
  const timeTracking = [
    {
      title: 'Work',
      img: 'images/icon-work.svg',
      daily: {
        now: '5hrs',
        previous: '7hrs'
      },
      weekly: {
        now: '32hrs',
        previous: '36hrs',
      },
      monthly: {
        now: '103hrs',
        previous: '128hrs'
      }
    },
    {
      title: 'Play',
      img: 'images/icon-play.svg',
      daily: {
        now: '1hr',
        previous: '2hrs'
      },

      weekly:
      {
        now: '10hrs',
        previous: '8hrs'
      },
      monthly: {
        now: '23hrs',
        previous: '29hrs'
      },
    },

    {
      title: 'Study',
      img: 'images/icon-study.svg',
      daily: { now: '0hrs', previous: '1hr' },
      weekly: { now: '4hrs', previous: '7hrs' },
      monthly: { now: '13hrs', previous: '19hrs' }

    },

    {
      title: 'Exercise',
      img: 'images/icon-exercise.svg',
      daily: { now: '1hr', previous: '1hr' },
      weekly: { now: '4hrs', previous: '5hrs' },
      monthly: { now: '11hrs', previous: '18hrs' }

    },
    {
      title: 'Social',
      img: 'images/icon-social.svg',
      daily: { now: '1hr', previous: '3hrs' },
      weekly: { now: '5hrs', previous: '10hrs' },
      monthly: { now: '21hrs', previous: '23hrs' }

    },

    {
      title: 'Self-Care',
      img: 'images/icon-self-care.svg',

      daily: { now: '0hrs', previous: '1hr' },
      weekly: { now: '2hrs', previous: '2hrs' },
      monthly: { now: '7hrs', previous: '11hrs' }

    }
  ]
  const [time, setTime] = useState('monthly');

  return (
    <>
      <div className="grid">
        <div className="perfil">
          <div className="photo-perfil">
            <img src="images/image-jeremy.png" alt="img-id" />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
          </div>
          <div className="choose-time">
            <ul>
              <li onClick={() => setTime('daily')}>Daily</li>
              <li onClick={() => setTime('weekly')}>Weekly</li>
              <li onClick={() => setTime('monthly')}>Monthly</li>
            </ul>
          </div>
        </div>
        <div className="dashboard">
          {timeTracking.map((t) =>
            <TimeBox time={time}>
              {t}
            </TimeBox>)}
        </div>
      </div>
    </>
  );
}

export default App;
