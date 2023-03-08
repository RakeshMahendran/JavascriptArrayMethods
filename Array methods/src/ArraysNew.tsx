import React from 'react'

const ArraysNew = () => {
   //What is an array
   ["rakesh","lathiesh",9,10]

    //Create a new array
    const batsman = new Array("Kohli","Rohit","Dhawan")
    const batsmen = new Array(batsman)
     //c//onsole.log("batsman",batsmen)
    // ["Kohli","Raina","Dhawan"]
    //Get the array elements through index
    console.log("index",batsman[0])
     console.log("nested index",batsmen[0][1])
    //changing the array elements
    batsman[1]= "Raina"
   console.log("changed",batsman)
    //The length property
    console.log("length",batsman.length)
    //Accessing the first element
     console.log("first",batsman[0])
    //Accesing the last element
    console.log("last",batsman[batsman.length-1])

    //Adding array elements 
    batsman.push("Suryakumar")
   // console.log("updatedArray",batsman)
    //High index addition
  // ['Kohli', 'Raina', 'Dhawan', undefined,undefined ,undefined,'Suryakumar']

       //Instance of : Checking whether it is an array
   console.log( batsman instanceof Array)

     //Create an array with new array and normal [] and compare
      const data1 = [4,10]
      console.log("data1",data1)
      const data2 = new Array (4,10)
      console.log("data2",data2)
     
     //type of => object
   console.log(typeof batsman)



  return (
    <div>
        <div className="text-6xl font-bold text-indigo-500">Welcome</div>
    </div>
  )
}

export default ArraysNew