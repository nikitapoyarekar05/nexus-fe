import Link from "next/link";
import { Icon } from "@iconify/react";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: "mdi:facebook",
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: "mdi:instagram",
    label: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: "mdi:linkedin",
    label: "LinkedIn",
  },
];

const CopyRightBanner = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between py-4 bg-white border-t text-center md:text-left gap-4 md:gap-0">
      <div className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Neighbourly. All rights reserved. UI
        inspired by a design from{" "}
        <a
          href="https://www.figma.com/design/4XB2IJ2P5mjzHsujnBl0hl/-FREE--Estatery---Real-Estate-SaaS-Web-and-Mobile-UI-Kit--Community-?node-id=0-1&p=f&t=lCExpjbD2X2i7Rnn-0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Figma Community
        </a>
        .
      </div>
      <div className="flex items-center justify-center gap-3">
        {socialLinks.map(({ href, icon, label }) => (
          <Link href={href} key={label} passHref>
            <Icon
              icon={icon}
              className="w-6 h-6 text-primary"
              aria-label={label}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default CopyRightBanner;
