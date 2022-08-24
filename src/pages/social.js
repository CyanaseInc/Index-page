import React from "react";
// Creating a h1
import { Text, Div, Row, Col, ThemeProvider, Button, Icon, Tag, Anchor, Container, Image } from "atomize";
import "../../public/app.css";
import { NavLink } from "react-router-dom";

const Social = () => {

  return (
    <>
      <section class="section6">
        <br></br><br></br>
        <Container>
          <Div>
            <Row flexDir={{ xs: 'column', lg: 'row' }}>
              <Col><span href="/" className="brand-name">
                Cyanase<span>   Investors</span>
              </span>
                <p>© Cyanase, Inc. 2022. All rights reserved</p>
                <Anchor href="https://www.facebook.com/cyanasez256/" ><Icon name="Facebook" size="25px" color={`#252859`} /></Anchor>
                <Anchor href="https://twitter.com/CyanaseInc"><Icon name="Twitter" size="25px" color={`#252859`} /></Anchor></Col>
              <Col><Text textColor={`#252859`} tag="h3" textSize="title">
                Learn More
              </Text>
                <p><a> 	<NavLink to="/group" ><p><a href="#">Group Investment</a></p></NavLink></a></p>
                <p><a> 	<NavLink to="/product" ><p><a href="#">Investment products</a></p></NavLink></a></p>
                <p><a> 	<NavLink to="/loan" ><p><a href="#">Social loans</a></p></NavLink></a></p>
                <p onClick={() => {
                  setActiveTab("group");
                }}><a> 	<NavLink to="/students" ><p><a href="#">Cyanase for students</a></p></NavLink></a></p>
                <p>	<NavLink to="/faqs" ><a>Frequently asked questions</a></NavLink></p>
                <p><a>API documentation</a></p>
              </Col>
              <Col><Text textColor={`#252859`} tag="h3" textSize="title">
                Company
              </Text>
                <a>Privacy policy</a>
                <p><a>Terms and Conditions</a></p></Col>
              <Col><Text textColor={`#252859`} tag="h3" textSize="title">
                Location
              </Text>
                <a>Makerere university</a>
                <p><a>CIT building level 5</a></p></Col>
              <Col><Text textColor={`#252859`} tag="h3" textSize="title">
                Contact us
              </Text>
                <a>+256705640852</a>
                <p><a>support@cyanase.com</a></p></Col>

            </Row>

          </Div>
        </Container>
      </section>

    </>
  );
};

export default Social;