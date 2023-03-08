import React, { useState } from 'react'
import dataset from '../src/assets/arraymethods.json'

export interface dataProps {
    batsman:string;
    total_runs:string;
    out:string;
    numberofballs:string; 
    average:string;
    strikerate:string;
}

type BattingData = dataProps[];

const Average = () => {

    const [data,setData] = useState<BattingData>(dataset)
    console.log("data",data)
    

    const [searchPlayer, setSearchPlayer] = useState<string>()
    console.log("searchPlayer",searchPlayer)


    const handleSearch = () => {
        const filteredBatsman = data.filter((item:any)=>{
            return item.batsman.toLowerCase().includes(searchPlayer?.toLowerCase())
        })
        setData(filteredBatsman)
        setSearchPlayer('')
    }


  return (
    <div>
        <div> 
            <h1 className='text-4xl font-bold p-4'>Average of Batsman</h1>
        </div>
        
        <div>
            <input 
            type="text"
            placeholder='Enter your player search..'
            className='w-56 h-10 border-2 border-gray-400 p-2'
            value={searchPlayer}
            onChange={(event:any) =>{
                setSearchPlayer(event.target.value)
            }}
            />
            <button className="bg-red-500 text-white p-3" onClick={handleSearch}>Search</button>
        </div>

        <div>
         <table>
            <thead>
                <tr className='bg-black text-white'>
                    
                     <th className='p-5 text-md font-semibold uppercase'>Batsman</th>
                     <th className='p-5 text-md font-semibold uppercase'>Out</th>
                     <th className='p-5 text-md font-semibold uppercase'>Total Runs</th>
                     <th className='p-5 text-md font-semibold uppercase'>Number of Balls</th>
                     <th className='p-5 text-md font-semibold uppercase'>Average</th>
                     <th className='p-5 text-md font-semibold uppercase'>Strikerate</th>
                </tr>
            </thead>
            <tbody>
               {
                data.map((item:any)=>{
                    return (
                        <tr className='hover:bg-red-500 hover:text-white even:bg-slate-400'>
                            <td className='p-3'>{item.batsman}</td>
                            <td className='p-3'>{item.out}</td>
                            <td className='p-3'>{item.total_runs}</td>
                            <td className='p-3'>{item.numberofballs}</td>
                            <td className='p-3'>{item.average}</td>
                            <td className='p-3'>{item.strikerate}</td>
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



