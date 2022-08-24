import React from 'react';
import { Text, Input, Div, Row, Col, Anchor, Icon, Container, Button } from "atomize";
import './styles.css';
import FadeInSection from "../components/fade";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

function Contact() {

  // set states for th required components
  const [inputs, setInputs] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();

  // on click submit state

  const myChange = <Icon color="white" name="Loading2" size="20px" />;
  const myOriginal = 'submit';
  const [buttonText, setButtonText] = useState(myOriginal);

  // hnadle on change in forms
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  // handle submit function
  const onSubmit = (datal) => {

    // change the status to laoding
    setButtonText(myChange);
    console.log(datal);

    // send data to the API

    const API_PATH = 'http://localhost:3000/handler.php';

    // MAKE AN AJAX REQUEST

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: datal
    })
      .then(resulta => {

        console.log(resulta.result);
      })
      .catch(error => alert(error));
  }

  return (


    <>
      <Row className="section2">

        <Col>
          <Container>
            <Div align="left" m={{ t: "2rem" }}>

              <Text textColor={`#252859`} tag="h1" textSize={{ xs: "heading", md: "display2" }}>
                <FadeInSection>

                  Contact Cyanase

                </FadeInSection>
              </Text>




            </Div>

            <FadeInSection>
              <Text textColor={`#252859`} tag="h3" textSize="title"> <p>You can flexibly
                reach through</p></Text>

              <ul><li>Email address: support@cynase.com</li>
                <li>WhatsApp: +256705640852 </li>

                <li> Social media <Icon name="Facebook" size="25px" color={`#252859`} /><Icon name="Twitter" size="25px" color={`#252859`} /> </li>
                <li>Fill in the contact form here</li>
              </ul></FadeInSection>
          </Container>

        </Col>
        <Col>
          <Div className="contact" bg={`#fff`}

            align="center"
            shadow="3" m={{ t: "2rem" }}>
            <Container>
              <Div align="center" textAlign="center"></Div>

              <br></br>
              <Text className="chead" textColor={`#252859`} tag="p" textSize="heading">
                Contact us

              </Text>

              <Div m={{ t: "4.5rem" }}>




                <form className="myform" onSubmit={handleSubmit(onSubmit)}>

                  <Input  {...register("name", { required: true, maxLength: 100 })}
                    placeholder="Full name" onChange={handleChange} name="name" type="text"

                    p={{ x: "2.5rem" }}
                    prefix={
                      <Icon
                        name="UserSolid"
                        color="warning800"
                        size="16px"
                        cursor="pointer"
                        pos="absolute"
                        top="50%"
                        left="0.75rem"
                        transform="translateY(-50%)"
                      />
                    }
                  />
                  {errors.name && <p className="text-error">Your full name is required</p>}
                  <br></br>
                  <Input   {...register("phone", { required: true, maxLength: 15 })}
                    placeholder="Phone number" onChange={handleChange} name="phone" type="tel"

                    p={{ x: "2.5rem" }}
                    prefix={
                      <Icon
                        name="UserSolid"
                        color="warning800"
                        size="16px"
                        cursor="pointer"
                        pos="absolute"
                        top="50%"
                        left="0.75rem"
                        transform="translateY(-50%)"
                      />
                    }
                  />   {errors.phone && <p className="text-error">Your Phone number is required</p>}
                  <Input   {...register("email", { required: true, maxLength: 55, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    placeholder="Email address" onChange={handleChange} name="email" type="text"

                    p={{ x: "2.5rem" }} m={{ t: "2rem" }}
                    prefix={
                      <Icon
                        name="Email"
                        color="warning800"
                        size="16px"
                        cursor="pointer"
                        pos="absolute"
                        top="50%"
                        left="0.75rem"
                        transform="translateY(-50%)"
                      />
                    }
                  />
                  {errors.email && <p className="text-error">Please check your email</p>}

                  <Input   {...register("message", { required: true, maxLength: 550 })}
                    placeholder=" Enter your Message" onChange={handleChange} name="message" type="text"

                    p={{ x: "2.5rem" }} m={{ t: "2rem" }}
                    prefix={
                      <Icon
                        name="Message"
                        color="warning800"
                        size="16px"
                        cursor="pointer"
                        pos="absolute"
                        top="50%"
                        left="0.75rem"
                        transform="translateY(-50%)"
                      />
                    }
                  />{errors.message && <p className="text-error">Your text is required</p>}
                  <br></br>

                  <Button type='submit'
                    align="center"
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    w="10rem"
                  >
                    {buttonText}
                  </Button>

                </form>
                <Div></Div>
              </Div>
            </Container>
          </Div>
        </Col>

      </Row>

    </>
  );
}




export default Contact;
