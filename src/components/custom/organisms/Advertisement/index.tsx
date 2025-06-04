import { Icon } from "@iconify/react";

import FeatureBox from "../../atoms/FeatureBox";
import StatBox from "../../atoms/StatBox";
import Divider from "../../atoms/Divider";

const Advertisement = () => {
  return (
    <section className="bg-[#0D0B3C] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            We make it easy for <span className="text-[#9B8CFC]">tenants</span>{" "}
            and <span className="text-[#9B8CFC]">landlords.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-[#A0A3BD]">
            Whether it’s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? You’ll
            save a bunch of money and time with our services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <FeatureBox
            icon={
              <Icon
                icon="mdi:library-video"
                className="text-primary w-24 h-24"
              />
            }
            title="Virtual home tour"
            description="You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property."
            customClass="bg-[#3C3275]"
          />
          <FeatureBox
            icon={
              <Icon
                icon="mdi:home-search-outline"
                className="text-[#3C3275] w-24 h-24"
              />
            }
            title="Find the best deal"
            description="Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"
            customClass="bg-white text-black"
          />
          <FeatureBox
            icon={
              <Icon
                icon="mdi:file-document-box-multiple-outline"
                className="text-white w-24 h-24"
              />
            }
            title="Get ready to apply"
            description="Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!"
            customClass="bg-[#7B6EF6]"
          />
        </div>

        <div className="mt-14 border-t border-[#312C68] pt-10 flex flex-col md:flex-row justify-between items-center text-center gap-8">
          <StatBox number="7.4%" label="Property Return Rate" />
          <Divider />
          <StatBox number="3,856" label="Property in Sell & Rent" />
          <Divider />
          <StatBox number="2,540" label="Daily Completed Transactions" />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
