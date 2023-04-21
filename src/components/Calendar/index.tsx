import "@toast-ui/calendar/dist/toastui-calendar.min.css";
// import { default as TuiCalendar } from "@toast-ui/react-calendar";
import TUICalendar from "@toast-ui/react-calendar";
import ToastUIReactCalendar from "@toast-ui/react-calendar";

import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";

const CalendarWrapper = styled.div`
  cursor: default;
`;

const monthOptions = {
  startDayOfWeek: 1,
};

const themeConfig = {
  common: {
    holiday: {
      color: "#000000",
    },
  },
};

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const calRef = useRef<ToastUIReactCalendar>(null);

  const onPrev = useCallback(() => {
    setSelectedDate(
      (current) => new Date(current.setMonth(current.getMonth() - 1))
    );
  }, []);

  const onNext = useCallback(() => {
    setSelectedDate(
      (current) => new Date(current.setMonth(current.getMonth() + 1))
    );
  }, []);

  useEffect(() => {
    calRef.current?.calendarInstance?.setDate(selectedDate);
  }, [selectedDate]);

  return (
    <CalendarWrapper>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
      <span>
        {selectedDate.toLocaleDateString("de-DE", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <TUICalendar
        ref={calRef}
        usageStatistics={false}
        view={"month"}
        month={monthOptions}
        isReadOnly={true}
        theme={themeConfig}
      />
    </CalendarWrapper>
  );
};
