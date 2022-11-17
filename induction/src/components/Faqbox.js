import expand from '../assets/faq-arrow-down.svg';
import collapse from '../assets/faq-arrow-up.svg';
import {useState} from 'react';
import './scss/faqbox.scss';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Faqbox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-box">
      <div className="header">
        <h2>{props.info.heading}</h2>
        <img src={isOpen ? collapse : expand} alt="expand/collapse" onClick={() => setIsOpen(isOpen => !isOpen)}/>
      </div>
      {isOpen ?
        <ul>
          {props.info.content.map(item => (
            <li><KeyboardDoubleArrowRightIcon /> {item}</li>
          ))
          }
        </ul>
      : null}
    </div>
  )
}

export default Faqbox;
