import React from "react";
import styled from "styled-components"
import {Row, Col, Tabs, Tab} from "react-bootstrap"

import { WhatsAppAPIGenerator } from "./tools";

const HomeSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
`


function Home () {
  return (
    <>
        <Tabs
          defaultActiveKey="home"
        >
          <Tab eventKey="home" title="Home">
            <HomeSection>
              <h1>
                Ferramentas de marketing
              </h1>
              <h2>
                Navegue pelas abas acima para desfrutar das nossas ferramentas.
              </h2>
              <h3>
                Para sugerir novas ferramentas entre contato pelo e-mail: <a href="mailto:davison.vinicius360@gmail.com">davison.vinicius360@gmail.com</a>
              </h3>
            </HomeSection>
          </Tab>
          <Tab
            eventKey="whats" title="Gerador de link de api do whatsapp"
          >
            <WhatsAppAPIGenerator/>
          </Tab>
        </Tabs>
    </>
  )
}

export { Home };
export default Home;