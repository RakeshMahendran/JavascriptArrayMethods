import React from 'react'

const ArrayMethods = () => {

    const bowlers = ["Ashwin", "Bhuvi", "Bumrah","Chahal"]
    //Convert array to string
    console.log(bowlers.toString())
    console.log("join",bowlers.join( ))
    //Popping and pushing
    console.log("pop", bowlers.pop())
    console.log("push", bowlers.push("Jaddu"),bowlers)

    //Shift and unshift
    console.log("shift", bowlers.shift(),bowlers)
      console.log("unshift", bowlers.unshift("Kuldeep"),bowlers)

   

      //Slicing and Splicing
      bowlers.slice(1)
      console.log("slice1",bowlers.slice(1))
      console.log("slice2",bowlers.slice(3))
      console.log("slice3",bowlers.slice(1,3))

      //Delete array
      delete bowlers[1]
      console.log("delete", bowlers)

  return (
    <div>
        <div>ArrayMethods</div>
        
    </div>
  )
}

export default ArrayMethods