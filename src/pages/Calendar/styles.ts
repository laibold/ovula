import styled from "styled-components";
import TUICalendar from "@toast-ui/react-calendar";
import { NavLink } from "react-router-dom";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  gap: 15px;

  /* copied from calendar */
  @media (min-width: 576px) {
    max-width: 510px;
  }
  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 992px) {
    max-width: 920px;
  }
  @media (min-width: 1200px) {
    max-width: 1130px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TUICalendarStyled = styled(TUICalendar)`
  cursor: default;
`;
