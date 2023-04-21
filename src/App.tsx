import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./components/Calendar";
import { GlobalStyle } from "./components/theme/GlobalStyle";
import "@picocss/pico";
import styled from "styled-components";

const Headline = styled.h1`
  text-align: center;
  margin-top: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Headline>ovula</Headline>
      <Calendar />
    </>
  );
}

export default App;
