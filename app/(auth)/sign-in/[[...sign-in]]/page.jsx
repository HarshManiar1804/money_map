import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div>
      <SignIn className="mt-10" />
    </div>
  );
};

export default Page;
