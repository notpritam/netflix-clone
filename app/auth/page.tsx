"use client";
import InputField from "@/components/inputfield";
import React, { useCallback } from "react";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("Login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "Login" ? "Register" : "Login"
    );
  }, []);
  return (
    <div className=" h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpg')]">
      <div className="w-full h-full bg-black lg:bg-opacity-40">
        <nav className="px-12 py-12">
          <img src="/images/logo.png" className="h-12"></img>
        </nav>

        <div className="flex justify-center">
          <div
            className="bg-black bg-opacity-70 px-16 py-16 self-center
             mt-2 lg:w-2/5 lg:max-w-md  "
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "Login" ? "Sign in" : "Register"}
            </h2>

            <div className=" flex flex-col gap-4">
              {variant === "Register" && (
                <InputField
                  id="username"
                  label="Username"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  value={username}
                  type="username"
                />
              )}
              <InputField
                id="email"
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={email}
                type="name"
              />
              <InputField
                id="password"
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                value={password}
                type="password"
              />
            </div>

            <button
              className="
            bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "Login" ? "Login" : "Sign up"}
            </button>

            <p className="text-neutral-500 mt-12">
              {variant === "Login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml cursor-pointer ml-1 hover:underline"
              >
                {variant === "Login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
