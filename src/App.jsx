import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import MtoolsLogo from "./assets/images/MtoolsLogo.png";
import LogoDavs from "./assets/images/LogoDavs.png";

const StyledContainer = styled(Container)`
  margin-left: 5%;
  margin-right: 5%;
  width: 95vw;
`;

const StyledColLeft = styled(Col)`
  height: 80vh;
  border-right: solid 1px;
  border-color: #cecccc;
`;

const StyledColRight = styled(Col)`
  border-left: solid 1px;
  border-color: #cecccc;
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
    cursor: pointer;
  }

  @media only screen and (max-width: 828px) {
    font-size: 15px;
  }
`;
const StyledImg = styled.img`
  width: 380px;
  @media only screen and (max-width: 828px) {
    width: 250px;
  }
  @media only screen and (max-width: 500px) {
    width: 120px;
  }
`;

const FirstPFooter = styled.p`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media only screen and (max-width: 828px) {
    font-size: 20px;
  }
`;
const SecondPFooter = styled.p`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media only screen and (max-width: 828px) {
    font-size: 20px;
  }
`;
const StyledRow = styled(Row)`
  border-top: solid 1px #cecccc;
  width: 100%;
`;
const Logo = styled.img`
  @media only screen and (max-width: 500px) {
    width: 60px;
  }
`;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <StyledContainer>
        <Row className="mt-1">
          <StyledColLeft xs={4}>
            <StyledImg src={MtoolsLogo} className="py-5"></StyledImg>
            <p>
              <StyledLink onClick={() => navigate("/geradorWhats")}>
                Gerador de link para WhatsApp
              </StyledLink>
            </p>
            <p>
              <StyledLink onClick={() => navigate("/geradorMetaTag")}>
                Gerador de Meta Tags
              </StyledLink>
            </p>
          </StyledColLeft>
          <StyledColRight>
            <Outlet />
          </StyledColRight>
        </Row>
      </StyledContainer>
      <StyledRow className="text-center">
        <FirstPFooter className="mt-3">
          Todos os direitos reservados
        </FirstPFooter>
        <SecondPFooter>
          Desenvolvido pela <Logo src={LogoDavs} alt="Logo da Davs" />
        </SecondPFooter>
      </StyledRow>
      <Analytics />
    </>
  );
}

export default App;
