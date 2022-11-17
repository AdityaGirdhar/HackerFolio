import '../scss/contact.scss';

const Contact = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="contact">
        <h1>Get in Touch</h1>
      </div>
      <div className="map-container">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7958920963133!2d77.27098751497907!3d28.545854082452166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1664899681458!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div>
            <div>
              <h4>Address</h4>
              <p>Indraprastha Institute of Information Technology Delhi Okhla Industrial Estate, Phase III (Near Govind Puri Metro Station) New Delhi, India - 110020</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>info@iiitd.ac.in</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91-11-26907400-7404 (5 lines)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imp-contacts">
        <h2>Important Contacts</h2>
        <ul>
          <li className="mg-l"><p className="right">General Information</p><p className="left">info@iiitd.ac.in</p></li>
          <li><p className="right">Academic</p><p className="left"><b>For UG:</b> admin-btech@iiitd.ac.in</p></li>
          <li><p className="right"></p><p className="left"><b>For PG:</b> admin-mtech@iiitd.ac.in</p></li>
          <li><p className="right"></p><p className="left"><b>For PhD:</b> admin-phd@iiitd.ac.in</p></li>
          <li className="mg-l"><p className="right">Placement</p><p className="left">admin-placement@iiitd.ac.in</p></li>
          <li className="mg-l"><p className="right">Website</p><p className="left">admin-web@iiitd.ac.in</p></li>
          <li><p className="right">Student Council</p><p className="left">studentcouncil@iiitd.ac.in</p></li>
          <li><p className="right"><p className="desc">Student Council is the main body representing students in all student related matters in the Institute.</p></p><p className="left">secy-sc@iiitd.ac.in</p></li>
          <li className="mg-l"><p className="right">Security</p><p className="left">+91 9868244868 || +91 11 26907592 or Extn. 592</p></li>
          <li className="mg-l"><p className="right">IT Dept.</p><p className="left">+91 11 26907576 or Extn. 576</p></li>
          <li className="mg-l"><p className="right">FMS</p><p className="left">+91 11 26907576 or Extn. 576</p></li>
        </ul>
      </div>
      <div className="directions">
        <h2>Directions to Campus</h2>
        <p>To reach the campus, coming from Nehru Place on Outer Ring Road, follow these directions:</p>
        <ul>
          <li>After about half KM, turn Right from under the first flyover (it is oneway).</li>
          <li>After about 300 m, turn Left from under the Govind Puri Metro Station (there is a IIITD sign at this turn).</li>
          <li>After about 300 m, there will be a 'Y' - take the left road of the 'Y'.</li>
          <li>Follow signs for IIIT-D - the main gate is after about 500 m.</li>
        </ul>
        <h3>From Airport</h3>
        <p>You can travel from New Delhi IGI Airport to any destination within the city via the following options. Delhi Airport has two main terminals, Terminal 3 is international and Terminal 1 is domestic.</p>
        <p>Pre-paid taxis: There are official “pre-paid taxi” counters inside the airport before you leave the Terminal building, where you can book and pre-pay for a taxi. The rates are fixed, so the taxi driver can neither refuse your ride, nor can overcharge you. You should book a “Meru cab” - an AC Taxi. Follow the signs to find the pick-up point.</p>
        <p>Uber/Ola: Uber works as expected in Delhi and Ola is another taxi aggregator service in India just like Uber. Both Uber and Ola offer airport transfers in a variety of sizes of cars. They can be booked the usual way, from your phone. If your phone is not connected to a data network, Uber/Ola can also be booked at counters inside both the Terminals and also near their pick up points in the parking lot. Follow signs carefully, Ola and Uber have specific designated pick up points.</p>
        <p>Airport transfer arranged by your hotel: Your hotel may arrange airport transfers for you. Check directly with your hotel.</p>
        <h3>From Railway Station</h3>
        <p>There are three long-distance train terminals where you can get down (if you are coming by train) to reach IIIT -Delhi. These are: New Delhi Railway Station, Old Delhi Railway Station and Nizamuddin Railway Station. The nearest railways station is Okhla Station, but not all the trains stop there. Even if you are coming by train you can always book Ola/Uber cabs to reach IIIT-Delhi from the respective terminal stations.</p>
      </div>
      <div className="virtual-tours">
        <h2>Virtual Tours</h2>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YY65qJCTfO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/A6RXBNfK78I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
