import styles from "./index.module.css";

export const Week = (props) => {
  console.log(props);
  return <div className={styles["week"]}>{props.data.day}</div>;
};

function WeekView({ days, onDaySelect }) {
  return (
    <div>
      {days.map((day) => (
        <div
          key={day.date}
          onClick={() => onDaySelect(day)}
          className={styles["week-day"]}
        >
          <h3>{day.day}</h3>
          <p>{day.date}</p>
        </div>
      ))}
    </div>
  );
}
export default WeekView;
