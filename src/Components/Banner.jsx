import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router';

const Banner = () => {
  return (
    <div className="z-10 mb-20">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {/* Slide 1 */}
        <div className="relative h-[380px] rounded-3xl overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_vector-1727828194579-8f1b7188ca78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9hbiUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

          <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-xl">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Smart loans made simple.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-200">
              Explore verified personal, education, and business loans with transparent
              terms and easy comparison — all in one place.
            </p>

            <NavLink
              to="/all"
              className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
            >
              Explore All Loans
            </NavLink>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[360px] rounded-3xl overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_vector-1728495400363-94f211f8babf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9hbiUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-2xl">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Loans you can trust.
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-200">
              LoanLink connects you with reliable lenders and clear information,
              helping you make confident financial decisions without confusion.
            </p>

            <NavLink
              to="/aboutus"
              className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
            >
              About LoanLink
            </NavLink>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[360px] rounded-3xl overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_vector-1728539157067-6a1a6c8c1ed1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-2xl">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Need help choosing a loan?
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-200">
              Our support team is ready to guide you through loan options,
              eligibility, and application steps — whenever you need.
            </p>

            <NavLink
              to="/contact"
              className="mt-6 w-fit px-6 py-2 rounded-xl border border-white text-white hover:bg-[#4FA3A5] hover:text-white transition"
            >
              Contact Support
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
