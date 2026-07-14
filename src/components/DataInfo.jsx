function DateInfo() {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <h2>{day}</h2>
      <p>{date}</p>
    </>
  );
}

export default DateInfo;