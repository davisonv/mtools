import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Container, Button, Alert } from "react-bootstrap";
import * as Yup from "yup";
import "yup-phone";
import styled from "styled-components";

const ErrorLabel = styled.div`
  font-size: 11px;
  color: red;
  margin-top: -10px;
`;

function WhatsAppAPIGenerator() {
  const [whatsLink, setWhatsLink] = useState("");

  const initialValues = {
    phoneNumber: "",
    message: "",
  };

  const LinkGeneratorSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .phone("IN", false, "Digite um número válido.")
      .required(),
    message: Yup.string()
      .min(3, "Digite uma mensagem mais longa!")
      .max(60, "Digite uma mensagem mais curta!")
      .nullable(),
  });

  const allowSubmit = (isTouched, isValid) => {
    if (isTouched && isValid) {
      return true;
    }

    return false;
  };

  const processMessage = (message) => {
    let newMessage = message;

    newMessage = newMessage.replace(/\s/g, "%20");
    console.log(newMessage);
    return newMessage;
  };

  const generateLink = (values) => {
    const baseUrl = "https://api.whatsapp.com/send?";

    let finalUrl = "";

    if (values.phoneNumber) {
      finalUrl = `${baseUrl}phone=${values.phoneNumber}`;
    }

    if (values.message) {
      finalUrl = `${finalUrl}&text=${processMessage(values.message)}`;
    }

    setWhatsLink(finalUrl);
  };

  function copiarTexto() {
    navigator.clipboard.writeText({ whatsLink }.whatsLink);
  }

  const Titulo = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media only screen and (max-width: 828px) {
      font-size: 20px;
    }
  `;

  return (
    <Container className="text-left mt-5">
      <Titulo>Gerador de link para Whatsapp</Titulo>
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
              <Col>
                {errors.phoneNumber && touched.phoneNumber ? (
                  <ErrorLabel>{errors.phoneNumber}</ErrorLabel>
                ) : null}
                <label htmlFor="phoneNumber">Celular (whatsapp)</label>
                <Field name="phoneNumber" className="form-control mb-3" />
              </Col>
            </Row>

            <Row>
              <Col>
                {errors.message && touched.message ? (
                  <ErrorLabel>{errors.message}</ErrorLabel>
                ) : null}
                <label htmlFor="message">Mensagem</label>
                <Field name="message" className="form-control mb-3" />
              </Col>
            </Row>

            <Button type="submit" disabled={!allowSubmit(touched, isValid)}>
              Gerar
            </Button>

            {whatsLink && (
              <Row>
                <Col>
                  <div className="mt-5 mb-1 ">Link gerado:</div>
                  <Alert variant="success">
                    {whatsLink}

                    <div className="mt-2 text-center">
                      <Button
                        variant="info"
                        className="fw-bold"
                        onClick={() => copiarTexto()}
                      >
                        Copiar Texto
                      </Button>
                    </div>
                  </Alert>
                </Col>
              </Row>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export { WhatsAppAPIGenerator };
export default WhatsAppAPIGenerator;
