import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import { Container } from "@mui/material";

const Container = styled.div'
width: 100%;
height: 100%;
display: flex;
background: ${({  theme })=theme.bg};
';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>

     <Container>
      <Wrapper>

      </Wrapper>
        Hello
     </Container>
    </ThemeProvider>
  );
}

export default App;
