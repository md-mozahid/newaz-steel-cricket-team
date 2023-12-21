import Clock from "./Clock";

const Count = () => {
  let deadLine = "December , 22, 2023";
  return (
    <>
      <Clock deadLine={deadLine} />
    </>
  );
};

export default Count;
