import "./App.css";
import ClockHeading from "./Componenets/ClockHeading";
import ClockSlogan from "./Componenets/ClockSlogan";
import CurrentTime from "./Componenets/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";<q></q>
function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
