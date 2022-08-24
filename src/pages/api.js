import React from "react";
// Creating a h1
import { Text, Div, Row, Col, ThemeProvider, Button, Icon, Tag, Container, Image } from "atomize";
import "../../public/app.css";
import { useState, useRef, useEffect } from 'react';
import "../components/fade";
import ReactDOM from 'react-dom';
import Tabs from "../components/Codetabs/tab";

/* fade in and out state*/
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);


  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

const Api = () => {


  return (
    // Container
    <>



      <section class="sectionapi" align="center">
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"


                  transition="custom"
                >
                  <Text textWeight="700" textColor={`#0de4e4`} textSize="title">Cyanase for developers</Text>
                  <br></br>
                  <Text tag="h2" textSize="display2">
                    <FadeInSection>



                      <div >
                        The fastest way to integrate investing in your systems

                      </div></FadeInSection>

                  </Text>
                  <br></br>
                  <Text textSize={`30px`}>
                    <FadeInSection>
                      Cyanase Checkout is a prebuilt, hosted investment page.
                      Whether you offer P2P, Edutech or social platform, use Checkout
                      to easily and integrate investing into your systems
                    </FadeInSection>
                  </Text>

                  <br></br>
                  <Div d="flex" flexDir={{ xs: 'column', lg: 'row' }} align="center" justify={{ xs: "space-around", lg: "center" }}>

                    <Button
                      prefix={<Icon
                        name="EyeSolid"
                        size="16px"
                        color="white"
                        m={{ r: "0.5rem" }} />}
                      bg={`#252859;`}
                      rounded="circle"
                      hoverBg={`#15416e;`}

                      shadow="3"
                      hoverShadow="4"
                    >
                      Explore public
                    </Button>
                  </Div>


                </Div>
              </Div>
            </Col>
            <Col>
              <Div className="robot">

                <div class="head">
                  <div class="face">
                    <div class="left-eye">

                    </div>
                    <div class="right-eye">

                    </div>
                  </div>
                </div>
                <div class="left-arm">

                </div>
                <div class="right-arm">

                </div>
                <div class="body">

                </div>




              </Div>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="sectionapi2">
        <Container>
          <br></br>
          <Tag
            bg="black"
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
          >
            Key features
          </Tag>
          <Text className="paragh" textSize="heading">
            <FadeInSection> Why Choose our Checkout<br></br>
              <p class="paragh">Cyanase is  not only disrupting markets but also
                making investing simpler and cheaper. </p>

            </FadeInSection>

          </Text>
          <br></br>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col m={{ t: "2rem" }} >
              <Div
                bg="gray200"
                shadow="2" m={{ t: "2rem" }}
              >
                <Image m={{ l: "2rem", t: "2rem" }} w="1.7rem" bg={`#252859;`} src="images/download.svg" />

                <Text m={{ l: "2rem" }} textSize="title">

                  Your brand, your Checkout
                  <p class="pah">Customize Checkout’s colors, fonts, shapes, and brand settings to match the look and feel of your site. You can even use your own
                    domain to make the transition to Checkout seamless. </p>
                  <p><a href="#">Learn more</a></p>
                </Text>


              </Div>
            </Col>
            <Col m={{ t: "2rem" }} >
              <Div
                bg="gray200"
                shadow="2" m={{ t: "2rem" }}
              >
                <Image m={{ l: "2rem", t: "2rem" }} w="1.7rem" bg={`#252859;`} src="images/download1.svg" />

                <Text m={{ l: "2rem" }} textSize="title">

                  Optimized for any device

                  <p class="pah">Provide an optimal experience across mobile,
                    tablet, and desktop with a responsive checkout
                    , with inbuilt flexible payment systems including but not limited to mobile money and credit card processing </p>
                  <p><a href="#">Learn more</a></p>
                </Text>


              </Div>
            </Col>
            <Col>
              <Div
                bg="gray200"
                shadow="2" m={{ t: "2rem" }}
              >
                <Image m={{ l: "2rem", t: "2rem" }} w="1.7rem" bg={`#252859;`} src="images/download2.svg" />

                <Text m={{ l: "2rem" }} textSize="title">

                  Built for global customers
                  <p class="pah">Checkout supports 30+ languages, 135+ currencies, and dynamically shows
                    the investment products most likely to improve conversion</p>
                  <p><a href="#">Learn more</a></p>
                </Text>


              </Div>
            </Col>
            <Col >
              <Div
                bg="gray200" m={{ t: "2rem" }}
                shadow="2"
              >
                <Image m={{ l: "2rem", t: "2rem" }} w="1.7rem" bg={`#252859;`} src="images/download3.svg" />

                <Text m={{ l: "2rem" }} textSize="title">

                  Designed to reduce friction
                  <p class="pah">Let your customers breeze through the checkout by making it easy for them to choose from a wide
                    range of investment products in real time</p>
                  <p><a href="#">Learn more</a></p>
                </Text>


              </Div>
            </Col>
          </Row></Container>
        <br></br>
      </section>
      <section class="sectionapi3" align="center">
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"
                  align="center"

                  transition="custom"
                >
                  <Text tag="h1" textSize="display1">
                    <FadeInSection>
                      <div >
                        We built an API so you don't have to

                      </div></FadeInSection>

                  </Text>
                  <br></br>
                  <Text textSize={`25px`}>
                    <FadeInSection>
                      Checkout’s intuitive APIs and documentation make
                      it easy to get started, and easy to iterate
                    </FadeInSection>
                  </Text>
                  <Text textSize={`25px`}>
                    <FadeInSection>
                      Our API comes in two simplified forms
                      <ul><li>Checkout</li><p>Requires no developer
                        skills, all you need is to
                        customize it using the your dashboard</p><li>Developer</li><p>Requires you to have knowledge in back end languages
                        </p></ul>
                    </FadeInSection>
                  </Text>
                  <br></br>
                  <Div d="flex" flexDir={{ xs: 'column', lg: 'row' }} align="center" justify={{ xs: "space-around", lg: "center" }}>

                    <Button
                      prefix={<Icon
                        name="EyeSolid"
                        size="16px"
                        color="white"
                        m={{ r: "0.5rem" }} />}
                      bg={`#252859;`}
                      rounded="circle"
                      hoverBg={`#15416e;`}

                      shadow="3"
                      hoverShadow="4"
                    >
                      Explore public
                    </Button>
                  </Div>


                </Div>
              </Div>
            </Col>
            <Col size="5">
              <Div className="tabo" p="1rem">




                <Tabs />


              </Div>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="section4">
        <br></br>
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col>

              <Image src="images/logo.jpg" />
            </Col>
            <Col>
              <Text textColor={`#252859`} tag="h1" textSize="display2">
                Beautiful & easy to use API features added for <a>you</a>
              </Text>
              <br></br><br></br>
              <Row>
                <br></br>
                <Col>
                  <Icon name="User" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Account
                  </Text>
                  <p>Enable your customers to create an investment account on one tap</p>
                </Col>
                <Col>
                  <Icon name="History" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Compliance and regulation
                  </Text>
                  <p>We do the heavy lifting for you.</p>
                </Col>
                <Col>
                  <Icon name="Store" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Investments
                  </Text>
                  <p>Allows users to choose from a wide range of investment products</p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <br></br>
                <Col>
                  <Icon name="TimestampSolid" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Goal-based investing
                  </Text>
                  <p>Makes it possible for people to invest for their specific goals</p>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </section>
      <section class="section5">
        <br></br><br></br>
        <Div textAlign="center" align="center" justify={{ xs: "space-around", lg: "center" }} className="lastdiv">
          <br></br><br></br><br></br>
          <Text textColor={`#252859`} tag="h3" textSize="title">


            Join over 10,000 people doing business using  Cyanase

          </Text>
          <br></br>
          <Div className="button" align="center">
            <Button
              suffix={<Icon
                name="LongRight"
                size="16px"
                color="white"
              ></Icon>}

              shadow="3"
              hoverShadow="4"
              bg={`#252859`}

            >
              Join Now
            </Button>
            <br></br><br></br><br></br>
          </Div>

        </Div>



      </section>
    </>
  );

};

export default Api;