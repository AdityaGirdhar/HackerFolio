import '../scss/schedule.scss';
import arrowl from '../assets/sched-left-arr.svg'
import arrowr from '../assets/sched-right-arr.svg'
import useGoogleSheets from 'use-google-sheets'
import {useState} from 'react'
import Fade from 'react-reveal/Fade'

const keys = ["02.11.2022(Wednesday)", "03.11.2022(Thursday)", "04.11.2022(Friday)", "05.11.2022(Saturday)"];

const dayInfo = [
  {
    h2: "2nd",
    p: "Wednesday"
  },
  {
    h2: "3rd",
    p: "Thursday"
  },
  {
    h2: "4th",
    p: "Friday"
  },
  {
    h2: "5th",
    p: "Saturday"
  },
];

const Data = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error!';
  }

  return data[0]["data"];
};

const sanitiseData = data => {
  if (!Array.isArray(data)) return data;
  const schedule = {};

  keys.forEach(key => {
    schedule[key] = [] 
  });

  for (const key of keys) {
    for (const row of data) {
      if (row[key]) schedule[key].push(row[key]);
    }
  }

  return schedule;
};

const Schedule = (props) => {

  const [curIndex, setCurIndex] = useState(0);
  let data = '';
  data = Data();
  console.log(data);
  let sched = sanitiseData(data);
  console.log(sched);
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="schedule">
        <h1>Schedule</h1>
        <div className="slider">
          <img src={arrowl} alt="left arrow" onClick={() => setCurIndex(curIndex => (curIndex === 0 ? 3 : curIndex - 1))} />
          <div>
            <h2>{dayInfo[curIndex].h2}</h2>
            <p>{dayInfo[curIndex].p}</p>
          </div>
          <img src={arrowr} alt="right arrow" onClick={() => setCurIndex(curIndex => (curIndex + 1) % 4)} />
        </div>
        <div className="event-list">
        {
          (typeof sched === 'object') ? 
            sched[keys[curIndex]].map(event => (
              <Fade right style={{width: '100%'}}>
                <div className="event">{event}</div>
              </Fade>
            ))
          :
            'Loading...'
        }
        </div>
      </div>
    </div>
  )
}

export default Schedule;
