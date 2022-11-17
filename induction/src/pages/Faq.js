import '../scss/faq.scss';
import Faqbox from '../components/Faqbox';

const Faq = (props) => {
  const info = [
    {
      heading: "Sample laptop specifications",
      content: [
        "Ideapad S340 Core i5 10th Gen – (8GB/ 1TB HDD/256 GB SSD/ Windows 10 Home)",
        "Acer Aspire 7(A 715-41G) Ryzen 5 Quad Core 3550H",
        "ASUS VivoBook 15 (2020) Intel Core i5-1035G1 10th Gen, 15.6’’ (39.62cms) FHD T&L Laptop (8GB RAM/1TB)",
      ]
    },
    {
      heading: "Prof Jalote's Laptop scheme for financially weak students",
      content: [
        "The scheme was started during the academic year 2020-21 for first year UG students to support the requirement of a laptop by the founding Director of IIIT Delhi Dr. Pankaj Jalote. The main aim is to support the students from the financially weaker families. For more info visit the following link:",
        <a href="https://iiitd.ac.in/prof-jalote-laptop-scheme">https://iiitd.ac.in/prof-jalote-laptop-scheme</a>
      ]
    },
    {
      heading: "UG FAQs",
      content: [
        <a href="https://docs.google.com/spreadsheets/d/1w85BGovNseeoUiKojVfF8NYx4NBOw_5UfrIc6ALt4Yo">Link</a>
      ]
    },
    {
      heading: "Academic Calendar 22-23",
      content: [
        <a href="https://iiitd.ac.in/academics/ay22-23">Link</a>
      ]
    },
    {
      heading: "Official Schedule",
      content: [
        <a href="https://induction.iiitd.edu.in/#/schedule">Link</a>
      ]
    }
  ];

  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="faq">
        <h1>Important Info</h1>
        {info.map(item => (
          <Faqbox info={item}/>
        ))}
      </div>
    </div>
  )
}

export default Faq;
