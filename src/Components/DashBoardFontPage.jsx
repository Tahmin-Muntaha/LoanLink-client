import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthContext'
import useRole from '../providers/useRole'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import ManageUser from './ManageUser'

const DashBoardFontPage = () => {
  const { role } = useRole()
  const { user } = useContext(AuthContext)
  const [rolem,setRolem]=useState([])
  const [roleb,setRoleb]=useState([])
  const [loans,setLoans]=useState([])
  const [app,setApp]=useState([])
  const [user2,setUser2]=useState([])
  const [loan2,setLoan2]=useState([])
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [pending, setPending] = useState([]);
  const [paid,setPaid]=useState([])
  const [unpaid,setUnpaid]=useState([])
  const [my,setMy] =useState([])
  useEffect(() => {
    document.title = "LoanLink - Dashboard";
  }, [])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/user-manager")
  .then(res=>res.json())
  .then(data=>setRolem(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/loans")
  .then(res=>res.json())
  .then(data=>setLoans(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/user-b")
  .then(res=>res.json())
  .then(data=>setRoleb(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/applications")
  .then(res=>res.json())
  .then(data=>setApp(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/user-2")
  .then(res=>res.json())
  .then(data=>setUser2(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/loans-2")
  .then(res=>res.json())
  .then(data=>setLoan2(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/approved")
  .then(res=>res.json())
  .then(data=>setApproved(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/rejected")
  .then(res=>res.json())
  .then(data=>setRejected(data))
},[])
useEffect(()=>{
   fetch("https://loanlink-inky.vercel.app/pending")
  .then(res=>res.json())
  .then(data=>setPending(data))
},[])
useEffect(()=>{
   fetch(`https://loanlink-inky.vercel.app/paid/${user.email}`)
  .then(res=>res.json())
  .then(data=>setPaid(data))
},[])
useEffect(()=>{
   fetch(`https://loanlink-inky.vercel.app/unpaid/${user.email}`)
  .then(res=>res.json())
  .then(data=>setUnpaid(data))
},[])
useEffect(()=>{
   fetch(`https://loanlink-inky.vercel.app/userapplicatios-2/${user.email}`)
  .then(res=>res.json())
  .then(data=>setMy(data))
},[])

  const data = [
    { name: 'Manager', uv: rolem.length, color: '#1F7A6F' },
    { name: 'Borrower', uv: roleb.length, color: '#FF6B6B' },
    
  ]
  const dataM = [
    { name: 'Approved', uv: approved.length, color: '#1F7A6F' },
    { name: 'Rejected', uv: rejected.length, color: '#FF6B6B' },
    { name: 'Pending', uv: pending.length, color: '#FFD166' },
    
  ]
  const dataB = [
    { name: 'Paid', uv: paid.length, color: '#1F7A6F' },
    { name: 'Unpaid', uv: unpaid.length, color: '#FF6B6B' },
    
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 transition-colors duration-500">
      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1F7A6F] to-[#16675E] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Welcome back,
              <span className="block text-white/90 mt-2">{user?.displayName || 'User'}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 mb-6">
              You've successfully entered your dashboard
            </p>

            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-white/60 rounded-full"></div>
            </div>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From here, you can manage your activities, review information,
              and continue where you left off using the dashboard menu.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 py-8">
        {role === 'admin' && (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Total Users</p>
                    <p className="text-3xl font-bold text-base-content">{roleb.length + rolem.length}</p>
                  </div>
                  <div className="bg-[#1F7A6F]/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Total Loans</p>
                    <p className="text-3xl font-bold text-base-content">{loans.length}</p>
                  </div>
                  <div className="bg-[#1F7A6F]/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Total Applications</p>
                    <p className="text-3xl font-bold text-base-content">{app.length}</p>
                  </div>
                  <div className="bg-[#1F7A6F]/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300">
              <h3 className="text-2xl font-bold text-base-content mb-6 text-center">User Distribution</h3>
              <div className="flex justify-center">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    dataKey="uv"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                    isAnimationActive={true}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            {/* Latest Users Table */}
            <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300">
              <div className=" p-4">
                <h2 className="text-xl font-semibold text-black flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Latest Users
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-base-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">NAME</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">EMAIL</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user2?.map((user, index) => (
                      <tr key={user._id || user.email} className="hover:bg-base-200/50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-base-content">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1F7A6F] text-white shadow-sm">
                            {user.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Latest Loans Table */}
            <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300">
              <div className=" p-4">
                <h2 className="text-xl font-semibold text-black flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Latest Loans
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead className="bg-base-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">IMAGE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">TITLE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">INTEREST</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">CATEGORY</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">CREATED BY</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">SHOW ON HOME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loan2.map((loan, index) => (
                      <tr key={loan._id || index} className="hover:bg-base-200/50 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <img src={loan.image} alt={loan.title} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-base-content">{loan.title}</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">{loan.interestRate}%</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">{loan.category}</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">{loan.createdBy}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            loan.showOnHome ? 'bg-[#1F7A6F] text-white' : 'bg-base-200 text-base-content/70'
                          }`}>
                            {loan.showOnHome ? "Yes" : "No"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {role === 'manager' && (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Manager Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Approved Loans</p>
                    <p className="text-3xl font-bold text-base-content">{approved.length}</p>
                  </div>
                  <div className="bg-[#1F7A6F]/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Rejected Loans</p>
                    <p className="text-3xl font-bold text-base-content">{rejected.length}</p>
                  </div>
                  <div className="bg-base-content/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-base-content/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Pending Loans</p>
                    <p className="text-3xl font-bold text-base-content">{pending.length}</p>
                  </div>
                  <div className="bg-base-content/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-base-content/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager Chart */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300">
              <h3 className="text-2xl font-bold text-base-content mb-6 text-center">Loan Status Distribution</h3>
              <div className="flex justify-center">
                <PieChart width={400} height={400}>
                  <Pie
                    data={dataM}
                    dataKey="uv"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                    isAnimationActive={true}
                  >
                    {dataM.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            {/* Manager Guidance */}
            <div className="bg-base-100 border border-base-300 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1F7A6F]/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">Manager Guidance</h3>
                <p className="text-base-content/70 text-lg leading-relaxed max-w-3xl mx-auto">
                  Always review applications carefully before taking action. Ensure all 
                  documentation is complete and verify borrower details. Avoid rushing decisions 
                  — accuracy and fairness help maintain trust in the system.
                </p>
                <p className="text-base-content/50 text-sm mt-4">
                  This is a static guidance section for demonstration purposes.
                </p>
              </div>
            </div>
          </div>
        )}

        {role === 'borrower' && (
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Borrower Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Paid Loans</p>
                    <p className="text-3xl font-bold text-base-content">{paid.length}</p>
                  </div>
                  <div className="bg-[#1F7A6F]/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#1F7A6F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-medium">Unpaid Loans</p>
                    <p className="text-3xl font-bold text-base-content">{unpaid.length}</p>
                  </div>
                  <div className="bg-base-content/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-base-content/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Borrower Chart */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300">
              <h3 className="text-2xl font-bold text-base-content mb-6 text-center">Payment Status</h3>
              <div className="flex justify-center">
                <PieChart width={400} height={400}>
                  <Pie
                    data={dataB}
                    dataKey="uv"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                    isAnimationActive={true}
                  >
                    {dataB.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            {/* My Loans Table */}
            <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300">
              <div className=" p-4">
                <h2 className="text-xl font-semibold text-black flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  My Loans
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-base-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">LOAN ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">LOAN INFO</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">AMOUNT</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-base-content/80">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {my.map((loan, index) => (
                      <tr key={loan._id || index} className="hover:bg-base-200/50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-base-content">{loan.loanid}</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">{loan.title}, {loan.category}</td>
                        <td className="px-6 py-4 text-sm text-base-content/70">${loan.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                            loan.status === 'approved' ? 'bg-[#1F7A6F] text-white' :
                            loan.status === 'pending' ? 'bg-base-200 text-base-content/70' :
                            'bg-base-content/10 text-base-content/70'
                          }`}>
                            {loan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashBoardFontPage