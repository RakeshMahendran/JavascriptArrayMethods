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

const Average = () => {React
    const [data , setData] = useState<any>(dataset)
    console.log("data",data)
  return (
    <div className="">
      {
        data.map((item:any) =>{
              <table>
            <thead>
                  <tr>
                    <th>Batsman</th>
                    <th>Strikerate</th>
                    <th>Total Runs</th>
                    <th>Average</th>
                    <th>Number of balls</th>
                    <th>Out</th>
                  </tr>
            </thead>
            <tbody> 
                <tr>
                    <td>{item.batsman}</td>
                    <td>{item.strikerate}</td>
                    <td>{item.total_runs}</td>
                    <td>{item.average}</td>
                    <td>{item.numberofballs}</td>
                    <td>{item.out}</td>
                </tr>
            </tbody>
        </table>
        })
      }
    </div>
  )
}

export default Average