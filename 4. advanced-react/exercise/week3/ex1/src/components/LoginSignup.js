const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in");
      }}
    >
      {children}
    </Button>
  );
};

export default function LoginSignup() {
  return (
    <div>
      <header className="Header">My restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      {/* signing up in login button, is replaced by it's component and changed to logging in coz os spread operator (...)*/}
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}
