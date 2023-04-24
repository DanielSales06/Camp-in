import { Container, Header, Fieldset, Form,Section, Footer } from "./styles";

import { BsBoxArrowInRight } from "react-icons/bs"
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";
import { CheckBox } from "../CheckBox";

export function Card() {
  return(
    <Container>
      <Fieldset>
        <Header>
        <legend className="animate__animated animate__backInLeft animate__fast"><BsBoxArrowInRight/> Faça seu login</legend>

        <p>Entre com suas informações de cadastro.</p>
        </Header>

        <Form>
          <label>E-mail</label>
          <Input
            placeholder="Digite seu e-mail"
            icon={FiMail}
            id="Email"
            type="email"
          />
          <label>Senha</label>
          <Input
            placeholder="Digite sua senha"
            icon={FiLock}
            id="Password"
            type="password"
          />
        </Form>

        <Section>
          <CheckBox />
          <a><span>Esqueci minha senha</span></a>
        </Section>

        <Button title="Entrar"/>

        <Footer>
          <a>Não tem uma conta? <span>Registre-se</span></a>
        </Footer>
      </Fieldset>
    </Container>
  );
}