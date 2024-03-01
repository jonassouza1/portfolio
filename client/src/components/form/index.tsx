import React, { useEffect, useState } from "react";
import "./styled.css";
import { FormLogin } from "../formlogin";

type Name = {
  name?: string;
  password?: string;
};

export const Form = () => {
  const [state, setstate] = useState<Name>({
    name: "",
    password: "",
  });
  const [validate, setValidate] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseUrl = "https://web-site-backend-orcin.vercel.app";

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data: any = { ...state };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchdata = async () => {
      const body = requestOptions;
      const registered = await fetch(`${baseUrl}/user`, body);
      const result = await registered.json();
      setValidate(result.message);
      if (
        result.message === "It is necessary to fill in the field" ||
        result.message === "our password must be at least 8 letters long..." ||
        result.message === "Your name must have at least 8 letters..."
      ) {
      } else if (
        result.message === "you registered successfully " ||
        "duplicate name, it s not possible to register"
      ) {
        sessionStorage.setItem("Create", result.message);
        setIsLoggedIn(true);
      }
    };
    fetchdata();
  };
  useEffect(() => {
    const token = sessionStorage.getItem("Create");

    if (token) {
      setIsLoggedIn(true);
    }
  }, [validate]);
  if (isLoggedIn) {
    return <FormLogin />;
  }

  return (
    <section className="container">
      <div className="section">
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            minLength={8}
            required={true}
            type="text"
            id="name"
            placeholder="enter the name"
            onChange={(e) => setstate({ ...state, name: e.target.value })}
            value={state.name}
          />
          {validate === "you registered successfully " ? (
            <span className="greenn">{validate}</span>
          ) : (
            <span>{validate}</span>
          )}
          <br />
          <label htmlFor="senha">Password</label>
          <br />
          <input
            className="input"
            minLength={8}
            required={true}
            type="password"
            id="senha"
            placeholder="enter the password"
            onChange={(e) => setstate({ ...state, password: e.target.value })}
            value={state.password}
          />
          <br /> <br />
          <button
            className="btn"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
