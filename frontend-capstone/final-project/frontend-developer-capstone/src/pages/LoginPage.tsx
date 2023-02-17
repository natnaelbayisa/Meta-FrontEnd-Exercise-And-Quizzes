import { createStyles } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = createStyles((theme) => ({
  authFormContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "80vh",
  },

  authForm: {
    width: "420px",
    boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px",
    paddingTop: "30px",
    paddingBottom: "20px",
    borderRadius: "8px",
    backgroundColor: "white",
  },

  authFormContent: {
    paddingLeft: "12%",
    paddingRight: "12%",
  },

  formAuthTitle: {
    textAlign: "center",
    marginBottom: "1em",
    fontSize: "24px",
    color: "rgb(34, 34, 34)",
    fontWeight: 8000,
  },

  label: {
    fontSize: "20px",
    fontWeight: 8000,
  },
}));

const LoginPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.authFormContainer}>
      <form className={classes.authForm}>
        <div className={classes.authFormContent}>
          <h3 className={classes.formAuthTitle}>LogIn</h3>
          <div className="form-group mt-3">
            <label className={classes.label}>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label className={classes.label}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
