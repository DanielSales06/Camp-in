import { Container } from "./styles";

export function Input({ icon: Icon, title, ...rest }) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  );
}