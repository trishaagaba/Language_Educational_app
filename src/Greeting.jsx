import React,{useState, useEffect} from 'react'
import './App.css'
import MemoryCard from './MemoryCard'
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"


// <Accordion type="single" collapsible>
//   <AccordionItem value="item-1">
//     <AccordionTrigger>Is it accessible?</AccordionTrigger>
//     <AccordionContent>
//       Yes. It adheres to the WAI-ARIA design pattern.
//     </AccordionContent>
//   </AccordionItem>
// </Accordion>

  

function Greeting () {
  const [count, setCount] = useState(0);
  
useEffect(()=>{

  const key = setInterval(()=>{
      const newCount = count + 1
      setCount(newCount);
    },1000)

    return () => {
      clearInterval(key);
    }
  // const increaseCount = () => {
  //     const newCount = count + 1
  //     setCount(newCount);
  //   }  
},[])
    return (
      <div>
      <nav className='header'>
        <div className= 'heads'>
        Home
        </div>
      <div className= 'heads' >
        About us
        </div>

      <div className= 'heads'>
        Contact us
        </div>
      </nav>
        <h1 className= 'heading' >Shopping cart</h1>
      <MemoryCard/>
      <h1>{count} numbers are running</h1>
        <p>{count}</p>
         {/* <button onClick={increaseCount}>Press me</button> */}
    </div>

//       <div>
//          <nav aria-label="Sidebar" class="mt-3">
//           <div class="px-2 space-y-1">
// <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-home" data-turbo-method="get" href="/">
 

//     Home
// </a>
//  <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-all-paths" data-turbo-method="get" href="https://www.theodinproject.com/paths">
 

//  All Paths
// </a>
//  <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-about" data-turbo-method="get" href="/about">
   
//     About
// </a>
// <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-support-us" data-turbo-method="get" href="/support_us">

//     Support Us
// </a>
//  <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-community" data-turbo-method="get" href="https://discord.gg/fbFCkYabZB">

//     Community
// </a>
//           </div>
//           {/* <hr class="border-t border-gray-200 my-4" aria-hidden="true"> */}
//           <div class="px-2 space-y-1">
//                 <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-sign-up" data-turbo-method="get" href="/sign_up">
  

//     Get started
// </a>
//               <turbo-frame id="theme_switcher_mobile">
//  <a class="text-gray-600 group flex items-center dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900 text-base font-medium py-2 px-2 dark:hover:bg-gray-700/60 dark:hover:text-gray-200" data-turbo-method="put" href="/themes?theme=dark">
  

//   Light mode
// </a>
// </turbo-frame> <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700/60 " data-test-id="nav-sign-in" data-turbo-method="get" href="/sign_in">


//     Sign in
// </a>
//           </div>
//         </nav>
//         <h1>I swear by you</h1>
//         <p>{count}</p>
//         <button onClick={increaseCount}>Press me</button>
//       </div>
    )
}
export default Greeting


