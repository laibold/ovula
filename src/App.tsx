import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./components/Calendar";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import "@picocss/pico";
import styled from "styled-components";
import { EventObject } from "@toast-ui/calendar/types";
import { Inputs } from "./components/Inputs";
import { useState } from "react";
import { CycleInformation } from "./types/types";

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

export const App = () => {
  const [cycleInformation, setCycleInformation] =
    useState<CycleInformation | null>(null);

  return (
    <>
      <GlobalStyle />
      <Headline>ovula</Headline>
      <Inputs onSubmit={setCycleInformation} />
      <Calendar events={events} cycleInformation={cycleInformation} />
    </>
  );
};
