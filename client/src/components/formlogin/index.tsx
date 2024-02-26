import React, { useState, useEffect } from "react";
import { Home } from "../home";
import { Form } from "../form";

export const FormLogin = () => {
  const [state, setstate] = useState({
    name: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [validade, setValidate] = useState("");

  const baseUrl = "https://web-site-backend-orcin.vercel.app";
  const onsubmit = (e: any) => {
    e.preventDefault();
    const data = { ...state };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const fetchdata = async () => {
        const body = requestOptions;
        const login = await fetch(`${baseUrl}/userlogin`, body);
        const getUser = await login.json();
        setValidate(getUser.message);
        if (getUser.message === "Login Successfully ") {
          sessionStorage.setItem("Token", getUser.message);
          setIsLoggedIn(true);
        }
      };
      fetchdata();
    } catch (error) {
      return console.error("Erro ao realizar o login", error);
    }
  };
  useEffect(() => {
    //Verificar se há um token no localStorage quando o componente é montado
    const token = sessionStorage.getItem("Token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, [validade]);

  if (validade === "user not registred") {
    return <Form />;
  } else if (isLoggedIn) {
    return <Home />;
  }
  return (
    <>
      <form>
        <label htmlFor="name">What Is Your Name</label>
        <br />
        <input
          required={true}
          type="text"
          placeholder="Type Your Name"
          id="name"
          onChange={(e) => {
            setstate({ ...state, name: e.target.value });
          }}
          value={state.name}
        />
        <br />
        <br />
        <label htmlFor="senha">What Is Your password</label>
        <br />
        <input
          required={true}
          type="password"
          placeholder="Type Your password"
          id="senha"
          onChange={(e) => {
            setstate({ ...state, password: e.target.value });
          }}
          value={state.password}
        />
        <br /> <br />
        <button
          onClick={(e) => {
            onsubmit(e);
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};
