import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import ToastUIReactCalendar from "@toast-ui/react-calendar";
import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarWrapper, NavLinkStyled, TUICalendarStyled } from "./styles";
import { EventObject } from "@toast-ui/calendar/types";
import { CalendarConfig } from "./CalendarConfig";
import { FaAngleLeft } from "react-icons/fa";
import { MonthOptions, ThemeObject } from "../../types/lib/TUICalendar";

type Props = {
  events: EventObject[];
};

const monthOptions: MonthOptions = {
  startDayOfWeek: 1,
  dayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  visibleEventCount: 3,
};

const themeConfig: ThemeObject = {
  common: {
    holiday: {
      color: "#000000",
    },
  },
};

const timezoneOptions = {
  zones: [
    {
      timezoneName: "Europe/Berlin",
    },
  ],
};

export const Calendar = ({ events }: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const calRef = useRef<ToastUIReactCalendar>(null);

  const onPrev = useCallback(() => {
    setSelectedDate((current) => {
      const date = new Date();
      date.setMonth(current.getMonth() - 1);
      return date;
    });
  }, [setSelectedDate]);

  const onNext = useCallback(() => {
    setSelectedDate((current) => {
      const date = new Date();
      date.setMonth(current.getMonth() + 1);
      return date;
    });
  }, [setSelectedDate]);

  const onSetToday = useCallback(() => {
    setSelectedDate(new Date());
  }, [setSelectedDate]);

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
        isReadOnly={true}
        theme={themeConfig}
        height="550px"
        events={events}
        timezone={timezoneOptions}
        useDetailPopup={true}
        useFormPopup={false}
        gridSelection={false}
      />
    </CalendarWrapper>
  );
};
