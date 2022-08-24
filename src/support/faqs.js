import React from "react";
import "../docs/app.css";
import FadeInSection from "../components/fade";
import { Text, Dropdown, Anchor,Div,Row, Col,Button, Icon, Tag,Container,Image } from "atomize";
import Tabs from "../components/productTabs/tab";

const menuList = (
 
  <Div>
    {["What services does Cyanase offer?", "How does Cyanase work?", "How does Cyanase work?"].map(
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

const Faqs = () => {
  return (
    <><section class="sectionapi" align="center">
         <Container>
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 'auto', lg: '7' }}>
              <Div p="1rem">
                <Div

                  textAlign="left"
                

          transition="custom"
                >
                 <Text textWeight="700"  textColor={`#0de4e4`} textSize="title">Frequently asked questions</Text>
                <br></br>
                  <Text  tag="h2" textSize="display2">
                  <FadeInSection>
         
          
          
                    <div >
What do you want to know about us?
                  
                    </div></FadeInSection>
                  
                  </Text>
                  <br></br>
                  <Text   textSize={`30px`}>
                  <FadeInSection>
                  Here, we give details and answer a couple of questions our customers always ask.
                  if none of these answer you, kindly send your queries to <a>support@cyanse.com</a>

                  </FadeInSection>
                  </Text>

                  <br></br>
                  <Div d="flex" flexDir={{ xs: 'column', lg: 'row' }} align="center" justify={{ xs: "space-around", lg: "center" }}>

                  </Div>


                </Div>
              </Div>
            </Col>
            <Col>
              <Div p="1rem">

      <div class="help is-highlighted">?</div>
              </Div>
            </Col>
          </Row>
 </Container>
        </section>
  <section class="section2">
       <Container>
       <br></br>
          <Tag
            bg= "black"
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="body"
          >
          Key Questions
          </Tag>
          <p>Click on the question to check its answer</p>
  
<Tabs></Tabs>
</Container>

      </section>

      </>
  );
};
  
export default Faqs;