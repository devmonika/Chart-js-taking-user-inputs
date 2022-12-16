// import { Chart } from 'chart.js/auto';
import { useState, useRef } from 'react';
import './App.css';
// import Chartcust from './rechart2/Chartcust';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function App() {
 const [man, setMan] = useState();
 const useEasyRef =  useRef();

  // console.log(man);
  const handleSubmit = event =>{
    event.preventDefault();
          const form = event.target;
          const easy = form.easy.value;
          const medium = form.medium.value;
          const hard = form.hard.value;
          const data = [{name: 'Easy', uv: easy, pv: 2400, amt: 2400},
          {name: 'Medium', uv: medium, pv: 2400, amt: 2400},
          {name: 'Hard', uv: hard, pv: 2400, amt: 2400}]; 
          // form.reset();
          setMan(data); 
          // alert(setMan)
          
          
  }

  const useEasy = () =>{
    // useEasyRef.current.value = 0;
    // console.log(useEasyRef.current.value)
    const useEasyValue = useEasyRef.current.value;
    console.log(useEasyValue)
  }

  
  // const data = [{name: 'easy', uv: man, pv: 2400, amt: 2400}];   
  return (
   <div>
     <h1 className='text-5xl font-bold text-center my-10'>Create chart By User input with Animations</h1>
    <div className='flex justify-around mt-24'>
      
      {/* //chart */}
      

        <BarChart width={600} height={300} data={man}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
        {/* <button onClick={} type="submit">Reset</button> */}
        {/* input form  */}
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Easy
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="easy" type="text" placeholder="write a number..."/>
              <button className='btn bg-gray-700 py-2 px-4 text-white mt-3 rounded'>submit</button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Medium
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="medium" type="text" placeholder="write a number..."/>
              <button className='btn bg-gray-700 py-2 px-4 text-white mt-3 rounded'>submit</button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Hard
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="hard" type="text" placeholder="write a number..."/>
              <button className='btn bg-gray-700 py-2 px-4 text-white mt-3 rounded'>submit</button>
            </div>
           
          </form>
          <button type='submit' onClick={useEasy}>Easy</button>
            
        </div>
    </div>
    {/* <Chartcust></Chartcust> */}
   </div>
  );
}

export default App;
