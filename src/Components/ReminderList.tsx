import React from "react";
import Reminder from "../Models/reminder";

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
  <ul>
    {items.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
  );
}

export default ReminderList;
