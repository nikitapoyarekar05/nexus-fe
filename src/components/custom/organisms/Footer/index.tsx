import Link from "next/link";

import { Icon } from "@iconify/react";

import CopyRightBanner from "../../molecules/CopyRightBanner";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/issue", label: "Submit a Ticket" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-12 pt-10 border-t">
      <div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 pb-8">
          <div className="flex items-start space-x-2">
            <div className="p-2 rounded-md">
              <Icon
                icon="material-symbols:in-home-mode-outline-rounded"
                className="text-primary text-xl w-12 h-12"
              />
            </div>
            <span className="text-2xl font-semibold text-primary mt-4">
              Neighbourly
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-2 uppercase text-black">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <CopyRightBanner />
      </div>
    </footer>
  );
}
