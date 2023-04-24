import { useEffect } from "react";
import { CycleInformation } from "../../../types/types";

export const useColors = (
  cycleInformation: CycleInformation,
  selectedDate: Date
) =>
  useEffect(() => {
    // reset all
    const allDays = document.getElementsByClassName(
      "toastui-calendar-daygrid-cell"
    );

    for (let i = 0; i < allDays.length; i++) {
      (allDays[i] as HTMLDivElement).style.backgroundColor = "inherit";
    }

    if (!cycleInformation) {
      return;
    }

    if (cycleInformation.periodStart.getMonth() != selectedDate.getMonth()) {
      return;
    }
    // menstruation
    for (let i = 0; i < cycleInformation.menstruationLength; i++) {
      const day = cycleInformation.periodStart.getDate() + i;
      console.log(day);
      const a = document.evaluate(
        `//span[contains(text(),'${day}')]/../../..`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue as HTMLDivElement;

      if (a) {
        a.style.backgroundColor = "rgba(224,78,95,0.7)";
      }
    }
  }, [cycleInformation, selectedDate]);
