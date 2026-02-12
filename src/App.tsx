import { useState } from "react";
import "./App.css";
import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/reminder";


function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
