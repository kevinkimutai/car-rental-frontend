import React from "react";
import Img from "../../../public/5757194.jpg";

import Image from "next/image";

const Page = () => {
  return (
    <section className="px-4 sm:px-8 md:px-32 py-8">
      <Image
        src={Img}
        alt={"more feautures coming"}
        className="w-full object-contain"
      />
      <p>successfully hired,more features coming soon</p>
    </section>
  );
};

export default Page;
