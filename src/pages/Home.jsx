import React from "react";
import {Container, Tabs, Tab} from "react-bootstrap"

import { WhatsAppAPIGenerator } from "./tools";

function Home () {
  return (
    <Container className="mt-3">
        <Tabs
          defaultActiveKey="home"
        >
          <Tab eventKey="home" title="Home">
            <Container className="text-center mt-5 pt-5">
              <h1>
                Ferramentas de marketing
              </h1>
              <h2>
                Navegue pelas abas acima para desfrutar das nossas ferramentas.
              </h2>
              <h3>
                Para sugerir novas ferramentas entre contato pelo e-mail: <a href="mailto:davison.vinicius360@gmail.com">davison.vinicius360@gmail.com</a>
              </h3>
            </Container>
          </Tab>
          <Tab
            eventKey="whats" title="Gerador de link de api do whatsapp"
          >
            <WhatsAppAPIGenerator/>
          </Tab>
        </Tabs>
    </Container>
  )
}

export { Home };
export default Home;