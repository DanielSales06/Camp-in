import { Container, Content, Background } from "./styles";

import "animate.css";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

export function Home() {
  return(
    <Container>
      <Content>
        <Header className="animate__animated animate__bounceInDown"/>

        <Card/>
      </Content>

      <Background className="animate__animated animate__fadeIn animate__slow"/>
    </Container>
  );
}