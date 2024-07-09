'use client';

import {useState} from 'react';
import { useSelector } from "react-redux";
import { selectCount , increment , decrement, incrementByNum, incrementAsync } from '@/features/counterSlice'
import { useAppDispatch } from "@/lib/hooks";
const Counter = () => {
   const count =  useSelector(selectCount);
   const dispatch = useAppDispatch();
   const [numVal, setNumVal] = useState<number>(0);

   console.log('count', {count})
    return (
        <>
           <h2 className="text-blue-500 text-[24px] mb-10 "> {count} </h2>
          <button className="bg-orange-300 p-3 text-center font-bold text-white rounded-lg"
          onClick={() => dispatch(increment() )}
          >
            + Click here 
          </button>

          <button className="bg-blue-300 p-3 text-center font-bold text-white rounded-lg ml-5"
          onClick={() => dispatch(decrement() )}
          >
            - Decrement 
          </button>
            <div className='mt-3'>

            <input className= "p-2" type = "text" value={numVal}
              onChange={e => setNumVal(e.target.value)}
            />

            <button className="bg-blue-600 p-2 text-center text-sm font-bold text-white rounded-lg ml-5"
          onClick={() => dispatch(incrementByNum(Number(numVal) || 0 ) )}
          >
           Increase 
          </button>

          <button className="bg-blue-600 p-2 text-center text-sm font-bold text-white rounded-lg ml-5"
          onClick={() => dispatch(incrementAsync(Number(numVal) || 0 ) )}
          >
          Async Increase 
          </button>

            </div>

        </>
    )
}

export default Counter;