"use client";

import Image from "next/image";
import { type } from "os";
import React, { useState } from "react";

type componentProps = {
  model: string;
  setModel: (model: string) => void;
};

const ModelInput = (props: componentProps) => {
  return (
    <div className="flex items-center justify-start relative w-full">
      <Image src="/model-icon.png" width={20} height={20} alt="" />
      <input
        className="ml-2 rounded-md bg-transparent focus:bg-slate-100 focus:ring-blue-300 px-2 py-1"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.setModel(e.target.value);
        }}
        value={props.model}
      />
    </div>
  );
};

export default ModelInput;
