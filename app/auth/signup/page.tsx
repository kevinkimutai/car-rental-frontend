"use client";

import Image from "next/image";
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { URL } from "@/constants";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { BiError } from "react-icons/bi";

const schema = yup
  .object({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("*Required")
      .min(8, "*Password is too short - should be 8 chars minimum.")
      .matches(/^(?=.*[a-z])/, "*Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "*Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(
        /^(?=.*[!@#%&])/,
        "*Must contain at least one special character"
      ),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ fname, lname, email, password }: FormData) => {
    let url = `http://localhost:4500/api/v1/auth/signup`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers here if needed
      },
      body: JSON.stringify({ fname, lname, email, password }),
    };

    const res = await fetch(url, requestOptions);

    if (!res.ok && res.status === 409) {
      toast.error("A user exists with that email");
      reset();
    }
    if (!res.ok && res.status !== 409) {
      toast.error("something went wrong when signing up!");
      reset();
    }
    if (res.ok && res.status === 201) {
      toast.success("successfully signed up!");
      reset();
      setTimeout(() => {
        router.push("/auth/login");
      }, 3050);
    }
  };

  return (
    //TODO:ADD NOTIFICATION COMPONENT
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
            icon: <BiError className={"text-white text-lg"} />,
            //@ts-ignore
            style: {
              background: "#fff",
              color: "#ef4444",
            },
          },
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 mb-6">
          <div>
            <input
              className="w-full p-1 rounded-md border border-blue-500"
              placeholder="First Name"
              type="text"
              {...register("fname")}
            />
            {errors.fname?.message && (
              <p className="text-red-800 text-sm">{errors.fname?.message}</p>
            )}
          </div>
          <div>
            <input
              className="w-full p-1 rounded-md border border-blue-500"
              placeholder="Last Name"
              type="text"
              {...register("lname")}
            />
            {errors.lname?.message && (
              <p className="text-red-800 text-sm">{errors.lname?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <input
            className="w-full p-1 rounded-md border border-blue-500 mb-1"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-800 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            className="w-full p-1 rounded-md border border-blue-500 mb-1"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-800 text-sm">{errors.password?.message}</p>
          )}
        </div>
        <button
          className="w-full bg-blue-600 rounded-md text-white mb-6 p-2"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-slate-500">
          Already Have an Account,
          <Link href="/auth/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
