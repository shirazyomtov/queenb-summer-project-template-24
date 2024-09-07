import { useState } from "react";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [error, setError] = useState(null);

  // fetch the data of the new user after clicking the "Sign Up" button
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { userName, email, password, profilePicURL };
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setUserName("");
      setEmail("");
      setPassword("");
      setProfilePicURL("");
      setError(null);
      alert("new user created");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Register</h3>

      <label>Username:</label>
      <input
        type="text"
        required
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <br />
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
      <label>Profile Picture URL:</label>
      <input
        type="text"
        onChange={(e) => setProfilePicURL(e.target.value)}
        value={profilePicURL}
      />
      <br />
      <button>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UserForm;
