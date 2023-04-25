import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-size: 1rem;
  }
  
  body {
    padding: 10px 10px 50px;
    font-family: Open-Sans, Helvetica, sans-serif;
  }
  
  h1 {
    font-size: 2.5rem;
  }

  .toastui-calendar-day-names.toastui-calendar-month {
    padding: 0 !important;
  }

  .toastui-calendar-day-name-item {
    padding-left: 5px !important;
    font-weight: bold;
  }
`;
