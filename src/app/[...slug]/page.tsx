
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
  import * as fs from 'fs';
import { slugService } from '@/services/slugService';
import {India, Srilanka} from '@/component/country';


// this getProjects only trigger during build time , so can be put entire logic here
// like get static props
async function getProjects(getMinute:number) {
    const res = 2 * 3 * 5 * +getMinute;
    return res;
}
const Slug = async ({ params}:{params:any}) => {

    const getMinute = (new Date()).getMinutes()
    const projects = await getProjects(getMinute)

    return (
        <div>
            Slug File {projects}
          {/* {
            Layout ? <Layout /> : null
          }  */}
        </div>
    )
}

// export const dynamicParams = false
// export const revalidate = false


export const generateStaticParams = async (): Promise<any> => {
    await slugService.generatePaths();

     const countries:Country[] = await slugService.readFromPaths();
     
    return countries.map((country:Country) => ({
        slug: [country?.attributes?.name?.toLowerCase().replace(' ', '_')],
      }))
  }


  interface Country {
    attributes: {
        name: string,
    }
    id: number;
  }
export default Slug;