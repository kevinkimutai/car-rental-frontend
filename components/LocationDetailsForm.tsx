import React from "react";

const LocationDetailsForm = () => {
  return (
    <div>
      <h2 className="text-lg text-slate-600">3. Location Details</h2>
      <form className="py-4 px-8">
        <textarea
          className="border border-blue-600 rounded-md w-full p-2"
          placeholder="Location Description"
          rows={5}
        />
        <div className="flex justify-end">
          <button className="w-1/4 justify-self-end bg-blue-600 text-white p-2 rounded-md">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationDetailsForm;
