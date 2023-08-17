"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { BiError } from "react-icons/bi";
import { URL } from "@/constants";
//import { getCookie } from "@/utils/getCookie";
import { useRouter, useSearchParams } from "next/navigation";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams?.get("redirect") || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: FormData) => {
    let url = `${URL}/auth/login`;

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers here if needed
      },
      body: JSON.stringify({ email, password }),
    };

    //@ts-ignore
    const res = await fetch(url, requestOptions);

    if (!res.ok && res.status === 401) {
      toast.error("Wrong email or password.Try again");
      reset();
    }

    if (res.ok && res.status === 200) {
      const { token } = await res.json();

      toast.success("successfully Logged in!");

      localStorage.setItem("jwt", token);
      reset();

      setTimeout(() => {
        router.push(redirect);
      }, 3050);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            //@ts-ignore
            style: {
              background: "",
              color: "#22c55e",
            },
          },

          error: {
            duration: 3000,
            icon: <BiError className={"text-red-600 text-lg"} />,
            //@ts-ignore
            style: {
              background: "#fff",
              color: "#ef4444",
            },
          },
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <input
            {...register("email")}
            className="w-full p-1 rounded-md ring-1 ring-blue-500 mb-2"
            placeholder="Email"
            type="email"
          />
          {errors.email?.message && (
            <p className="text-red-800 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            {...register("password")}
            className="w-full p-1 rounded-md ring-1 ring-blue-500 mb-2"
            placeholder="Password"
            type="password"
          />
          {errors.password?.message && (
            <p className="text-red-800 text-sm">{errors.password?.message}</p>
          )}
        </div>
        <button
          className="w-full bg-blue-600 rounded-md text-white mb-6 p-2"
          type="submit"
        >
          Login
        </button>
        <p className="text-center text-sm text-slate-500">
          Already Have an Account,
          <Link href="/auth/signup">
            <span className="text-blue-600">sign up</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
