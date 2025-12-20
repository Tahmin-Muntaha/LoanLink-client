import React from 'react';
import Banner from '../Components/Banner';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoanCard from '../Components/LoanCard';
import Work from '../Components/Work';
import Feedback from '../Components/Feedback';


const Home = () => {
    const {data:loans=[],error,isLoading}=useQuery({
        queryKey:['l'],
        queryFn:async()=>{
            const res =await axios('http://localhost:3000/newLoans')
            return res.data

        }
    })
    if(isLoading) return <p>loading...</p>
    console.log(loans)
    return (
        <div>
            <Banner></Banner>
            <div className='text-2xl md:text-4xl font-bold text-[#1F2937] mt-10 flex justify-center items-center'>Available Loans</div>
            {
                <div className="grid grid-cols-2  md:grid-cols-3 gap-4 mt-8">
          {loans.map(loan => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>

            }
            <Work></Work>
            <div className='text-2xl md:text-4xl font-bold text-[#1F2937] mt-10 flex justify-center items-center'>Feedback</div>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;