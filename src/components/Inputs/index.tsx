import { FormEvent } from "react";
import { CycleInformation } from "../../types/types";

type Props = {
  onSubmit: ({
    periodStart,
    menstruationLength,
    cycleLength,
  }: CycleInformation) => void;
};

export const Inputs = ({ onSubmit }: Props) => {
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;

    const data: CycleInformation = {
      periodStart: new Date(target.periodStart.value),
      menstruationLength: target.menstruationLength.value,
      cycleLength: target.cycleLength.value,
    };

    // todo error handling
    onSubmit(data);
  };

  return (
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
      <input id={"cycleLength"} type={"number"} min={"1"} defaultValue={"28"} />
      <button>ok</button>
    </form>
  );
};
