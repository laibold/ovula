import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./pages/Calendar";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import "@picocss/pico";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CycleInformation } from "./types/types";
import { Inputs } from "./pages/Inputs";
import { useEvents } from "./services/eventService";

const Headline = styled.h1`
  text-align: center;
  margin: 10px 0 30px;
  color: var(--primary);
`;

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

  const events = useEvents(cycleInformation);

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
        <Route path="/calendar" element={<Calendar events={events} />} />
      </Routes>
    </>
  );
};
