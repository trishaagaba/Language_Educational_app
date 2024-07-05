import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const animals = ["Lions", "cats", "dogs"]
//how to render multiple elements
  return (
    <>
      <div>
        <p>Hello World</p>
        <h1>Animals</h1>
        <ul>
          {animals.map((animal) =>
          <li key = {animal}>{animal}</li>)}
        </ul>
       </div>
    </>
  )
}

export default App

// function ListItem(props) {
//   return (
//     <li>{props.animal}</li>
//   )
// }
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal)=>{
//         return animal.startsWith("L") ? <Li  key = {animal}>{animal}</Li> : null;
//         return animal.startsWith("L") && <Li  key = {animal}>{animal}</Li> ;

// })}
//     </ul>
//   )
// }
// function App1(){
//   const animals = ["Lions", "Cow" , "Snake"]

//   return( 
//     <div>
//       <h1>Anims</h1>
//       <List animals = {animals} />
//     </div>

//   )
// }

// function list2(props){
//   return(
//     <>
//     {!props.animals && <div>Looading...</div>}
//     {props.animals && props.animals.length > 0 && (
//       <ul>
//         {props.animals.map((animal)=>{
//           return <li key = {animal}>{animal}</li>
//         })}
//       </ul>
//   )}
//     {props.animals && props.animals.length == 0 && <div>There are no animals in the list</div>}
  
//     </>
//   )
// }

// const day = ['mon','tue','wed']

// function days(){
//   return(
//     <ul>
//      {days.map((day,index) =>(<li key={index}>{day}</li>))}
//     </ul>
    
//   )
// }

// function Button(text="Hello",color= "black",fontSize= '12'){
//   const buttonStyle = {
//     color : color,
//     fontSize : fontSize + "px"
//   }

//   return <button style= {buttonStyle}>{text}</button>
// }

// Button.defaultProps= {
//   text : "Click",
//   color : "blue",
//   fontSize : 12
// }

// export default function D(){
//   return (
//     <div>
//       <Button/>
//       <Button text= "Dont click" color = "red"/>


//     </div>
//   )
// }

