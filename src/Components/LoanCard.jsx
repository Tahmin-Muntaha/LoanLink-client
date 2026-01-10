import { NavLink } from "react-router";

const LoanCard = ({ loan }) => {
  const {
    _id,
    title,
    category,
    interestRate,
    maxLoanLimit,
    image,
    showOnHome,
  } = loan;

  if (!showOnHome) return null;

  return (
    <div className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 md:h-52 w-full object-cover"
        />

        <div className="badge badge-warning absolute top-3 left-3 text-xs font-bold shadow">
          {category}
        </div>
      </div>

      <div className="card-body p-4 space-y-3">
        
        <h3 className="card-title text-lg md:text-xl font-extrabold text-base-content group-hover:text-[#1F7A6F] transition">
          {title}
        </h3>

        <div className="flex justify-between gap-2 text-sm">
          <p className="text-base-content/70">
            Interest Rate
            <span className="block font-bold text-[#1F7A6F]">
              {interestRate}%
            </span>
          </p>

          <p className="text-base-content/70">
            Max Loan
            <span className="block font-bold text-[#1F7A6F]">
              {maxLoanLimit}
            </span>
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <NavLink to={`/details/${_id}`} className="w-full">
            <button className="w-full bg-[#1F7A6F] text-white py-2.5 rounded-xl font-bold tracking-wide hover:bg-[#16675E] transition duration-300">
              View Details
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default LoanCard;