import React from "react";

const Feedback = () => {
  return (
    <div className="overflow-x-auto py-14 px-4 bg-[#F9FAFB]">
      <div className="flex gap-6 md:gap-8 justify-start w-max">

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
            LoanLink made applying for my business loan super easy! Fast and reliable process.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <p className="font-semibold text-gray-900">Sarah J.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐⭐</p>
          <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
            Smooth loan process and helpful customer support. Good experience overall.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <p className="font-semibold text-gray-900">Kiran M.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐</p>
          <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
            Took a little longer for approval but the site is easy to use and team is responsive.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <p className="font-semibold text-gray-900">Anika R.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐</p>
          <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
            The loan approval got delayed, and I had trouble uploading my documents. Needs improvement.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <p className="font-semibold text-gray-900">Tina B.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐</p>
          <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
            Very frustrating experience. Customer support was slow and the process unclear.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <p className="font-semibold text-gray-900">Rahul K.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;
