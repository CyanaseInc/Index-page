import React from "react";
import { Row, Col, Image, Div } from "atomize";
import Faqs from "./Faqs";


// this data could come from anywhere
const faqsData = [
  {
    question: "What is Cyanase?",
    answer: <><p class="paraghi">Cyanase is a technology company that partners with licensed 
    financial firms including banks,investment companies and money lenders to offer investment 
    services, business loans and saving groups to world’s internet users.</p>
    <p class ="paraghi">The company was initially started to help students invest such 
    that they have a start point after school.</p></>
  },
  {
    question: "Is Cyanase regulated?",
    answer: <><p  class="paraghi">Cyanase provides an integrated investment platform to third party companies
    who seek to offer a digital investment advice product to their users.
     Cyanase is not registered with the Uganda or U.S. Securities and Exchange Commission (“SEC”) and
      therefore does not provide any investment advice. All investment advisory
       services are provided by an SEC-registered investment adviser. 
       The content on this website is provided for informational purposes only and is not a solicitation 
   of any investment strategy or a recommendation of to buy or sell any security.</p>
   </>
  },
  {

question:"Who qualifies to use Cyanase?",
answer: <><p  class="paraghi"><p  class="paraghi">Cyanase is an investment infrastructure built for the following;
<ul>
<li><b>Fintech companies:</b> That want to add a wide range of investing features for their customers</li>
<li><b>Edutech Platforms:</b>That want to introduce investing to students using such that they have a start point after school</li>
<li><b>Students: </b>That have dreams and resiliently want to achieve them</li>
<li><b>Professional investors:</b> That want create their own investment firms and want LPs to join them</li>
</ul> partners with fintech companies,
 Edutech platforms and all kinds of technologies that want
to integrate investing features for their customers. You can contact us at support@cyanase.com</p></p></>

  },
  {
question:"What investment products are offered?",
answer:<><p class="paraghi">Cyanase offer a wide range of investments. These include;
<ul>
  <li><b>Real assets</b> This includes but not limited to real estate, infrastructure and commodities.</li>
<li><b>Company stocks</b> From both local and international ( USA,Europe and Africa) stock markets </li>
<li><b> Credit</b> This is for people that want to lend out their money to the public</li>
<li><b> Mainstream assets classes.</b> This includes, fixed income and money markets. </li>
</ul></p>
<p class="paraghi">The company helps students invest such that they have a start point after school.</p>
</>

  },
  {
    question:"How do i get to work with Cyanase?",
    answer:<><p  class="paraghi"> Cyanase partners with fintech companies,
    Edutech platfoms and all kinds of technologies that want
   to integrate investing features for their customers</p></>
  }
];

const FaqsList = () => {
  return (
<>
    <section class="section2">
    <Row flexDir={{ xs: 'column', lg: 'row' }}>
    
        <Col justify="center">
          <Image m={{ l: "2rem", t: "2rem" }} w={{ xs: '18rem', md: '35rem' }} bg={`#252859;`} src="images/faqs.png" />
        </Col>

      <Col justify="center">
        <Div m={{ l: "2rem", t: "3rem" }}>
          
          {faqsData.map((faq, i) => (
            <Faqs key={"faq_" + i} question={faq.question} answer={faq.answer} />
          ))}
        </Div>
      </Col>
    </Row>
    </section>
    </>
  );
}; 

export default FaqsList;