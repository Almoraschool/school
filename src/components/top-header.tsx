import { poppins } from "@/utils/font";
import { Link } from "lucide-react";
import React from "react";

const TopHeader = () => {
  return (
    <div
      className={`${poppins.className} bg-primary flex justify-between items-center flex-col lg:flex-row text-white py-1 px-5 lg:px-10 text-xs lg:text-sm font-medium`}
    >
      <div className="flex gap-2 lg:gap-5 flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <img src="/assets/image/email.svg" alt="email" />
          <p>beersheba_s@rediffmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/assets/image/call.svg" alt="call" />
          <p>05962-358832, +91-9389732948, +91-8273953906</p>
        </div>
      </div>
      <div className="lg:flex gap-5 hidden">
        <p>
          <Link href="/registeration">Online Registration</Link>
        </p>
        <p>|</p>
        <p>Almora</p>
      </div>
    </div>
  );
};

export default TopHeader;
