import React from "react";
  
  import { Text,Div,Row, Col,ThemeProvider, Button, Icon, Tag,Container,Image } from "atomize";
import "../../public/app.css";
import  {useState, useRef, useEffect} from 'react';
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

const Group = () => {
 /* increament state for networth*/
let timer; 


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
                 <Text textWeight="700"  textColor={`#0de4e4`} textSize="title">Cyanase for investors</Text>
                <br></br>
                  <Text  tag="h2" textSize="display2">
                  <FadeInSection>
         
          
          
                    <div >
             Together we can. 
                  
                    </div></FadeInSection>
                  
                  </Text>
                  <br></br>
                  <Text   textSize={`30px`}>
                  <FadeInSection>
            We offer a platform that enables you to create investment clubs to invest with
             your friends and family. 
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
              <Col >
               <Div className="animated" p="1rem">
<Image   bg={`#252859;`} src="images/group.png"/>
        

              </Div>
            </Col>
          </Row>
 </Container>
        </section>

       <section class="sectionapis">
       <Container>
       <br></br>
          <Tag
            bg= "black"
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
          >
          Key features
          </Tag>
    <Text className="paragh"textSize="heading">
<FadeInSection> Why choose our investment clubs ?<br></br>
<p class="paragh">We provide a platform  to help you grow financially in groups.</p>

</FadeInSection>

</Text> 
<br></br>
 <Row flexDir={{ xs: 'column', lg: 'row' }}>
      <Col m={{  t:"2rem" }} >
<Div
  bg="gray200"
 shadow="2"m={{ t:"2rem" }}
>
<Image  m={{ l: "2rem",t:"2rem" }}  w="1.7rem"  bg={`#252859;`} src="images/download.svg"/>

<Text     m={{ l: "2rem" }}  textSize="title">

Pages
<p class="pah">Create an investment group and invite 
friends to join your investment club. </p>

</Text>


</Div>
</Col>
   <Col m={{t:"2rem" }} >
<Div
  bg="gray200"
 shadow="2"m={{ t:"2rem" }}
>
<Image  m={{ l: "2rem",t:"2rem" }}  w="1.7rem"  bg={`#252859;`} src="images/download1.svg"/>

<Text     m={{ l: "2rem" }}  textSize="title">

Space

<p class="pah">Schedule meetings with your group mates and 
discuss about your financial growth</p>

</Text>


</Div>
</Col>
   <Col>
<Div
  bg="gray200"
 shadow="2"m={{ t:"2rem" }}
>
<Image  m={{ l: "2rem",t:"2rem" }}  w="1.7rem"  bg={`#252859;`} src="images/download2.svg"/>

<Text     m={{ l: "2rem" }}  textSize="title">
Group text
<p class="pah">Our investment clubs were made social 
just for you to meet people, share ideas and win.
</p>

</Text>


</Div>
</Col>
   <Col >
<Div
  bg="gray200"m={{ t:"2rem" }} 
 shadow="2"
>
<Image  m={{ l: "2rem",t:"2rem" }}  w="1.7rem"  bg={`#252859;`} src="images/download3.svg"/>

<Text     m={{ l: "2rem" }}  textSize="title">

Investment products
<p class="pah">We provide plenty of investment 
products available just for you to win.</p>

</Text>


</Div>
</Col>
</Row></Container>
<br></br> 
      </section>

     <section class="section4">
      <br></br>
      <Container>
      <Row  flexDir={{ xs: 'column', lg: 'row' }}>
      <Col>
     
   <Image src="images/logo.jpg"/>
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
     <p>Meet up with different people you share similar investment goals. </p>
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
 
                   
                      Join over 10,000 people creating investment clubs on Cyanase.

                  </Text>
                  <br></br>
                   <Div className ="button" align="center">
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
  
export default Group;