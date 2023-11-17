import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "../form.css";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      <div className="inputFied">
        <h2>Sign Up Now</h2>
        <input
          type="text" name="firstName"
          placeholder="First Name" required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text" name="lastName"
          placeholder="Last Name" required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text" name="email"
          placeholder="Email" required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password" name="password"
          placeholder="Password" required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={addUser}> Create User</button>
      </div>
    </div>
  );
}

export default Form;
