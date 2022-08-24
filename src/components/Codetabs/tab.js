import React from "react";
import  { useState } from "react";
import { Text,Div,Row, Col,ThemeProvider, Button, Icon, Tag,Container,Image } from "atomize";

import PHP from "./php";
import Python from "./python";
import Java from "./java";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
    
  };
 const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
      <Row>   
      <Col>
      <li  className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}>PHP</li>
      </Col> 
      <Col>
       <li    className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}>Python</li>
       </Col>
       <Col>
       <li    className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}>Java</li>
       </Col>
       </Row>
    
      </ul>
          <div className="outlet">
        {(()=>{if(activeTab === "tab1"){return( <PHP/> )
        
        }else if(activeTab==="tab2"){return(<Python/>)
        
        }else {return(<Java/>)}
        
        })()
        
        }
      </div>
    </div>
  );
};
export default Tabs;