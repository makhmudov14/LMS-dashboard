"use client"
import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 7000,
    expense: 3000,
    
  },
  {
    name: 'Feb',
    income: 5000,
    expense: 2800,
    
  },
  {
    name: 'March',
    income: 4090,
    expense: 2900,
    
  },
  {
    name: 'Apr',
    income: 4000,
    expense: 2400,
    
  },
  {
    name: 'May',
    income: 4600,
    expense: 1800,
    
  },
  {
    name: 'jun',
    income: 3200,
    expense: 1000,
    
  },
  {
    name: 'Jul',
    income: 3900,
    expense: 1900,
    
  },
  {
    name: 'Aug',
    income: 3800,
    expense: 1500,
    
  },
  {
    name: 'Sep',
    income: 4000,
    expense: 1400,
    
  },
  {
    name: 'Oct',
    income: 4600,
    expense: 2200,
   
  },
  {
    name: 'Nov',
    income: 4800,
    expense: 2000,
    
  },
  {
    name: 'Dec',
    income: 4500,
    expense: 2400,
   
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* title */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" stroke={"#ddd"}/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#8884d8"   radius={[10,10,0,0]} strokeWidth={5}  />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d"  radius={[10,10,0,0]} strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart