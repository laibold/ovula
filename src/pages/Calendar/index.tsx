import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import ToastUIReactCalendar from "@toast-ui/react-calendar";
import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarWrapper, NavLinkStyled, TUICalendarStyled } from "./styles";
import { EventObject } from "@toast-ui/calendar/types";
import { CalendarConfig } from "./CalendarConfig";
import { CycleInformation } from "../../types/types";
import { FaAngleLeft } from "react-icons/fa";
import { MonthOptions, ThemeObject } from "../../types/lib/TUICalendar";

type Props = {
  events: EventObject[];
  cycleInformation: CycleInformation | null;
};

const monthOptions: MonthOptions = {
  startDayOfWeek: 1,
  dayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
};

const themeConfig: ThemeObject = {
  common: {
    holiday: {
      color: "#000000",
    },
  },
};

export const Calendar = ({ events, cycleInformation }: Props) => {
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

  const onSetToday = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  // set Month based on selected date (from control buttons)
  useEffect(() => {
    calRef.current?.calendarInstance?.setDate(selectedDate);
  }, [selectedDate]);

  return (
    <CalendarWrapper>
      <NavLinkStyled to="/">
        <FaAngleLeft />
        Zurück
      </NavLinkStyled>
      <CalendarConfig
        selectedDate={selectedDate}
        onPrev={onPrev}
        onSetToday={onSetToday}
        onNext={onNext}
      />
      <TUICalendarStyled
        ref={calRef}
        usageStatistics={false}
        view="month"
        month={monthOptions}
        // isReadOnly={true}
        theme={themeConfig}
        height="500px"
        events={events}
      />
      {/* todo bind event handlers (eg clickEvent) */}
    </CalendarWrapper>
  );
};
