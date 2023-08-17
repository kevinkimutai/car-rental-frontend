import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCarStore from "@/store/store";
import jwtDecode from "jwt-decode";

type PageProps = {
  close: any;
  setSecondFormOpen: any;
};

const schema = yup
  .object({
    id_number: yup
      .string()
      .required()
      .matches(/^\d{8}$/, "ID number must be 8 digits"),
    phone_number: yup
      .string()
      .required()
      .min(10, "DL number must be at least 8 characters")
      .max(12, "DL number can be at most 12 characters"),
    dl_number: yup
      .string()
      .required()
      .min(8, "Invalid DL number")
      .max(12, "Invalid DL number"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type LoggedInUsersDetails = {
  fname: string;
  lname: string;
};

const PersonalCheckoutDetailsForm = ({
  close,
  setSecondFormOpen,
}: PageProps) => {
  const updatePersonalDetails = useCarStore(
    (state) => state.updatePersonalDetails
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ phone_number, dl_number, id_number }: FormData) => {
    updatePersonalDetails({ phone_number, dl_number, id_number });
    reset();
    close();
    setSecondFormOpen(true);
  };

  return (
    <div className="mb-6">
      <form className="py-4 px-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center gap-4">
          <input
            className="border border-blue-600 rounded-md w-full mb-6 p-2"
            disabled
            value={"kevin"}
          />

          <input
            className="border border-blue-600 rounded-md w-full mb-6 p-2"
            disabled
            value={"kimutai"}
          />
        </div>
        <div className="mb-6">
          <input
            {...register("phone_number")}
            className="border border-blue-600 rounded-md w-full mb-1 p-2"
            placeholder="Mobile Number"
            type="number"
          />
          {errors.phone_number?.message && (
            <p className="text-red-800 text-sm">
              {errors.phone_number?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <input
            {...register("id_number")}
            className="border border-blue-600 rounded-md w-full mb-1 p-2"
            placeholder="Id Number"
            type="number"
          />
          {errors.id_number?.message && (
            <p className="text-red-800 text-sm">{errors.id_number?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            {...register("dl_number")}
            className="border border-blue-600 rounded-md w-full p-2 mb-1"
            placeholder="Driving Licence Number"
            type="number"
          />
          {errors.dl_number?.message && (
            <p className="text-red-800 text-sm">{errors.dl_number?.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="w-1/4 justify-self-end bg-blue-600 text-white p-1 rounded-md"
            type="submit"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalCheckoutDetailsForm;
