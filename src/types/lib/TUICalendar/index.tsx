// https?://github.com/nhn/tui.calendar/blob/main/docs/en/apis/options.md#month
export interface MonthOptions {
  dayNames?: [string, string, string, string, string, string, string];
  startDayOfWeek?: number;
  narrowWeekend?: boolean;
  visibleWeeksCount?: number;
  isAlways6Weeks?: boolean;
  workweek?: boolean;
  visibleEventCount?: number;
}

// https?://github.com/nhn/tui.calendar/blob/main/docs/en/apis/theme.md
export interface ThemeObject {
  common?: CommonTheme;
  week?: WeekTheme;
  month?: MonthTheme;
}

interface CommonTheme {
  backgroundColor?: string;
  border?: string;
  gridSelection?: {
    backgroundColor?: string;
    border?: string;
  };
  dayName?: { color?: string };
  holiday?: { color?: string };
  saturday?: { color?: string };
  today?: { color?: string };
}

interface WeekTheme {
  dayName?: {
    borderLeft?: string;
    borderTop?: string;
    borderBottom?: string;
    backgroundColor?: string;
  };
  dayGrid?: {
    borderRight?: string;
    backgroundColor?: string;
  };
  dayGridLeft?: {
    borderRight?: string;
    backgroundColor?: string;
    width?: string;
  };
  timeGrid?: { borderRight?: string };
  timeGridLeft?: {
    borderRight?: string;
    backgroundColor?: string;
    width?: string;
  };
  timeGridLeftAdditionalTimezone?: { backgroundColor?: string };
  timeGridHalfHour?: { borderBottom?: string };
  nowIndicatorLabel?: { color?: string };
  nowIndicatorPast?: { border?: string };
  nowIndicatorBullet?: { backgroundColor?: string };
  nowIndicatorToday?: { border?: string };
  nowIndicatorFuture?: { border?: string };
  pastTime?: { color?: string };
  futureTime?: { color?: string };
  weekend?: { backgroundColor?: string };
  today?: { color?: string; backgroundColor?: string };
  pastDay?: { color?: string };
  panelResizer?: { border?: string };
  gridSelection?: { color?: string };
}

interface MonthTheme {
  dayExceptThisMonth?: { color?: string };
  dayName?: {
    borderLeft?: string;
    backgroundColor?: string;
  };
  holidayExceptThisMonth?: { color?: string };
  moreView?: {
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
    width?: number | null;
    height?: number | null;
  };
  moreViewTitle?: {
    backgroundColor?: string;
  };
  weekend?: { backgroundColor?: string };
  gridCell?: {
    headerHeight?: number | null;
    footerHeight?: number | null;
  };
}
