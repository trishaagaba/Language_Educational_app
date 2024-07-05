// import React, {useState} from 'react'

// const Person = () => {
// const [person, setPerson] = useState({name: "John", age: 18})

// const handleAgeChange= () =>{
//     const newPerson = {...person, age : person.age + 1};
//     setPerson(newPerson)
//     }
//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <h1>{person.age}</h1>

//       <button onClick={handleAgeChange}>Increase age</button>
      
//     </div>
//   )
// }

// export default Person

// //
// // updater function

// const handleIncreaseAge=()=>{
//     setPerson((prevPerson)=>({...prevPerson, age: prevPerson.age +1}))

//     setPerson((newPerson)=> ({...person, age: person.age + 1}))


// }

import React, {useState} from 'react'

const Person = () => {
    const [firstName,setFirstName] = useState("")

    const inputName= (e) => {
        
        setFirstName(e.target.value);
    }
  return (
    <div>
        <h1> put your Full name</h1>
      <input 
      type='text' 
      value={firstName}
      onChange={setFirstName}/>
      <button >Submit</button>
    </div>
  )
}

export default Person



