import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const loadedcoffees=useLoaderData();
  const [coffees,setcoffees]=useState(loadedcoffees);

  return (
    <>
    <div className='m-20'>
      <h1 className='text-blue-600 font-sans text-3xl text-center mt-5'>Hot Hot Cold Coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setcoffees={setcoffees}></CoffeeCard>)
      }
      </div>
    </div>
    </>
  )
}

export default App
