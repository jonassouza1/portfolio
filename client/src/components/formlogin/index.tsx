import React, { useState, useEffect } from "react";
import { Home } from "../home";
import { Form } from "../form";
import { useForm } from "react-hook-form";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [validade, setValidate] = useState("");

  const baseUrl = "https://web-site-backend-orcin.vercel.app";

  const onsubmit = (data: any) => {
    const datas = { ...data };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
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
    <section className="container">
      <h2>Log in with your account</h2>
      <div className="section">
        <form>
          <h2>Login</h2>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Type Your Name"
            id="name"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <span>Name required to log in</span>
          )}
          <br />
          <br />
          <input
            className="input"
            type="password"
            placeholder="Type Your password"
            id="senha"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <span>Password required to log in</span>
          )}
          <br /> <br />
          <button
            className="btn"
            onClick={(e) => {
              handleSubmit(onsubmit)(e);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
