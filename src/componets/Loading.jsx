import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <FaSpinner className="text-blue-500 text-5xl animate-spin" />
      <p className="text-blue-500 text-5xl">Please wait...</p>
    </div>
  );
}
