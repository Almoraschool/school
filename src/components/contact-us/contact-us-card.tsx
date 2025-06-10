import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";
import React from "react";
import ContactUsForm from "./contact-us-form";
import Link from "next/link";

const ContactUsCard = () => {
  return (
    <section className="container p-5 lg:p-10">
      <div className="rounded-lg lg:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-2 bg-[#3B2565] text-white p-5 lg:p-10 rounded-lg relative">
          <h2 className="text-3xl font-bold text-balance">
            Contact Information
          </h2>
          <p className="my-5">We are here for you. How can i help you ?</p>

          <div className="flex gap-5 my-3">
            <PhoneCall />

            <div>
              <p>05962-358832 </p>
              <p>+91-9389732948</p>
              <p>+91-8273953906</p>
            </div>
          </div>
          <div className="flex gap-5 my-3">
            <Mail size={25} />
            <p className="">beersheba_s@rediffmail.com</p>
          </div>
          <div className="flex gap-5 my-3">
            <MapPin size={35} />
            <p>
              Beersheba Sr. Sec. School Bhawani Datt Parisar, Hira Dungri
              N.T.D., Almora.
            </p>
          </div>

          <div className="flex gap-5 mt-36">
           
            <Link
              href={
                "https://www.instagram.com/beershebaschoolalmora?igsh=MWdwd2d3bGt0ZGs3MQ=="
              }
            >
              <div className="flex justify-center items-center bg-white rounded-full p-3 hover:scale-105 duration-300 ">
                <Instagram color="#3B2565" />
              </div>
            </Link>
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100085427985837&mibextid=ZbWKwL"
              }
            >
              <div className="flex justify-center items-center border border-white rounded-full p-3 hover:scale-105 duration-300 ">
                <Facebook />
              </div>
            </Link>
            <Link
              href={
                "https://youtube.com/@beershebaschoolalmora?si=ZbE2mDktj7t4oJNh"
              }
            >
              <div className="flex justify-center items-center border  rounded-full p-3 hover:scale-105 duration-300 bg-white">
                <Youtube color="#3B2565" />
              </div>
            </Link>
          </div>

          <div className="bg-white/10 rounded-full absolute -bottom-12 -right-12 z-10 w-64 h-64"></div>
          <div className="bg-white/10 rounded-full absolute bottom-28 right-28 z-20 w-32 h-32"></div>
        </div>
        <div className="col-span-3">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsCard;
