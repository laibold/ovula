import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./components/Calendar";
import { GlobalStyle } from "./components/theme/GlobalStyle";
import "@picocss/pico";
import styled from "styled-components";
import { EventObject } from "@toast-ui/calendar/types";

const Headline = styled.h1`
  text-align: center;
  margin-top: 10px;
`;

const events: EventObject[] = [
  {
    calendarId: "1",
    category: "allday",
    isVisible: true,
    title: "Power Pump",
    id: "1",
    body: "Test",
    start: new Date(),
    end: new Date(),
    borderColor: "transparent",
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Headline>ovula</Headline>
      <Calendar events={events} />
    </>
  );
}

export default App;
