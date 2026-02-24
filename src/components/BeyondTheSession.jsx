"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function BeyondTheSession() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Insight Sessions",
      heading: "FOCUSED RESEARCH WHEN YOU NEED CLARITY FAST.",
      description:
        "We design and facilitate culturally intelligent focus groups and workshops that surface honest perspectives and actionable insight.",
      points: [
        "Focus groups & workshops",
        "Recruitment & participant care",
        "Moderation & facilitation",
        "Insight reports & recommendations",
      ],
      image: "/images/girl.png",
    },
    {
      title: "Strategic Brief",
      heading: "TURN INSIGHTS INTO CLEAR DIRECTION.",
      description:
        "We design and facilitate culturally intelligent focus groups and workshops that surface honest perspectives and actionable insight.",
      points: [
        "Market positioning",
        "Competitive mapping",
        "Strategic alignment",
        "Opportunity framing",
      ],
      image: "/images/girl.png",
    },
    {
      title: "Strategic Brief",
      heading: "TURN INSIGHTS INTO CLEAR DIRECTION.",
      description:
        "We design and facilitate culturally intelligent focus groups and workshops that surface honest perspectives and actionable insight.",
      points: [
        "Market positioning",
        "Competitive mapping",
        "Strategic alignment",
        "Opportunity framing",
      ],
      image: "/images/girl.png",
    },
    {
      title: "Strategic Brief",
      heading: "TURN INSIGHTS INTO CLEAR DIRECTION.",
      description:
        "We design and facilitate culturally intelligent focus groups and workshops that surface honest perspectives and actionable insight.",
      points: [
        "Market positioning",
        "Competitive mapping",
        "Strategic alignment",
        "Opportunity framing",
      ],
      image: "/images/girl.png",
    },
  ];
  return (
    <section className="w-full bg-white min-h-dvh flex felx-col items-center justify-center">
      <div className="mx-auto max-w-480 w-full pt-16 relative">
        {/* <div className="px-[4%] pb-20">
          <h4 className="uppercase font-bold font-oswald md:text-[240px] sm:text-[120px] text-[88px] leading-[100%] text-gray-300 w-fit mx-auto">
            Beyond the session
          </h4>

          <div className="absolute bg-primary px-6 py-4 rounded-full rotate-[-3.66deg] font-outfit font-medium text-[19px] z-30">
            A deeper collaboration from brief to delivery.
          </div>
        </div> */}

        <Swiper
          slidesPerView={1.2}
          centeredSlides
          spaceBetween={-10}
          breakpoints={{
            640: { spaceBetween: -10 },
            1024: { spaceBetween: -40 },
          }}
          className="py-20!"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide
                key={index}
                className={`transition-all! duration-500! h-auto! ease-in-out! relative flex! justify-between! rounded-2xl! md:rounded-[22px] xl:rounded-3xl overflow-hidden bg-black slider-bg 
                  ${
                    isActive
                      ? "rotate-[-2.49deg] opacity-100 z-20"
                      : "rotate-[3.5deg] opacity-[0.15] z-0"
                  }`}
              >
                <div className="xl:max-w-[60%] w-full text-white rotate-[-2.49deg] px-5 lg:px-8 lg:py-10 relative  z-10 py-6.5 flex flex-col justify-center">
                  <span className="inline-block text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-medium max-w-max rounded-full border border-white px-4.75 py-0.75 rotate-[-4.273deg]">
                    {slide.title}
                  </span>

                  <h2 className="xl:text-4xl lg:text-[38px] sm:text-2xl text-xl font-bold font-oswald leading-[110%] mt-6">
                    {slide.heading}
                  </h2>

                  <p className="xl:text-xl lg:text-lg md:text-base text-sm leading-[140%] font-outfit xl:mt-6 mt-3 xl:mb-10 mb-6">
                    {slide.description}
                  </p>

                  <ul className="xl:space-y-2 space-y-1.5 text-xs md:text-sm leading-[140%] font-outfit bg-[#ffffff1a] max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] p-2 sm:p-3 xl:p-4 rotate-[2.49deg] rounded-xl sm:rounded-[19px] md:rounded-2xl ">
                    {slide.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="xl:max-w-[30%] lg:max-w-[33%] md:max-w-[40%] max-w-[90%] w-full border-[#FF9800] border-l-10 md:flex justify-between items-center relative z-10 hidden  h-auto ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover w-full h-full "
                  />

                  <h4 className="text-white lg:text-[44px] text-4xl font-bold uppercase [writing-mode:vertical-rl] rotate-180 absolute right-0">
                    {slide.title}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
