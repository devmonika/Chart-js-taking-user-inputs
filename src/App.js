import { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const App = () => {
   const [man, setMan] = useState();
   const useEasyRef =  useRef();
   const useMediumRef =  useRef();
   const useHardRef =  useRef();
   
   const handleSubmit = event =>{
        event.preventDefault();
              const form = event.target;
              const easy = form.easy.value;
              const medium = form.medium.value;
              const hard = form.hard.value;
              const data = [
              {name: 'Easy', uv: easy, pv: 2400, amt: 2400},
              {name: 'Medium', uv: medium, pv: 2400, amt: 2400},
              {name: 'Hard', uv: hard, pv: 2400, amt: 2400}
            ]; 
              
              setMan(data); 
             
      }
    
      const useEasy = () =>{
        
        const valueEasy = useEasyRef.current.value = 0;
        const easy = valueEasy;
        const data = [
          {name: 'Easy', uv: easy, pv: 2400, amt: 2400},
          
        ]; 
       
        
        console.log(easy)
      }

      const useMedium = () =>{
        
        const valueMedium = useMediumRef.current.value = 0;
        const medium = valueMedium;
        const data = [
          {name: 'Medium', uv: medium, pv: 2400, amt: 2400},
          
        ]; 
        
        
        console.log(valueMedium)
      }
      const useHard = () =>{
       
        const valueHard = useHardRef.current.value = 0;
        const data = [
          {name: 'Hard', uv: valueHard,pv: 2400, amt: 2400}
          
        ]; 
        
        console.log(valueHard)
      }

    return (
   <div>
     <h1 className='text-5xl font-bold text-center my-10'>Create chart By User input with Animations</h1>
    <div className='flex justify-around mt-24 flex-col lg:flex-row'>
      
        <BarChart width={600} height={300} data={man}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
        
        <div class="w-full max-w-xs flex justify-center">
          
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h4 className='text-center text-2xl'>Give Input Here</h4>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Easy
              </label>
              <input name="easy" type="number" min='0' max='100' placeholder="write a number..." ref={useEasyRef}/>
              <button type='submit'>submit</button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Medium
              </label>
              <input   name="medium" type="number" min='0' max='100' placeholder="write a number..." ref={useMediumRef}/>
              <button type='submit'>submit</button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Hard
              </label>
              <input   name="hard" type="number" min='0' max='100' placeholder="write a number..." ref={useHardRef}/>
              <button type='submit'>submit</button>
            </div>
            <button type='submit' onClick={useEasy} >Easy</button>
            <button type='submit' onClick={useMedium} className="mx-5">Medium</button>
            <button type='submit' onClick={useHard}>Hard</button>
          </form>
          
            
        </div>
    </div>
    
   </div>
  );


}

export default App