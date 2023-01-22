import React, {useState} from "react";
import styled from "styled-components";
import {Form, Row, Col, Container} from "react-bootstrap"

function WhatsAppAPIGenerator () {
  const [whatsLink, setWhatsLink] = useState('')


  const generateLink = (phone, message=null) => {
    const baseUrl = 'https://api.whatsapp.com/send?'
    if (phone) {
      setWhatsLink(`${baseUrl}phone=${phone}`) 
    }

    if (message && whatsLink !== '') {
      setWhatsLink(prev => `${prev}&text=${message}`)
    }
  }

  return (
    <Container className="text-center">
       <Form className="mt-5">
        <Form.Group 
          className="mb-5"
          as={Row}
        >
          <Form.Label>Número do WhatsApp</Form.Label>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Control 
              type="text" 
              placeholder="Digite seu número do WhatsApp..." 
              onChange={(value) => generateLink(value.nativeEvent.target.value)}
              />
            <Form.Text className="text-muted">
              Sem espaços e/ou carecteres especiais (!@#$%&*...).
            </Form.Text>
          </Col>

        </Form.Group>

        <Form.Group 
          className="mb-5"
          as={Row}
        >
          <Form.Label>Mensagem de início da conversa</Form.Label>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Control 
              type="tel" 
              placeholder="Digite seu número do WhatsApp..." 
              onChange={(value) => generateLink(null, value.nativeEvent.target.value)}
              />
            <Form.Text className="text-muted">
              Sem espaços e/ou carecteres especiais (!@#$%&*...).
            </Form.Text>
          </Col>

        </Form.Group>

        <Form.Group 
          className="mb-5"
          as={Row}
        >
          <Form.Label>
            Link gerado
          </Form.Label>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Control plaintext readOnly defaultValue={whatsLink} />
          </Col>
        </Form.Group>

      </Form>
      </Container>
  )
}

export {WhatsAppAPIGenerator}
export default WhatsAppAPIGenerator

