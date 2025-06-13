import { poppins } from "@/utils/font";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid gap-5 lg:px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 lg:py-16 border-b">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src="/assets/image/logo.jpg"
            alt="logo"
            width={400}
            height={400}
            className="w-full"
          />
        </Link>
      </div>
      <div className="px-5">
        <p className={`${poppins.className} text-xl font-semibold pb-5`}>
          Links
        </p>
        <ul className="flex flex-col gap-2 font-medium">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/facility"}>
            <li>List of Facilities</li>
          </Link>
          <Link href={"/gallery"}>
            <li>Gallery</li>
          </Link>
          <Link href={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="px-5">
        <p className={`${poppins.className} text-xl font-semibold pb-5`}>
          Quick Links
        </p>
        <ul className="flex flex-col gap-2 font-medium">
          <Link href={"/image-gallery"}>
            <li>Photo Gallery</li>
          </Link>
          <Link href={"/news-event"}>
            <li> News Event </li>
          </Link>
          <Link href={"/message"}>
            <li>Messages</li>
          </Link>
          <Link href={"/disclosure"}>
            <li>Disclosure</li>
          </Link>
          <Link href={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="px-5">
        <p className={`${poppins.className} text-xl font-semibold pb-5`}>
          Contact Us
        </p>
        <ul className="flex flex-col gap-2 font-medium">
          <li className="flex gap-5">
            <Image
              src={"/assets/image/locaation.svg"}
              alt="location"
              width={40}
              height={40}
            />
            <p>
              Beersheba Sr. Sec. School Bhawani Datt Parisar, Hira Dungri
              N.T.D., Almora.
            </p>
          </li>
          <li className="flex gap-5">
            <Image
              src={"/assets/image/dark-call.svg"}
              alt="location"
              width={40}
              height={40}
            />
            <p>05962-358832, +91-9389732948, +91-8273953906</p>
          </li>
          <li className="flex gap-5">
            <Image
              src={"/assets/image/dark-email.svg"}
              alt="location"
              width={30}
              height={30}
            />
            <p> beersheba_s@rediffmail.com</p>
          </li>
          <li>
            <ul className="flex gap-2 items-center">
              <Link
                href={
                  "https://www.instagram.com/beershebaschoolalmora?igsh=MWdwd2d3bGt0ZGs3MQ=="
                }
              >
                <li>
                  <Instagram />
                </li>
              </Link>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=100085427985837&mibextid=ZbWKwL"
                }
              >
                <li>
                  <Facebook />
                </li>
              </Link>
              <Link
                href={
                  "https://youtube.com/@beershebaschoolalmora?si=ZbE2mDktj7t4oJNh"
                }
              >
                <li>
                  <Youtube />
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
