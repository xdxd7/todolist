import { useState } from "react";

import { Text } from "./components";

import WeekView from "./components/WeekView";
import DayView from "./components/DayView";
import { TasksList } from "./components/TasksList";

function App() {
  const [days, setDays] = useState([
    { day: "monday", date: "2023-10-02", tasks: [] },
    { day: "tuesday", date: "2023-10-03", tasks: [] },
    { day: "wednesday", date: "2023-10-04", tasks: [] },
    { day: "thursday", date: "2023-10-05", tasks: [] },
    { day: "friday", date: "2023-10-06", tasks: [] },
    { day: "saturday", date: "2023-10-07", tasks: [] },
    { day: "sunday", date: "2023-10-08", tasks: [] },
  ]);

  const [selectedDay, setSelectedDay] = useState(null);
  //selectedDay - przechowuje wybrany dzień. Początkowo jest null, co oznacza, że domyślnie wyświetlany jest widok tygodnia.

  return (
    <>
      <div>
        {selectedDay ? (
          <DayView day={selectedDay} onBack={() => setSelectedDay(null)} />
        ) : (
          <WeekView days={days} onDaySelect={setSelectedDay} />
        )}
      </div>
      {/* {days.map((day) => (
        <Week  day={day.}/>
      ))} */}

      {/* <Text /> */}
    </>
  );
}

export default App;
