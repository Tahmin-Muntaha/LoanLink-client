
import { useEffect, useState } from "react";
import LoanCard from "../Components/LoanCard";

const AllLoans = () => {
  
  // useEffect(() => {
  //   document.title = "LoanLink - All Loans";
  // }, []);
  // const {
  //   data: loans = [],
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["loans"],
  //   queryFn: async () => {
  //     const res = await axios("https://loanlink-inky.vercel.app/loans");
  //     return res.data;
  //   },
  // });

const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalLoans,setTotalLoans]=useState(0)
  const [totalpage,setTotalpage]=useState(0)
  const [currentPage,setCurrentPage]=useState(0)
  const limit=10
  
  useEffect(() => {
    fetch(`https://loanlink-inky.vercel.app/pag-loans?limit=${limit}&skip=${currentPage*limit}`)
      .then((res) => res.json())
      .then((data) => {
        setLoans(data.result);
        setTotalLoans(data.total)
        const page=Math.ceil(data.total/limit)
        setTotalpage(page)
        setLoading(false);
      });
  }, [currentPage]);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search?.value;
    setLoading(true);
    fetch(`https://loanlink-inky.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      });
  };
   const aschandleSort = (e) => {
    e.preventDefault();
    fetch("https://loanlink-inky.vercel.app/sort-asc")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  };
  const deschandleSort = (e) => {
    e.preventDefault();
    fetch("https://loanlink-inky.vercel.app/sort-desc")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  };
  if (loading)
    return (
      <div className="min-h-screen bg-base-200 transition-colors duration-500 flex justify-center items-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
          </div>
          <p className="text-base-content/60">Loading all loans...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500">
      {/* Hero Section */}
      <div className=" py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Loans</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Explore flexible loan options designed to match your financial goals
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-base-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex items-center w-full lg:max-w-md bg-base-100 border border-base-300 rounded-2xl shadow-lg overflow-hidden"
            >
              <span className="px-4 text-[#1F7A6F]">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>

              <input
                type="search"
                name="search"
                placeholder="Search by category..."
                className="flex-1 px-2 py-3 bg-transparent outline-none text-sm text-base-content placeholder-base-content/50"
              />

              <button className="px-6 py-3 bg-[#1F7A6F] text-white font-semibold hover:bg-[#16675E] transition duration-300">
                Search
              </button>
            </form>

            {/* Sort Buttons */}
            <div className="flex gap-3">
              <form onSubmit={aschandleSort}>
                <button className="px-4 py-2 rounded-xl border border-[#1F7A6F] text-[#1F7A6F] font-medium hover:bg-[#1F7A6F] hover:text-white transition duration-300 shadow-sm text-sm">
                  Sort by Interest Rate ↑
                </button>
              </form>
              <form onSubmit={deschandleSort}>
                <button className="px-4 py-2 rounded-xl border border-[#1F7A6F] text-[#1F7A6F] font-medium hover:bg-[#1F7A6F] hover:text-white transition duration-300 shadow-sm text-sm">
                  Sort by Interest Rate ⬇️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Loans Grid Section */}
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loans.map((loan) => (
              <LoanCard key={loan._id} loan={loan} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {[...Array(totalpage).keys()].map((i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i)} 
                className={`px-4 py-2 border rounded-xl font-medium transition duration-300 ${
                  i === currentPage 
                    ? "bg-[#1F7A6F] text-white border-[#1F7A6F]" 
                    : "text-[#1F7A6F] border-[#1F7A6F] hover:bg-[#1F7A6F] hover:text-white"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLoans;
