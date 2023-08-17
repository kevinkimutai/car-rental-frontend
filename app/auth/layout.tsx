import Image from "next/image";
import "../globals.css";

import imageBlob from "../../public/blob (1).svg";
import imageBg from "../../public/range_cover-removebg-preview.png";

export const metadata = {
  title: "Register",
  description: "Sign Up to Platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className="">
        <>
          <section className="px-4 sm:px-8 md:px-32 py-8 flex justify-center items-center h-screen">
            <div className="flex justify-center items-center  p-4 w-4/5">
              <div className="w-1/2 h-full p-6 z-10 absolute sm:relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-0 sm:left-0 sm:transform sm:-translate-x-0 sm:-translate-y-0 flex justify-center items-center">
                <Image
                  src={imageBlob}
                  width={400}
                  height={400}
                  className="absolute sm:-top-20 sm:-right-20 w-full object-contain "
                  alt="blob"
                />

                <Image
                  src={imageBg}
                  width={250}
                  height={250}
                  className="relative w-full object-contain z-50"
                  alt="cover"
                />
              </div>
              <div className="w-full sm:w-1/2 border border-slate-500 shadow-sm p-6 z-20 bg-white opacity-95 sm:opacity-100 relative">
                <div className="flex flex-col justify-center items-center mb-8">
                  <h2 className="font-bold text-lg mb-1">Vehire</h2>
                  {/* <p className="text-center">Welcome to Vehire.</p> */}
                  <p className="text-center text-sm text-slate-500">
                    Signup to get Best deals on all vehicles
                  </p>
                </div>

                {children}
              </div>
            </div>
          </section>
        </>
      </body>
    </html>
  );
}
