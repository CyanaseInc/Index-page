import React from "react";
import { NavLink } from "react-router-dom";
import { Text, Div, Row, Col, Button, Icon, Tag, Container, Anchor, Image } from "atomize";
import "../../public/app.css";
import "../components/fade";
import FadeInSection from "../components/fade";
import Globe from "./Globe";


/*A component that enables  number increment in the phone image*/

const Home = () => {

  /* increments state for networth in the image*/
  let timer;
  let counter;
  const [counterState, setCounter] = React.useState(0);
  React.useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (counterState === 287) {
        clearInterval(timer)
        return
      }
      setCounter(prev => prev + 7)
      counter++

    }, 10)

    return () => clearInterval(timer)
  }, [counterState]);

  /* increments state for deposit in the image*/

  let timerz;

  const [counterStater, setCounterz] = React.useState(0)
  React.useEffect(() => {
    clearInterval(timerz)
    timerz = setInterval(() => {
      if (counterStater === 3800) {
        clearInterval(timerz)
        return
      }
      setCounterz(prev => prev + 100)
      counter++

    }, 10)

    return () => clearInterval(timerz)
  }, [counterStater]);


  /* A component that checks the phone type*/

  const menuList = (

    <Div>
      {["Andriod version", "IOS version"].map(
        (name, index) => (
          <ol>
            <Anchor d="block" p={{ y: "0.25rem" }}>
              <li>{name}</li>
            </Anchor>
          </ol>
        )
      )}
    </Div>
  );

  return (
    // Container
    <>

      <Container>

        {/* Header section, */}
        <section class="section" align="center">
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="center"
                  align="center"

                  transition="custom"
                >
                  <Text textColor={`#252859`} tag="h1" textSize={{ xs: "display2", md: "display3" }}>
                    <FadeInSection>
                      <div ClassName="display33">
                        Investment infrastructure for the internet

                      </div></FadeInSection>
                  </Text>
                  <Text textColor={`#505256;`} textSize={`20px`}>
              
                      <h1 >For students that care about their dreams, professional
                        investors that want to advance their portfolio and consumer-facing
                        fintechs that want to integrate investing features
                        into their products without the burden of facing in house regulation, our software and API
                        are the latest technologies made to meet your needs.
                      </h1>
                  </Text>

                  <br></br>
                  <Div d="flex" flexDir={{ xs: 'column', lg: 'row' }} align="center" justify={{ xs: "space-around", lg: "center" }}>
                    <a href="https://cyanase.com/savers/registration/signup.php/"><Button
                      suffix={<Icon
                        name="LongRight"
                        size="16px"
                        color="white"
                        m={{ l: "1rem" }} />}
                      shadow="3"
                      hoverShadow="4"

                    >
                      Create account
                    </Button></a>
                    <br></br>
                    <Anchor
                      href="./api"
                      target="_blank"

                    >


                      <Button className="mybtn"
                        prefix={<Icon
                          name="EyeSolid"
                          size="16px"
                          color="white"
                          m={{ r: "0.5rem" }} />}
                        bg="warning700"
                        hoverBg={`#252859;`}

                        shadow="3"
                        hoverShadow="4"

                      >
                        Partner with us
                      </Button>

                    </Anchor>
                  </Div>


                </Div>
              </Div>
            </Col>

            {/* Phone Image section */}

            <Col >
              <Div align="center">



                <div class="iphone-x">
                  <Row >
                    <Col><Text textColor={`#505256;`} m={{ t: "0.4rem", r: "1.4rem" }} textSize={`10px`}>
                      6:19 PM
                    </Text></Col>
                    <Col>
                      <Icon name="Stop" size="20px" color={`#505256;`} m={{ l: "3.0rem" }} />
                    </Col>

                  </Row>
                  <br></br>
                  <Row>
                    <Col><Text textColor={`#505256;`} m={{ l: "1.6rem", t: "0.4rem" }} textSize={`13px`}>
                      X
                    </Text></Col>
                    <Col>
                      <Icon name="Settings" size="13px" color={`#505256;`} m={{ l: "3.0rem" }} />

                    </Col>

                    <Col>

                      <Icon name="Notification" size="13px" color={`#505256;`} />
                    </Col>
                  </Row>
                  <Div bg={`#cbdaff;`} className="upperphone">
                    <Row>
                      <Col><h1> <Icon name="Heart" size="13px" color={`#505256;`} /> Goal</h1>  <p class="small">Trip to paris</p></Col>
                      <Col><h1>Deposit</h1> <p class="small">{counterStater} USD</p></Col>
                    </Row>

                    <Div bg={`#fff;`} className="pie">
                      <br></br>
                      networth
                      <h1 ><a class="net">${counterState}</a>,690</h1>

                    </Div>

                  </Div>
                  <Div m={{ l: "10rem" }} ClassName="fab">
                    <Button
                      h="2.5rem"
                      w="2.5rem"
                      bg={`#252859;`}
                      rounded="circle"

                      shadow="2"
                      hoverShadow="4"
                    >
                      <Icon name="TimestampSolid" size="20px" color="white" />
                    </Button></Div>

                  <p class="small">Real estate investment 70%  <Icon name="Options" size="15px" color="danger300" /></p>
                  <Div bg="gray400" className="downer">

                    <h1>My goal</h1> <p class="small">Build a home in 5 years</p>


                  </Div>
                  <br></br>
                  <Div className="mene" bg={`#252859;`} d="flex">

                    <Button
                      h="1.5rem"
                      w="1.5rem"
                      bg={`#252859;`}
                      rounded="circle"
                      m={{ l: "1.5rem" }}
                    >

                      <Icon name="HomeSolid2" size="15px" color="white" />
                    </Button>

                    <Button
                      h="1.5rem"
                      w="1.5rem"
                      rounded="circle"
                      m={{ l: "1rem" }}
                      bg={`#252859;`}

                    >
                      <Icon name="Notification" size="15px" color="white" />
                    </Button>

                    <Button
                      h="1.5rem"
                      w="1.5rem"

                      bg={`#252859;`}
                      rounded="circle"
                      m={{ l: "1rem" }}


                    >
                      <Icon name="Bulk" size="15px" color="white" />
                    </Button>


                  </Div>


                </div><div class="slider-thumb"></div>

              </Div>
            </Col>
          </Row>

        </section>
        {/* End Header section, */}
      </Container>
      {/* Key features section */}
      <section class="section2">
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
            <FadeInSection> Why choose Cyanase Investors?<br></br>
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

                  Investment products
                  <p class="pah">Our investment products fit everyone's financial
                    status and portfolio.</p>
                  <NavLink to="/product" ><p><a href="#">Learn more</a></p></NavLink>
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

                  Students

                  <p class="pah">Our platform  helps students
                    invest such that they have a start point after school. </p>
                  <NavLink to="/students" ><p><a href="#">Learn more</a></p></NavLink>
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

                  Social loans
                  <p class="pah">Don't just with your money, lend it out to
                    the public and earn an interest.</p>
                  <p>	<NavLink to="/loan" ><p><a href="#">Learn more</a></p></NavLink></p>
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

                  Group pages
                  <p class="pah">Create  investment and sacco groups with your friends and families.
                  </p>
                  <p>	<NavLink to="/group" ><p><a href="#">Learn more</a></p></NavLink></p>
                </Text>


              </Div>
            </Col>
          </Row></Container>
        <br></br>
      </section>
      {/* End  Key features section */}

      {/* API key section*/}
      <section class="section3">
        <br></br><br></br>
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col >
              <Div p="1rem">
                <Tag
                  bg={`#cbdaff;`}
                  textColor="black"
                  p={{ x: "0.75rem", y: "0.25rem" }}
                  m={{ r: "0.5rem", b: "0.5rem" }}
                  textSize="body"
                >
                  Get started
                </Tag>
                <Text className="paragh" textSize="heading">
                  <h1 class="header">Integrate investing into your systems</h1>
                  <br></br><FadeInSection>
                    <p class="paragh">Cyanase enables consumer-facing fintechs to
                      integrate wealth management and trading
                      into their products in a frictionless way.
                      Companies powered by the cyanase API can offer
                      their customers cutting-edge investing capabilities.
                    </p>
                    <ul class="mylists">
                      <li>We carry the burden of developing in-house regulatory, operational,
                        and compliance expertise.</li>
                      <li>offer your customers cutting-edge investing capabilities such
                        as ethical investing, direct indexing, and tax-loss harvesting.
                      </li>
                      <li>We  offer technical assistance during integration.</li>
                    </ul>

                    <Anchor
                      href="../api/documentation/doc"
                      target="_blank"

                    >
                      <Button
                        bg={`#cbdaff;`} rounded="circle" textColor="black"
                        suffix={
                          <Icon
                            name="LongRight"
                            size="16px"
                            color="black"
                            m={{ l: "1rem" }}
                          />
                        }
                        shadow="3"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                      >
                        Explore the docs
                      </Button></Anchor>
                  </FadeInSection>

                </Text>
              </Div>
            </Col>
            <Col>
            <Div justify="center" align="center" className="glober"> <Globe/></Div>
            
            </Col>
          </Row></Container>
      </section>
      {/* End API key section */}

      {/* Key features  summary section */}
      <section class="section4">
        <br></br>
        <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col>

              <Image src="images/logo.jpg" />
            </Col>
            <Col>
              <Text textColor={`#252859`} tag="h1" textSize="display2">
                Beautiful & easy to use features added for <a>you.</a>
              </Text>
              <br></br><br></br>
              <Row>
                <br></br>
                <Col>
                  <Icon name="User" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Account
                  </Text>
                  <p>Create an investment account on one tap.</p>
                </Col>
                <Col>
                  <Icon name="History" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Groups
                  </Text>
                  <p>Achieve your dreams by saving with your friends.</p>
                </Col>
                <Col>
                  <Icon name="Store" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Loans
                  </Text>
                  <p>Lend out your money and earn an interest on it.</p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <br></br>
                <Col>
                  <Icon name="TimestampSolid" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Spaces
                  </Text>
                  <p>Organize financial meetings with your club mates using our space.</p>
                </Col>
                <Col>
                  <Icon name="UserSolid" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    Social
                  </Text>
                  <p>Meet people you share common financial goals. </p>
                </Col>
                <Col>
                  <Icon name="Settings" size="25px" color={`#252859`} />
                  <Text textColor={`#252859`} tag="p" textSize="title">
                    API
                  </Text>
                  <p>Integrate  investing features into your systems.</p>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </section>
      {/* End Key features section */}
      {/* footer section */}
      <section class="section5">
        <br></br><br></br>
        <Div textAlign="center" align="center" justify={{ xs: "space-around", lg: "center" }} className="lastdiv">
          <br></br><br></br><br></br>
          <Text textColor={`#252859`} tag="h3" textSize="title">


            Join over 10,000 people using  Cyanase

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
      {/*End footer features section */}
    </>
  );

};

export default Home;