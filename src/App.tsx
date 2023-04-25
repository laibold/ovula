import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./pages/Calendar";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import "@picocss/pico";
import styled from "styled-components";
import { EventObject } from "@toast-ui/calendar/types";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CycleInformation } from "./types/types";
import { Inputs } from "./pages/Inputs";

const Headline = styled.h1`
  text-align: center;
  margin: 10px 0 30px;
  color: var(--primary);
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

const defaultCycleInformation: CycleInformation = {
  periodStart: new Date(),
  menstruationLength: 4,
  cycleLength: 28,
  sportDays: [],
};

export const App = () => {
  const [cycleInformation, setCycleInformation] = useState<CycleInformation>(
    defaultCycleInformation
  );

  return (
    <>
      <GlobalStyle />
      <Headline>ovula</Headline>
      <Routes>
        <Route
          path="/"
          element={
            <Inputs
              cycleInformation={cycleInformation}
              onSubmit={setCycleInformation}
            />
          }
        />
        <Route
          path="/calendar"
          element={
            <Calendar events={events} cycleInformation={cycleInformation} />
          }
        />
      </Routes>
    </>
  );
};
