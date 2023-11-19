"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import "swiper/css";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carslider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carslider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carslider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carslider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carslider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carslider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carslider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carslider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carslider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carslider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carslider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carslider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carslider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carslider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carslider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carslider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carslider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carslider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carslider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carslider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 62 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  alt="car image"
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </h3>
                  </div>
                  <div className="flex gap-x-2 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
