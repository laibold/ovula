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

  // fix padding for week day names
  .toastui-calendar-day-names.toastui-calendar-month {
    padding: 0 !important;
  }

  .toastui-calendar-day-name-item {
    padding-left: 5px !important;
    font-weight: bold;
  }
  
  // customize toast ui popup

  // hide buttons
  .toastui-calendar-popup-section.toastui-calendar-section-button {
    display: none;
  }

  // hide date
  .toastui-calendar-section-header > .toastui-calendar-content {
    display: none;
  }

  // hide persons item
  .toastui-calendar-popup-section > .toastui-calendar-detail-item-indent {
    display: none;
  }

  // hide status item
  .toastui-calendar-popup-section > div[class=toastui-calendar-detail-item] {
    display: none;
  }
`;
