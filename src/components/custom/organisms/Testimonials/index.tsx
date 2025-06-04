"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { mockTestimonials } from "./mock";
import { getAvatarWithInitials } from "../../../../global/utilities/helpers";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = mockTestimonials[activeIndex];

  return (
    <section className="bg-[#F7F7FB] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
          Testimonials
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2">
          See what our property managers, landlords, and tenants have to say
        </p>

        <blockquote className="mt-8 text-[#1A1A1A] text-base md:text-lg leading-relaxed">
          “{active.quote}”
        </blockquote>

        <p className="mt-6 font-semibold text-[#1A1A1A]">
          {active.name}
          <span className="font-normal text-gray-500">, {active.role}</span>
        </p>

        <div className="flex justify-center items-center gap-4 mt-8">
          {mockTestimonials.map((testimonial, index) => {
            const initials = getAvatarWithInitials(testimonial.name);
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full p-1 transition-all duration-200 
                  ${isActive ? "ring-2 ring-primary" : "ring-2 ring-gray-300"}`}
              >
                <Avatar className="w-12 h-12 bg-muted text-[#1A1A1A]">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-white font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
