import React from "react";

// import bootstrap to get full functionality

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

export default function ComponentComposition() {
  return (
    <div>
      <header>someone restaurant</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to proceed? you will miss all your delicious
          recipes!
        </p>
        <DeleteButton />
      </Alert>
    </div>
  );
}
