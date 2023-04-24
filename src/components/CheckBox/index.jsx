import { Container } from "./styles";

export function CheckBox() {
  return(
    <Container>
      <input type="checkbox" id="confirm"/>
      <label for="confirm">Lembre-me</label>
    </Container>
  );
}