import {
  Field,
  Form,
  FormikBag,
  FormikErrors,
  FormikProps,
  withFormik,
} from "formik";
import { CycleInformation } from "../../../../types/types";
import { ApplyButton, CheckboxWrapper, Error, Wrapper } from "../../styles";

type FormProps = {
  cycleInformation: CycleInformation;
  onSubmit: ({
    periodStart,
    menstruationLength,
    cycleLength,
  }: CycleInformation) => void;
};

type FormValues = Omit<CycleInformation, "periodStart" | "sportDays"> & {
  periodStart: string;
  sportDays: string[];
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

const FormikInputsForm = ({ touched, errors }: FormikProps<FormValues>) => {
  return (
    <Wrapper>
      <Form>
        <label>
          Beginn deiner Periode
          <Field
            id="periodStart"
            name="periodStart"
            type="date"
            aria-invalid={
              errors.periodStart && touched.periodStart ? true : undefined
            }
          />
        </label>
        <label>
          Dauer deiner Menstruation
          <Field
            id="menstruationLength"
            name="menstruationLength"
            type="number"
            min="1"
            aria-invalid={
              errors.menstruationLength && touched.menstruationLength
                ? true
                : undefined
            }
          />
        </label>
        <label>
          Dauer deines Zyklus
          <Field
            id="cycleLength"
            name="cycleLength"
            type="number"
            min="1"
            aria-invalid={
              errors.cycleLength && touched.cycleLength ? true : undefined
            }
          />
        </label>
        <label>Deine Sporttage</label>
        {touched.sportDays && errors.sportDays && (
          <Error>{errors.sportDays}</Error>
        )}
        <CheckboxWrapper role="group">
          {[0, 1, 2, 3, 4, 5, 6].map((value) => (
            <label key={value}>
              <Field
                id={value.toString()}
                type="checkbox"
                name="sportDays"
                value={value.toString()}
                key={value}
                aria-invalid={
                  touched.sportDays && errors.sportDays ? true : undefined
                }
              />
              {weekdayByIndex[value]}
            </label>
          ))}
        </CheckboxWrapper>
        <ApplyButton type="submit">Plan generieren</ApplyButton>
      </Form>
    </Wrapper>
  );
};

export const InputsForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: ({ cycleInformation }: FormProps): FormValues => ({
    ...cycleInformation,
    sportDays: cycleInformation.sportDays.map((value) => value.toString()),
    periodStart:
      cycleInformation?.periodStart.toLocaleDateString("en-CA") ||
      new Date().toLocaleDateString("en-CA"),
  }),

  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.periodStart) {
      errors.periodStart = "Notwendig";
    }
    if (!values.menstruationLength) {
      errors.menstruationLength = "Notwendig";
    }
    if (!values.cycleLength) {
      errors.cycleLength = "Notwendig";
    }
    if (!values.sportDays.length) {
      errors.sportDays = "Notwendig";
    }

    return errors;
  },

  handleSubmit: (
    values: FormValues,
    { props }: FormikBag<FormProps, FormValues>
  ) => {
    const data: CycleInformation = {
      ...values,
      sportDays: values.sportDays.map((value) => parseInt(value)),
      periodStart: new Date(values.periodStart),
    };

    props.onSubmit(data);
  },
})(FormikInputsForm);
