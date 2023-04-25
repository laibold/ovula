import { CycleInformation } from "../types/types";
import { EventObject } from "@toast-ui/calendar";
import { useMemo } from "react";

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
      createEvent(
        "Follikelphase",
        follicularPhase.start,
        follicularPhase.duration,
        "#dad859"
      ),
      createEvent(
        "Ovulation",
        ovaluationPhase.start,
        ovaluationPhase.duration,
        "#6fc951"
      ),
      createEvent(
        "Lutealphase",
        lutealPhase.start,
        lutealPhase.duration,
        "#be439a"
      ),
      createEvent("Sport", new Date(), 0, "#ff6100"),
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
  id: name, // todo
  body: "Test",
  start: startDate,
  end: getDateFromDuration(startDate, duration),
  borderColor: "transparent",
  backgroundColor: color,
});
