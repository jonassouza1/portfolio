import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styled.css";
import { FormLogin } from "../formlogin";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [validate, setValidate] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseUrl = "https://web-site-backend-orcin.vercel.app";

  const onSubmit = (data: any) => {
    const datas: any = { ...data };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
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
      <div className="main">
        <h2 className="title">Create an account to see my portfolio</h2>
        <div className="section">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              placeholder="enter the name"
              {...register("name", { required: true, minLength: 5 })}
            />
            {errors?.name?.type === "required" && <span>Name is required</span>}
            {errors?.name?.type === "minLength" && (
              <span>Name must have at least 5 characters.</span>
            )}
            <br />
            <label htmlFor="senha">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="senha"
              placeholder="enter the password"
              {...register("password", { required: true, minLength: 9 })}
            />
            {errors?.password?.type === "required" && (
              <span>Password is required</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span>Password must have at least 9 characters.</span>
            )}
            <br /> <br />
            <button
              className="btn"
              onClick={(e) => {
                handleSubmit(onSubmit)(e);
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
