import { getCountries } from "@/app/album/api"
import { writeFile, STRAPI_DATA, readFile } from '../utils/fileHandler'

const fs = require('fs'); 
export const slugService = {
    generatePaths: async () => {
        'use server'
        const data = await getCountries();
        writeFile(fs, STRAPI_DATA.COUNTRIES, data,true); 
    },
    

    readFromPaths: async ( ) => {
        const countries = await readFile(fs, STRAPI_DATA.COUNTRIES ) ;
        return countries?.data;
    }
}