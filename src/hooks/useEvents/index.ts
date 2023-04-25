import { EventObject } from "@toast-ui/calendar";
import { useMemo } from "react";
import { CycleInformation } from "../../types/types";

type Phase = {
  start: Date;
  duration: number;
};

// todo
const FOLLICULAR_PHASE_DURATION = 14;
const OVALUATION_PHASE_DURATION = 0; // = innerhalb eines Tages vorbei
const LUTEAL_PHASE_DURATION = 14;

export const useEvents = ({
  periodStart,
  menstruationLength,
  cycleLength,
  sportDays,
}: CycleInformation): EventObject[] => {
  return useMemo(() => {
    // Phase 1: Menstruation
    const menstruationPhase: Phase = {
      start: periodStart,
      duration: menstruationLength - 1,
    };

    // Phase 2: Follikelphase
    const follicularPhase = {
      start: getDateAfterPhase(menstruationPhase),
      duration: FOLLICULAR_PHASE_DURATION,
    };

    // phase 3 Ovulation
    const ovaluationPhase: Phase = {
      start: getDateAfterPhase(follicularPhase),
      duration: OVALUATION_PHASE_DURATION,
    };

    // phase 4 Lutealphase
    const lutealPhase: Phase = {
      start: getDateAfterPhase(ovaluationPhase),
      duration: LUTEAL_PHASE_DURATION,
    };

    return [
      createEvent(
        "Menstruation",
        menstruationPhase.start,
        menstruationPhase.duration,
        "#c95151"
      ),
      ...getSportEventsForPhase(menstruationPhase, sportDays),
      createEvent(
        "Follikelphase",
        follicularPhase.start,
        follicularPhase.duration,
        "#dad859"
      ),
      ...getSportEventsForPhase(follicularPhase, sportDays),
      createEvent(
        "Ovulation",
        ovaluationPhase.start,
        ovaluationPhase.duration,
        "#6fc951"
      ),
      ...getSportEventsForPhase(ovaluationPhase, sportDays),
      createEvent(
        "Lutealphase",
        lutealPhase.start,
        lutealPhase.duration,
        "#be439a"
      ),
      ...getSportEventsForPhase(lutealPhase, sportDays),
    ];
  }, [periodStart, menstruationLength, cycleLength, sportDays]);
};

const getDateAfterPhase = (phase: Phase) => {
  const date = new Date(phase.start);
  date.setDate(date.getDate() + phase.duration + 1);
  return date;
};

const getDateFromDuration = (startDate: Date, duration: number) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + duration);
  return date;
};

const getSportEventsForPhase = (phase: Phase, sportDays: number[]) => {
  const events: EventObject[] = [];

  for (let i = 0; i <= phase.duration; i++) {
    const date = getDateFromDuration(phase.start, i);
    if (sportDays.includes(date.getDay() - 1)) {
      // todo get sport type
      events.push(createEvent("Sport", date, 0, "#ff6100"));
    }
  }

  return events;
};

const createEvent = (
  name: string,
  startDate: Date,
  duration: number,
  color: string
): EventObject => ({
  calendarId: "1",
  category: "allday",
  isVisible: true,
  title: name,
  id: `${name.replaceAll(" ", "")}-${startDate.getTime()}`,
  body: "Test",
  start: startDate,
  end: getDateFromDuration(startDate, duration),
  borderColor: "transparent",
  backgroundColor: color,
});
