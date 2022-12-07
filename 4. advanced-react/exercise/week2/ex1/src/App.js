import { useState } from "react";
import GoalForm from "./components/GoalForm";
import ListOfGoals from "./components/ListOfGoals";

export default function App(props) {
  const [allGoals, updateAllGoals] = useState([]);

  function AddGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
      <GoalForm onAdd={AddGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
