import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import MtoolsLogo from "../assets/images/MtoolsLogo.png";

const StyledColLeft = styled(Col)`
  border-right: solid 1px;
  border-color: #cecccc;
`;

const StyledColRight = styled(Col)`
  border-left: solid 1px;
  border-color: #cecccc;
`;
const StyledContainer = styled(Container)`
  margin-left: 10%;
  margin-right: 10%;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    font-weight: 800;
    color: #000;
  }
`;

function Home() {
  return (
    <StyledContainer className="mt-4">
      <Row>
        <StyledColLeft xs={4}>
          <img src={MtoolsLogo} className="py-5"></img>
          <p>
            <StyledLink href="">Gerador de link para WhatsApp</StyledLink>
          </p>
          <p>
            <StyledLink href="">Gerador de Meta Tags</StyledLink>
          </p>
        </StyledColLeft>
        <StyledColRight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          quibusdam minus possimus cum esse porro atque et nihil numquam
          provident, culpa modi saepe asperiores fugiat quasi eligendi, facilis
          ratione repellendus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium in quisquam eligendi pariatur,
          doloremque asperiores quis. Nesciunt, molestias a quod quidem vel at
          excepturi modi dolore ex possimus corrupti blanditiis! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Odit similique nostrum
          reprehenderit, obcaecati repudiandae, sint commodi suscipit facere,
          ullam necessitatibus ad fugit ipsam libero quasi cumque expedita
          sapiente molestias adipisci! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur saepe quis optio hic, quam perspiciatis
          labore dignissimos adipisci commodi facilis maiores quidem officiis
          nulla esse vel qui, aut quibusdam sed.
        </StyledColRight>
      </Row>
    </StyledContainer>
  );
}

export { Home };
export default Home;
