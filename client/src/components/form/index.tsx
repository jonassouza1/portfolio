import React, { useEffect, useState } from "react";
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
        result.message === "the name  is obrigatory" ||
        result.message === "our password must be at least 8 letters long..." ||
        result.message === "Your name must have at least 8 letters..."
      ) {
        console.log(result.message);
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
    <>
      <form>
        <label htmlFor="name">enter the name</label>
        <br />
        <input
          minLength={8}
          required={true}
          type="text"
          id="name"
          placeholder="enter the name"
          onChange={(e) => setstate({ ...state, name: e.target.value })}
          value={state.name}
        />
        <br />
        <br />
        <label htmlFor="senha">enter the password</label>
        <br />
        <input
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
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          Register
        </button>
      </form>
    </>
  );
};
