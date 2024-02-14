import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref}
            className="input-project"
            rows={4}
            {...props}
          />
        ) : (
          <input className="input-project" ref={ref} {...props} />
        )}
      </p>
    </>
  );
});

export default Input;
