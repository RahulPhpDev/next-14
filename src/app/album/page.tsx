'use client'
import type {NextPage} from 'next';
import { GetAlbum } from './api';
import { useEffect,useState } from 'react';

import { UseSelector , useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';
import { selectCount } from '@/features/albumSlice';


const  Album:NextPage =  () => {
  const [albums, setAlbums] = useState<{[key:string]: any}>([]);
  const count = useSelector(selectCount);
    useEffect(() => {
        const fetchData = async () => {
            const result = await GetAlbum();
            setAlbums(result)
        };
        fetchData();
    }, [])
    return (
        <div>
                 <p> {count} </p>
        <h2 className='text-lg font-bold'> Here are top Album.</h2>
        <ul className='list-disc'>
            {albums.map((alb:any) => (
                <li className='bullet' key ={alb?.id}>{alb?.title} </li>
            ))
            }
        </ul>

   
        </div>
    )
}

export default Album;