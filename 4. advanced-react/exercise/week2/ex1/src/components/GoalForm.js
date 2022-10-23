import React from "react";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function ChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function SubmitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={ChangeHandler}
        ></input>{" "}
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={ChangeHandler}
        ></input>
        <button>Submit Goal</button>
      </form>
    </>
  );
}

export default GoalForm;
