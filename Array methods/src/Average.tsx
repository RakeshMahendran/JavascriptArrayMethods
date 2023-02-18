import React, { useState } from 'react'
import dataset from '../public/arraymethods.json'

export interface dataProps {
    batsman: string;
    strikerate:string;
    total_runs:string;
    average:string;
    numberofballs:string;
    out:string;
}

type BattingData = dataProps[];

const Average = () => {
    const [data , setData] = useState<BattingData>(dataset)
    console.log("data",data)

    const [searchPlayer, setSearchPlayer] = useState<string>('')
   
    const handleSearch =  () => {
         const filteredBatsman = data.filter((item:any)=>{
            return item.batsman.toLowerCase().includes(searchPlayer.toLowerCase())
        })
        setData(filteredBatsman)
           setSearchPlayer('')
    }
    


  return (
  <div>
    <div className="p-10 text-4xl text-black font-bold">
        Average of Batsman
    </div>

    <div className='flex gap-3 justify-center'>
         <input 
         type="text"  
         className='h-10 w-56 border-2 border-gray-400 p-2'
         placeholder='Search by player names'
         value={searchPlayer}
         onChange={(event) =>{
            setSearchPlayer(event.target.value)
         }}
         />
         <button className="bg-red-500 text-white border-none w-28" onClick={handleSearch}>Search</button>
    </div>

    <div className=" rounded-md p-6">
          <table className="" >
            <thead className="bg-black text-white uppercase border-b-4 border-gray-300" >
                  <tr className="">
                    <th className='p-5 text-md font-bold '>Batsman</th>
                    <th className='p-5 text-md font-bold '>Strikerate</th>
                    <th className='p-5 text-md font-bold '>Total Runs</th>
                    <th className='p-5 text-md font-bold '>Average</th>
                    <th className='p-5 text-md font-bold '>Number of balls</th>
                    <th className='p-5 text-md font-bold '>Out</th>
                  </tr>
            </thead>
            <tbody className=""> 
                      {
        data.map((item:any) =>{
         return (
            <tr className='even:bg-slate-200 hover:bg-red-500 text-gray-700 hover:text-white'>
                    <td className="p-5 text-sm font-base">{item.batsman}</td>
                    <td className="p-3 text-sm font-base">{item.strikerate}</td>
                    <td className="p-3 text-sm font-base">{item.total_runs}</td>
                    <td className="p-3 text-sm font-base">{item.average}</td>
                    <td className="p-3 text-sm font-base">{item.numberofballs}</td>
                    <td className="p-3 text-sm font-base">{item.out}</td>
                </tr>
         )
        })
      }
          
            </tbody>
        </table>

    </div>
  </div>
  )
}

export default Average