import React from "react";
import "../../public/app.css";
import { Icon } from "atomize";
import '../../node_modules/rc-tabs/assets/index.css';
import { useState } from "react";
import { Row, Col, Image, Div, Text } from "atomize";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Faqs = props => {

  // on click drop down button to help user see the next question state

  // states for the arrows
  const [rotateChevron, setRotateChevron] = useState(false);

 

  ///states for questions and answers
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);

  // setting the onClick function
  const seeFaq = (event) => {
    setRotateChevron(!rotateChevron);
    toggleOpen(!isOpen);

  }
  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"
  return (
    <>


      {/* Tab  section, */}



      <div onClick={seeFaq}>
        <div className="faq-question">
          <span>
            <Text m={{ t: "1rem" }} textSize={`25px`}>
              {question} <span><ExpandMoreIcon className="myicon" style={{ transform: rotate, transition: "all 0.2s linear" }}  /></span></Text>
          </span>
        </div>
        <hr></hr>
        <div
          className="faq-answer"
          style={isOpen ? { display: "block" } : { display: "none" }}
        >

          <span>
            <Text m={{ t: "1rem" }} textSize={`18px`}>
              {answer} </Text>
          </span>
        </div>
      </div>
      {/* Tab  section, end */}
    </>
  );
};

export default Faqs;