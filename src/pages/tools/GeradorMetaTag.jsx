import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container, Form, Button, Card } from "react-bootstrap";

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

const Label = styled(Form.Label)`
  font-weight: bold;
`;
const Small = styled.small`
  font-size: 60%;
`;

function GeradorMetaTag() {
  const [contadorCaracterTitulo, setContadorCaracterTitulo] = useState(0);
  const [contadorCaracterAutor, setContadorCaracterAutor] = useState(0);
  const [contadorCaracterKeywords, setContadorCaracterKeywords] = useState(0);
  const [contadorCaracterDescription, setContadorCaracterDescription] =
    useState(0);
  const [textoTitulo, setTextoTitulo] = useState("");
  const [textoAutor, setTextoAutor] = useState("");
  const [textoKeywords, setTextoKeywords] = useState("");
  const [textoDescription, setTextoDescription] = useState("");
  const [respostaMetaTag, setRespostaMetaTag] = useState("");

  const gerarMetaTag = (event) => {
    event.preventDefault();
    setRespostaMetaTag(`
    <head>
    <title>${textoTitulo}</title>
    <meta name="author" content="${textoAutor}" />
    <meta name="keywords" content="${textoKeywords}" />
    <meta name="description" content="${textoDescription}" />
    </head>
      `);
  };
  return (
    <Container className="text-left mt-5">
      <Titulo>Gerador de Meta Tags</Titulo>
      <div>
        <p>
          Gerador de Metas Tags. Gera as metas tags, já contando os caracteres
          para facilitar as digitação, basta preencher o formulário abaixo:
        </p>
        <p>Veja um exemplo de um resultado:</p>
        <p>
          Gerador de Metas Tags.
          <br />
          Gera as metas tags, já contando os caracteres para facilitar as
          digitação, basta preencher o formulário abaixo:
          <br />
          Veja um exemplo de um resultado:
          <br />
          &lt;head&gt;
          <br />
          &lt;title&gt;Gerador Meta Tag - Mango&lt;/title&gt;
          <br />
          &lt;meta name="author" content="Joaquim José" /&gt;
          <br />
          &lt;meta name="keywords" content="gerador meta tag, meta autor, meta
          keywords" /&gt;
          <br />
          &lt;meta name="description" content="Gera as metas tags do seu site
          contando os caracteres para facilitar sua vida" /&gt;
          <br />
          &lt;/head&gt;
        </p>
      </div>

      <Card className="mb-3">
        <Card.Body>
          <Form onSubmit={gerarMetaTag}>
            {/* Titulo */}
            <Row>
              <Col>
                <Label htmlFor="tituloDoSite">Título do site:</Label>
                <Form.Control
                  as="textarea"
                  aria-label="tituloDoSite"
                  id="tituloDoSite"
                  onChange={(event) => {
                    setContadorCaracterTitulo(event.target.value.length);
                    setTextoTitulo(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label htmlFor="contadorCaracterTitulo">
                Contador de Caracter(es) do meta título
              </Form.Label>
              <Col xs={1}>
                <Form.Control
                  aria-label="contadorCaracterTitulo"
                  id="contadorCaracterTitulo"
                  value={contadorCaracterTitulo}
                  disabled
                />
              </Col>
              <p>
                <Small>
                  Títulos longos são melhores, em torno de 90 caracteres, apesar
                  que o Google indexa o título até 63 caracteres.
                </Small>
              </p>
            </Row>
            {/* Autor */}
            <Row>
              <Col>
                <Label htmlFor="autor">Meta Tag - Autor:</Label>
                <Form.Control
                  as="textarea"
                  aria-label="autor"
                  id="autor"
                  onChange={(event) => {
                    setContadorCaracterAutor(event.target.value.length);
                    setTextoAutor(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label htmlFor="contadorCaracterAutor">
                Contador de Caracter(es) do meta autor
              </Form.Label>
              <Col xs={1}>
                <Form.Control
                  aria-label="contadorCaracterAutor"
                  id="contadorCaracterAutor"
                  value={contadorCaracterAutor}
                  disabled
                />
              </Col>
            </Row>
            {/* Keywords */}
            <Row>
              <Col>
                <Label htmlFor="keywords">Meta Tag - Keywords:</Label>
                <Form.Control
                  as="textarea"
                  aria-label="keywords"
                  id="keywords"
                  onChange={(event) => {
                    setContadorCaracterKeywords(event.target.value.length);
                    setTextoKeywords(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label htmlFor="contadorCaracterKeywords">
                Contador de Caracter(es) do meta keywords
              </Form.Label>
              <Col xs={1}>
                <Form.Control
                  aria-label="contadorCaracterKeywords"
                  id="contadorCaracterKeywords"
                  value={contadorCaracterKeywords}
                  disabled
                />
              </Col>
              <p>
                <Small>
                  Escreva as palavras-chave separadas por vírgula, sugestão de
                  200 caracteres.
                </Small>
              </p>
            </Row>
            {/* Description */}
            <Row>
              <Col>
                <Label htmlFor="description">Meta Tag - Description:</Label>
                <Form.Control
                  as="textarea"
                  aria-label="description"
                  id="description"
                  onChange={(event) => {
                    setContadorCaracterDescription(event.target.value.length);
                    setTextoDescription(event.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Form.Label htmlFor="contadorCaracterDescription">
                Contador de Caracter(es) do meta description
              </Form.Label>
              <Col xs={1}>
                <Form.Control
                  aria-label="contadorCaracterDescription"
                  id="contadorCaracterDescription"
                  value={contadorCaracterDescription}
                  disabled
                />
              </Col>
              <p>
                <Small>
                  Digite uma descrição de seu site, sugestão de 250 caracteres,
                  apesar que o Google indexa a Descrição até 160.
                </Small>
              </p>
            </Row>
            <div className="text-center mb-3">
              <Button type="submit">Gerar Meta Tags</Button>
            </div>
          </Form>
          {respostaMetaTag && (
            <>
              <Form.Label htmlFor="respostaMetaTag">Resposta:</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                aria-label="respostaMetaTag"
                id="respostaMetaTag"
                readOnly
                value={respostaMetaTag}
              ></Form.Control>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export { GeradorMetaTag };
export default GeradorMetaTag;
