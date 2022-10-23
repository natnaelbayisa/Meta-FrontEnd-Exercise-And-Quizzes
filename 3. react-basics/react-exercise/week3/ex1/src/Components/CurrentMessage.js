const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// or

// const Weekend = ["Saturday", "Sunday"];

function CurrentMessage() {
  const day = new Date();
  let noOFTheDay = day.getDay();
  let dayName = weekday[day.getDay()];

  function Weekend() {
    if (dayName === "Saturday" || dayName === "Sunday") {
      return (
        <h1>
          Today is {dayName}, {noOFTheDay}th day of the week Stay calm and keep
          having fun.
        </h1>
      );
    }
  }

  function WorkingDay() {
    if (!Weekend()) {
      return (
        <h1>
          {dayName} is {noOFTheDay} day ot the week and it is a working day.
        </h1>
      );
    }
  }

  return (
    <div>
      <WorkingDay />
      <Weekend />
    </div>
  );
}

export default CurrentMessage;

// function CurrentMessage({ day }) {
//   const weekday = day >= 1 && day <= 5;
//   const weekend = day >= 6 && day <= 7;
//   let message;

//   if (weekday) {
//     message = <Workdays />;
//   } else if (weekend) {
//     message = <Weekends />;
//   } else {
//     message = <ErrorComponent />;
//   }

//   return <div>{message} </div>;
// }
