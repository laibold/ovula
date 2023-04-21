import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import TUICalendar from "@toast-ui/react-calendar";
import ToastUIReactCalendar from "@toast-ui/react-calendar";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ButtonWrapper,
  CalendarHeadline,
  CalendarWrapper,
  ConfigWrapper,
  DateSelectButton,
} from "./styles";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import { EventObject } from "@toast-ui/calendar/types";

type Props = {
  events: EventObject[];
};

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

export const Calendar = ({ events }: Props) => {
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

  const setToday = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    calRef.current?.calendarInstance?.setDate(selectedDate);
  }, [selectedDate]);

  return (
    <CalendarWrapper>
      <ConfigWrapper>
        <CalendarHeadline>
          {selectedDate.toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric",
          })}
        </CalendarHeadline>
        <ButtonWrapper>
          <DateSelectButton onClick={onPrev}>
            <FaAngleLeft color="white" />
          </DateSelectButton>
          <DateSelectButton onClick={setToday}>
            <FaCircle color="white" />
          </DateSelectButton>
          <DateSelectButton onClick={onNext}>
            <FaAngleRight color="white" />
          </DateSelectButton>
        </ButtonWrapper>
      </ConfigWrapper>

      <TUICalendar
        ref={calRef}
        usageStatistics={false}
        view={"month"}
        month={monthOptions}
        // isReadOnly={true}
        theme={themeConfig}
        height={"500px"}
        events={events}
      />
      {/* todo bind event handlers */}
    </CalendarWrapper>
  );
};
