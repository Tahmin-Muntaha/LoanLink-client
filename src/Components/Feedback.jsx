const Feedback = () => {
  return (
    <div className="overflow-x-auto py-14 px-4 bg-base-200 transition-colors duration-500">
      <div className="flex gap-6 md:gap-8 justify-start w-max">

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-base-100 to-base-200 transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐⭐⭐</p>
          <p className="text-base-content/80 text-sm md:text-base mb-5 leading-relaxed">
            LoanLink made applying for my business loan super easy! Fast and reliable process.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-base-100 shadow-md"
              alt="Sarah J."
            />
            <p className="font-semibold text-base-content">Sarah J.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-base-100 to-base-200 transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐⭐</p>
          <p className="text-base-content/80 text-sm md:text-base mb-5 leading-relaxed">
            Smooth loan process and helpful customer support. Good experience overall.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-base-100 shadow-md"
              alt="Kiran M."
            />
            <p className="font-semibold text-base-content">Kiran M.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-base-100 to-base-200 transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐</p>
          <p className="text-base-content/80 text-sm md:text-base mb-5 leading-relaxed">
            Took a little longer for approval but the site is easy to use and team is responsive.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-base-100 shadow-md"
              alt="Anika R."
            />
            <p className="font-semibold text-base-content">Anika R.</p>
          </div>
        </div>

        <div className="min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-base-100 to-base-200 transform transition duration-500 hover:scale-105 flex flex-col">
          <p className="text-yellow-400 text-xl font-bold mb-3">⭐⭐⭐⭐⭐</p>
          <p className="text-base-content/80 text-sm md:text-base mb-5 leading-relaxed">
            Excellent service! Got my loan approved quickly and the terms were transparent.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEO7bKosVOMRBmgh-eOpq9d52aljFH108Ng&s"
              className="w-12 h-12 rounded-full border-2 border-base-100 shadow-md"
              alt="Raj P."
            />
            <p className="font-semibold text-base-content">Raj P.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;