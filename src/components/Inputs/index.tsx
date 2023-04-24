import { FormEvent } from "react";
import { CycleInformation } from "../../types/types";
import { ApplyButton, CheckboxWrapper, Wrapper } from "./styles";

type Props = {
  onSubmit: ({
    periodStart,
    menstruationLength,
    cycleLength,
  }: CycleInformation) => void;
};

const weekdayByIndex: Record<number, string> = {
  0: "Mo",
  1: "Di",
  2: "Mi",
  3: "Do",
  4: "Fr",
  5: "Sa",
  6: "So",
};

export const Inputs = ({ onSubmit }: Props) => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedSportDays: number[] = [];
    e.currentTarget.sportDays.forEach((v: { id: number; checked: boolean }) => {
      if (v.checked) {
        selectedSportDays.push(v.id);
      }
    });

    const target = e.currentTarget;

    const data: CycleInformation = {
      periodStart: new Date(target.periodStart.value),
      menstruationLength: target.menstruationLength.value,
      cycleLength: target.cycleLength.value,
      sportDays: selectedSportDays,
    };

    // todo error handling
    onSubmit(data);
  };

  return (
    <Wrapper>
      <form onSubmit={onFormSubmit}>
        <label htmlFor={"periodStart"}>Beginn deiner Periode</label>
        <input
          id={"periodStart"}
          type={"date"}
          defaultValue={new Date().toLocaleDateString("en-CA")}
        />
        <label htmlFor={"menstruationLength"}>Dauer deiner Menstruation</label>
        <input
          id={"menstruationLength"}
          type={"number"}
          min={"1"}
          defaultValue={"4"}
        />
        <label htmlFor={"cycleLength"}>Dauer deines Zyklus</label>
        <input
          id={"cycleLength"}
          type={"number"}
          min={"1"}
          defaultValue={"28"}
        />
        <label htmlFor={"sportDays"}>Deine Sporttage</label>
        <CheckboxWrapper>
          {[0, 1, 2, 3, 4, 5, 6].map((value) => (
            <span key={value}>
              <input
                id={value.toString()}
                type={"checkbox"}
                name={"sportDays"}
                key={value}
              />
              <label htmlFor={value.toString()}>{weekdayByIndex[value]}</label>
            </span>
          ))}
        </CheckboxWrapper>
        <ApplyButton>Plan generieren</ApplyButton>
      </form>
    </Wrapper>
  );
};
