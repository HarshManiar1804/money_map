import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-50 p-4 pb-0">
      <div className="container max-auto px-4 text-center text-gray-600 p-5 flex justify-between items-center">
        <Image src="/logo.jpeg" width={200} height={60} alt="logo" />
        <p>Created By Harsh Maniar 👨🏻‍💻</p>
      </div>
    </div>
  );
};

export default Footer;
