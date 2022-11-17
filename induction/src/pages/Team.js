import '../scss/team.scss';
import OSA from '../data/OSA';
import OC from '../data/OC';
import Mentors from '../data/Mentors';
import Slideshow from '../components/Slideshow';
import raman from '../assets/team/ramanjeet-singh.jpg';
import aditya from '../assets/team/aditya-girdhar.jpg';

const Team = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="team">
        <h1>Meet the Team</h1>
        <p>Here’s the team that worked day & night to bring the vision of having the greatest Induction ever to reality. It’s the infectious enthusiam of juniors (or ‘facchas’ as we like calling them here) and the humbling experience of seniors that can breathe life to anything IIIT Delhi decides to do.</p>
        <p>Needless to say, you, my friend, are the most important person in this Induction Program. We hope to have impacted your journey in a positive way, and kick-started this engineering adventure, hoping that you give back to this Insitute, and to humankind, as best you can.</p>
        <h2 className="line-break">Faculty and Office of Student Affairs</h2>
        <Slideshow slideTime={1500} items={OSA} prefix="team/" name={true}/>
        <h2 className="line-break">Induction Organising Committee</h2>
        <Slideshow slideTime={1500} items={OC} prefix="team/oc/" name={true}/>
        <h2 className="line-break">Volunteers</h2>
        <Slideshow slideTime={1500} items={Mentors} prefix="team/volunteers/" name={true}/>
        <div className="website-creators">
          <h2 className="line-break">Website Designer & Developer</h2>
          <div className="creator-cards">
            <div>
              <img src={raman} alt="creator photo"/>
              <p>Ramanjeet Singh</p>
              <span>Developer</span>
            </div>
            <div>
              <img src={aditya} alt="creator photo"/>
              <p>Aditya Girdhar</p>
              <span>Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
