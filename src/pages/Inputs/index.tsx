import { CycleInformation } from "../../types/types";
import { ApplyButton, CheckboxWrapper, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useCallback, useMemo } from "react";

type FormCycleInformation = Omit<CycleInformation, "periodStart"> & {
  periodStart: string;
};

type Props = {
  cycleInformation: CycleInformation;
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

export const Inputs = ({ onSubmit, cycleInformation }: Props) => {
  const navigate = useNavigate();

  const onFormSubmit = useCallback((values: FormCycleInformation) => {
    const data: CycleInformation = {
      ...values,
      periodStart: new Date(values.periodStart),
    };

    // todo error handling
    onSubmit(data);
    navigate("/calendar", { state: data });
  }, []);

  const initialValues: FormCycleInformation = useMemo(
    () => ({
      ...cycleInformation,
      periodStart:
        cycleInformation?.periodStart.toLocaleDateString("en-CA") ||
        new Date().toLocaleDateString("en-CA"),
    }),
    [cycleInformation]
  );

  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.{" "}
      </p>

      {/*todo use <label><Field/>{Text}</label>*/}
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        <Form>
          <label htmlFor="periodStart">Beginn deiner Periode</label>
          <Field id="periodStart" name="periodStart" type="date" />
          <label htmlFor="menstruationLength">Dauer deiner Menstruation</label>
          <Field
            id="menstruationLength"
            name="menstruationLength"
            type="number"
            min="1"
          />
          <label htmlFor="cycleLength">Dauer deines Zyklus</label>
          <Field id="cycleLength" name="cycleLength" type="number" min="1" />
          <label htmlFor="sportDays">Deine Sporttage</label>
          <CheckboxWrapper role="group">
            {[0, 1, 2, 3, 4, 5, 6].map((value) => (
              <label key={value}>
                <Field
                  id={value.toString()}
                  type="checkbox"
                  name="sportDays"
                  value={value.toString()}
                  key={value}
                />
                {weekdayByIndex[value]}
              </label>
            ))}
          </CheckboxWrapper>
          <ApplyButton type="submit">Plan generieren</ApplyButton>
        </Form>
      </Formik>
    </Wrapper>
  );
};
