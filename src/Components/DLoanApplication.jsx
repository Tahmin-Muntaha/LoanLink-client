import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
const DLoanApplication = () => {
  useEffect(() => {
    document.title = "LoanLink - Apply Loans";
  }, []);
  const [apps, setApps] = useState([]);
  const { data: applications, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios(`https://loanlink-inky.vercel.app/applications`);
      setApps(res.data);
      return res.data;
    },
  });

  const handlefilters = async (status) => {
    try {
      if (status === "all") {
        const res = await axios(
          `https://loanlink-inky.vercel.app/applications`
        );
        setApps(res.data);
      } else {
        const res = await axios(
          `https://loanlink-inky.vercel.app/application/${status}`
        );
        setApps(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDetails = async (id) => {
    try {
      const res = await axios(
        `https://loanlink-inky.vercel.app/applications/${id}`
      );
      const appData = res.data;

      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const isDark = currentTheme === 'dark';

      Swal.fire({
        title: `<span style="color:#1F7A6F;">Loan Application Details</span>`,
        html: `
        <div style="text-align:left; padding:10px; line-height:1.6; color: ${isDark ? '#e5e7eb' : '#374151'};">
          <p><strong style="color:#1F7A6F;">Loan ID:</strong> ${appData._id}</p>
          <p><strong style="color:#1F7A6F;">Title:</strong> ${appData.title}</p>
          <p><strong style="color:#1F7A6F;">User Name:</strong> ${appData.fname} ${appData.lname}</p>
          <p><strong style="color:#1F7A6F;">Email:</strong> ${appData.email}</p>
          <p><strong style="color:#1F7A6F;">Contact:</strong> ${appData.contact}</p>
          <p><strong style="color:#1F7A6F;">National ID:</strong> ${appData.national}</p>
          <p><strong style="color:#1F7A6F;">Address:</strong> ${appData.address}</p>
          <p><strong style="color:#1F7A6F;">Category:</strong> ${appData.category}</p>
          <p><strong style="color:#1F7A6F;">Reason:</strong> ${appData.reason}</p>
          <p><strong style="color:#1F7A6F;">Income:</strong> ${appData.income}</p>
          <p><strong style="color:#1F7A6F;">Amount:</strong> ${appData.amount}</p>
          <p><strong style="color:#1F7A6F;">Monthly:</strong> ${appData.monthly}</p>
          <p><strong style="color:#1F7A6F;">Interest Rate:</strong> ${appData.interestRate}%</p>
          <p><strong style="color:#1F7A6F;">Fee Status:</strong> ${appData.fee}</p>
          <p><strong style="color:#1F7A6F;">Extra Info:</strong> ${appData.extra}</p>
          <p><strong style="color:#1F7A6F;">Status:</strong> ${appData.status}</p>
        </div>
      `,
        icon: "info",
        iconColor: "#1F7A6F",
        background: isDark ? "#1f2937" : "#f0fdfa",
        color: isDark ? "#e5e7eb" : "#374151",
        showCloseButton: true,
        confirmButtonText: "Close",
        confirmButtonColor: "#1F7A6F",
        customClass: {
          popup: `shadow-lg rounded-xl border ${isDark ? 'border-gray-600' : 'border-gray-300'}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading)
    return (
      <div className="min-h-screen bg-base-200 transition-colors duration-500 flex justify-center items-center">
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500">
      <div className="dropdown dropdown-end flex justify-end mr-4 sm:mr-6 pt-4">
        <div tabIndex={0} role="button" className="btn btn-outline">
          Filter
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm border border-base-300"
        >
          <li onClick={() => handlefilters("all")}>
            <a className="text-base-content hover:bg-base-200">All</a>
          </li>
          <li onClick={() => handlefilters("pending")}>
            <a className="text-base-content hover:bg-base-200">Pending</a>
          </li>
          <li onClick={() => handlefilters("approved")}>
            <a className="text-base-content hover:bg-base-200">Approved</a>
          </li>
          <li onClick={() => handlefilters("rejected")}>
            <a className="text-base-content hover:bg-base-200">Rejected</a>
          </li>
        </ul>
      </div>
      <div className="p-4 sm:p-6">
        <div className="bg-base-100 shadow-lg rounded-lg border border-base-300">
          <div className="px-4 sm:px-6 py-4 border-b border-base-300">
            <h2 className="text-xl font-semibold text-base-content">
              Loan Applications
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full min-w-[900px]">
              <thead>
                <tr className="bg-base-200">
                  <th className="text-base-content/70 font-medium">
                    LOAN ID
                  </th>
                  <th className="text-base-content/70 font-medium">
                    USER(EMAIL,NAME)
                  </th>
                  <th className="text-base-content/70 font-medium">
                    LOAN CATEGORY
                  </th>
                  <th className="text-base-content/70 font-medium">
                    AMOUNT
                  </th>
                  <th className="text-base-content/70 font-medium">
                    STATUS
                  </th>
                  <th className="text-base-content/70 font-medium">
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody>
                {apps.map((app, index) => (
                  <tr key={app._id} className="hover:bg-base-200/50">
                    <td className="text-sm font-medium text-base-content">
                      {app._id}
                    </td>
                    <td className="text-sm text-base-content/80">
                      {app.fname} {app.lname} <br />
                      {app.email}
                    </td>
                    <td className="text-sm text-base-content/80">
                      {app.category}
                    </td>
                    <td className="text-sm text-base-content/80">
                      {app.amount}
                    </td>
                    <td className="text-sm text-base-content/80">
                      {app.status}
                    </td>
                    <td className="text-sm">
                      <button
                        className="btn btn-sm bg-[#1F7A6F] text-white hover:bg-[#16675E] border-none transition duration-300"
                        onClick={() => {
                          handleDetails(app._id);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DLoanApplication;
