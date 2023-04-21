import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { Calendar } from "./components/Calendar";
import { GlobalStyle } from "./components/theme/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>ovula</h1>
      <Calendar />
    </>
  );
}

export default App;
