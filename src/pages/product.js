import React from "react";

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

const Product = () => {

  return (
    // Container
    <>
      {/* Header section, */}

      <section class="sectionapi" align="center">
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"


                  transition="custom"
                >
                  <Text textWeight="700" textColor={`#0de4e4`} textSize="title">Investment products</Text>
                  <br></br>
                  <Text tag="h2" textSize="display2">
                    <FadeInSection>



                      <div >
                        Invest as low as $1.
                      </div></FadeInSection>

                  </Text>
                  <br></br>
                  <Text textSize={`30px`}>
                    <FadeInSection>
                      We provide a wide range of investment products to expand your investment portfolio.
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
                      Get started
                    </Button>
                  </Div>


                </Div>
              </Div>
            </Col>
            <Col>
              <Div className="animated" p="1rem">
                <Image w="18.7rem" bg={`#252859;`} src="images/bar.png" />


              </Div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Header section,end */}

      {/* Investment products section, */}
      <section class="sectionapis">
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
            <FadeInSection> Where do you want to invest ?<br></br>
              <p class="paragh">We are the world's leading investment partner. </p>

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

                  Venture capital
                  <p class="pah"> Invest  by buying equity in early stage companies.</p>

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

                  Real Assets

                  <p class="pah"> This includes Infrastructure, Real Estate, and Commodities.</p>

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
                  Stocks
                  <p class="pah">We provide access to  both
                    local and international stock markets.
                  </p>

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
                  Bonds
                  <p class="pah">Tap into government bond and securities.</p>

                </Text>


              </Div>
            </Col>
          </Row></Container>
        <br></br>
      </section>
      {/* Investment section end, */}
      <section class="sectionapi3" align="center">
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"
                  align="center"

                  transition="custom"
                > <Text textWeight="700" textColor={`#0de4e4`} textSize="title">Desinged for developers</Text>
                  <Text tag="h1" textSize="display1">
                    <FadeInSection>
                      <div >
                        We partner with Companies  to bring investing closer to your customers.

                      </div></FadeInSection>

                  </Text>
                  <br></br>
                  <Text textSize={`25px`}>
                    <FadeInSection>
                      Checkout’s intuitive APIs and documentation make
                      it easy to get started, and easy to iterate.
                    </FadeInSection>
                  </Text>
                  <Text textSize={`25px`}>
                    <FadeInSection>
                      Our API comes in two simplified forms.
                      <ul><li> Cyanase Checkout</li><p>Requires no developer
                        skills, all you need is to
                        customize it using the your dashboard.</p>
                        <li>Cyanase Standard</li><p>Requires you to have knowledge in back end languages.
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
                Professional investing  support features added for <a>you.</a>
              </Text>
              <br></br><br></br>
              <Row>
                <br></br>
                <Col>
                  <Icon name="User" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Investment account
                  </Text>
                  <p>Create your personal investment account in seconds.</p>
                </Col>
                <Col>
                  <Icon name="History" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Investment clubs
                  </Text>
                  <p> Meet your friends and create an investment club.</p>
                </Col>
                <Col>
                  <Icon name="Store" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Spaces
                  </Text>
                  <p>Meet up with different people you share similar investment goals.</p>
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
                  <p>Makes it possible for people to invest for their specific goals.</p>
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


            Join over 10,000 investing with Cyanase.

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

export default Product;