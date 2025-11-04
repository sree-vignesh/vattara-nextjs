"use client";

import Image from "next/image";
import SearchBox from "./SearchBox";
// import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg" // we'll replace this later
          alt="Real Estate Background"
          fill
          className="object-cover brightness-60"
        />
      </div>

      {/* Content */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white max-w-3xl px-4"
      > */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
        Find Properties & Local Services <br /> In One Place
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-200">
        Search for homes,commercial spaces or nearby services <br />
        all in one comprehensive platform.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary hover:text-white transition">
          {" "}
          Post Your Property
        </button>
        <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary hover:text-white transition">
          {" "}
          List Your Service
        </button>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <SearchBox />
      </div>
      {/* </motion.div> */}
      <hr />
    </section>
  );
}
