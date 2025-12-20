import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "LoanLink made applying for my business loan super easy! Fast and reliable process.",
      name: "Sarah J.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      stars: "⭐⭐⭐⭐",
      text: "Smooth loan process and helpful customer support. Good experience overall.",
      name: "Kiran M.",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      stars: "⭐⭐⭐",
      text: "Took a little longer for approval but the site is easy to use and team is responsive.",
      name: "Anika R.",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      stars: "⭐⭐",
      text: "The loan approval got delayed, and I had trouble uploading my documents. Needs improvement.",
      name: "Tina B.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      stars: "⭐",
      text: "Very frustrating experience. Customer support was slow and the process unclear.",
      name: "Rahul K.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Extremely happy with the loan application process. Quick approval and clear EMI.",
      name: "Maya L.",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      stars: "⭐⭐⭐⭐",
      text: "Good service and friendly staff. The EMI calculator is very helpful.",
      name: "Arjun P.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      stars: "⭐⭐⭐",
      text: "Average experience. Website is easy, but took longer to process the loan.",
      name: "Lina G.",
      img: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      stars: "⭐⭐",
      text: "Not happy. Support was slow, and I had issues with document verification.",
      name: "Vikram S.",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      stars: "⭐",
      text: "Very poor experience. Difficult to navigate the site and slow response.",
      name: "Nina K.",
      img: "https://randomuser.me/api/portraits/women/37.jpg",
    },
  ];

  return (
    <div className="overflow-x-auto py-14 px-4 bg-[#F9FAFB]">
      <div className="flex gap-6 md:gap-8 justify-start w-max">
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="carousel-item flex-shrink-0 min-w-[16rem] sm:min-w-[20rem] md:min-w-[24rem] p-6 rounded-3xl shadow-2xl bg-gradient-to-b from-[#F9FAFB] to-[#E6F2F1] transform transition duration-500 hover:scale-105 flex flex-col"
          >
            <p className="text-yellow-400 text-xl font-bold mb-3">{fb.stars}</p>
            <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
              {fb.text}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={fb.img}
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
              <p className="font-semibold text-gray-900">{fb.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
