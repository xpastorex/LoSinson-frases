import styled from "styled-components"
import Logo from "../imgs/the-simpson.png";

export default function Welcome(props) {

  const {reqApi} = props;

    return (
        <ContentLogo>
            <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
            <ImageLogo src={Logo} alt="Losinsons" onClick={reqApi}></ImageLogo>
        </ContentLogo>
    )
}

const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  transition: all 0.2s ease-in-out;
  &:hover{
    transition: all 0.2s ease-in-out;
    width: 480px;
    height: auto;
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;