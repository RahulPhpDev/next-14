
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
  import * as fs from 'fs';
import { slugService } from '@/services/slugService';
import {India, Srilanka} from '@/component/country';
const Slug = async ({ params }:{params:any}) => {
   
    const {slug} = params;
   
    console.log('countries', slug?.[0])
    const layoutMapping:any = {
        India: India,
        Srilanka: Srilanka,
    }
    const Layout = layoutMapping[slug?.[0]];
    return (
        <div>
            Slug File
          {
            Layout ? <Layout /> : null
          }  
            {/* {countries.map( (cot:any) => {
                return (
                    <h1 key ={cot?.id}> {cot?.attributes?.name} </h1>
                )
            })
            } */}
        </div>
    )
}

export const dynamicParams = false


export const generateStaticParams = async (): Promise<any> => {
    await slugService.generatePaths();

     const countries:Country[] = await slugService.readFromPaths();
    //  return countries.map((country:Country) => ({
    //     slug: [country?.attributes?.name],
    //   }))
     return countries.map((country:Country) => ({
       slug: [country?.attributes?.name],
      }))

    //   return [{ slug: ['India'] }, { slug: ['Srilanakas'] }]
//other optoin 
//eturn [
//     { category: 'a', product: '1' },
//     { category: 'b', product: '2' },
//     { category: 'c', product: '3' },
//   ]
  }


  interface Country {
    attributes: {
        name: string,
    }
    id: number;
  }
export default Slug;