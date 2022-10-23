function SingleView() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLocaleLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLocaleLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if (day.toLocaleLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if (day.toLocaleLowerCase() === "thursday") {
    dayMessage = `${day}, start planning for the weekend`;
  } else if (day.toLocaleLowerCase() === "friday") {
    dayMessage = `The weekend is coming`;
  } else {
    dayMessage = "Stay calm and keep having fun";
  }

  return (
    <div>
      <h1>{dayMessage}</h1>
      {morning ? <h1>Have you had breakfast yet</h1> : " "}
    </div>
  );
}

export default SingleView;
