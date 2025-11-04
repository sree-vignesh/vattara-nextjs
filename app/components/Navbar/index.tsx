"use client"; // allows using interactivity (optional if no JS logic)

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 text-black p-4 flex justify-around items-center">
      <h1 className="text-xl font-bold text-primary">Vattara</h1>

      <div className="flex space-x-6">
        <Link href="/properties">Properties</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/About">About</Link>
      </div>

      <div className="flex space-x-3">
        <button className="bg-transparent text-primary px-4 py-2 rounded font-semibold">
          Login
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
