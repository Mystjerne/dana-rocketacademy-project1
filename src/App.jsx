import { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ScheduleEvent from "./ScheduleEvent";
import WelcomeScreen from "./WelcomeScreen";

function App() {
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUserName] = useState("");

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const storedUsername = localStorage.getItem("username");

  return (
    <div>
      <h1>{storedUsername}'s Schedule</h1>
      <WelcomeScreen
        username={username}
        setUserName={setUserName}
        usernameInput={usernameInput}
        setUsernameInput={setUsernameInput}
      />
      <p className="helpful-tip">
        Next, click on a timeslot to edit your availability:
      </p>
      <ScheduleTable className="schedule-table-div" />
    </div>
  );
}

export default App;
