import React from "react";

const Video = () => {
  return (
    <>
      <section className="relative min-h-[30rem] w-full mb-5 flex justify-center items-center">
        <video
          src={
            "https://www.imagin.studio/lifestyle/images/skoda/bridge_skoda.mp4"
          }
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 bottom-0 right-0 left-0 z-10"
        />
        <div className="z-20 px-4 sm:px-8 md:px-32 py-2">
          <h2 className="mb-3 font-bold text-white text-3xl sm:text-5xl text-center">
            Experience the Power of Electric Vehicles (EVs)
          </h2>
          <p className="font-bold text-xl text-white text-center">
            Join the sustainable revolution and step into the world of Electric
            Vehicles (EVs)!
          </p>
        </div>
      </section>
    </>
  );
};

export default Video;
