import React from "react";

type componentProps = { children: React.ReactNode };

const InputContainer = (props: componentProps) => {
  return (
    <div className="py-2 px-4 bg-slate-300 rounded-l-3xl mb-4">
      {props.children}
    </div>
  );
};

export default InputContainer;
