import React, {useState} from "react";
import { Formik, Form, Field, } from 'formik';
import {Row, Col, Container, Button, Alert} from "react-bootstrap"
import * as Yup from 'yup';
import "yup-phone";
import styled from "styled-components";

const ErrorLabel = styled.div`
  font-size: 11px;
  color: red;
  margin-top: -10px;
`

function WhatsAppAPIGenerator () {
  const [whatsLink, setWhatsLink] = useState('')

  const initialValues = {
    phoneNumber: '',
    message: '',
  }

  const LinkGeneratorSchema = Yup.object().shape({
    phoneNumber: Yup.string().phone("IN", false, "Digite um número válido.").required(),
    message: Yup.string()
              .min(3, 'Digite uma mensagem mais longa!')
                .max(60, 'Digite uma mensagem mais curta!').nullable()
  })

  const allowSubmit = (isTouched, isValid) => {
    if (isTouched && isValid) {
      return true
    }
  
    return false
  }

  const processMessage = (message) => {
    let newMessage = message

    newMessage = newMessage.replace(/\s/g, '%20')
    console.log(newMessage)
    return newMessage
  }

  const generateLink = (values) => {
    const baseUrl = 'https://api.whatsapp.com/send?'

    let finalUrl = ''

    if (values.phoneNumber) {
      finalUrl = `${baseUrl}phone=${values.phoneNumber}`
    }

    if (values.message) {
      finalUrl = `${finalUrl}&text=${processMessage(values.message)}`
    }

    setWhatsLink(finalUrl)
  }

  return (
    <Container className="text-left">
      <Formik
        initialValues={initialValues}
        validationSchema={LinkGeneratorSchema}
        onSubmit={(values) => {
          generateLink(values);
        }}
      >

        {({ errors, touched, isValid }) => (

         <Form>
          <Row>
            <Col md={12}>
              {errors.phoneNumber && touched.phoneNumber ? (
                <ErrorLabel>{errors.phoneNumber}</ErrorLabel>
              ) : null}
              <Field name="phoneNumber" className="form-control mb-3"/>
            </Col>
          </Row>
          
           <Row>
            <Col md={12}>
              {errors.message && touched.message ? (
                <ErrorLabel>{errors.message}</ErrorLabel>
              ) : null}
              <Field name="message" className="form-control mb-3"/>
                
            </Col>
           </Row>
           
           <Button type="submit" disabled={!allowSubmit(touched, isValid)}>Gerar</Button>

          {whatsLink && (
            <Row>
              <Col md={12}>
                <div className="mt-5 mb-1 ">Link gerado:</div>
                <Alert variant='success'>
                  {whatsLink}
                </Alert>
              </Col>
            </Row>
          )}
         </Form>
       )}

      </Formik>

      
      


    </Container>
  )
}

export {WhatsAppAPIGenerator}
export default WhatsAppAPIGenerator

