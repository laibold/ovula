import { CycleInformation } from "../../types/types";
import { Wrapper } from "./styles";
import { InputsForm } from "./components/Form";
import { useNavigate } from "react-router-dom";

export type InputsProps = {
  cycleInformation: CycleInformation;
  onSubmit: ({
    periodStart,
    menstruationLength,
    cycleLength,
  }: CycleInformation) => void;
};

export const Inputs = ({ cycleInformation, onSubmit }: InputsProps) => {
  const navigation = useNavigate();

  const onFormSubmit = (cycleInformation: CycleInformation) => {
    onSubmit(cycleInformation);
    navigation("/calendar");
  };

  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
      </p>

      <InputsForm cycleInformation={cycleInformation} onSubmit={onFormSubmit} />
    </Wrapper>
  );
};
