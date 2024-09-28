import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthContext);

  // fetch the data of the user (email and password) after clicking the "Login" button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <h4>
        Don't have an account?
        <Link to="/register" className={"../styles.appLink"}>
          Register
        </Link>
      </h4>
      <label>Email:</label>
      <input
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      {error && <div className="error">{error}</div>}
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
