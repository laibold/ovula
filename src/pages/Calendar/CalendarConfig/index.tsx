import {
  ButtonWrapper,
  CalendarHeadline,
  ConfigWrapper,
  DateSelectButton,
} from "./styles";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";

type Props = {
  selectedDate: Date;
  onPrev: () => void;
  onSetToday: () => void;
  onNext: () => void;
};

export const CalendarConfig = ({
  selectedDate,
  onPrev,
  onSetToday,
  onNext,
}: Props) => {
  return (
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
        <DateSelectButton onClick={onSetToday}>
          <FaCircle color="white" />
        </DateSelectButton>
        <DateSelectButton onClick={onNext}>
          <FaAngleRight color="white" />
        </DateSelectButton>
      </ButtonWrapper>
    </ConfigWrapper>
  );
};
