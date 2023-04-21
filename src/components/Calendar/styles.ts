import styled from "styled-components";

export const CalendarWrapper = styled.div`
  cursor: default;
`;

export const ConfigWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  margin-bottom: 10px;

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

export const CalendarHeadline = styled.h4`
  margin-bottom: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const DateSelectButton = styled.button`
  width: 3rem;
  //height: 2.2rem;
  padding: 5px;
  line-height: 0;
  margin: 0;
`;
