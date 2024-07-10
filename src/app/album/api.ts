import axios from "axios";

export async function GetAlbum() {
    const jsonData =  await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums =  await  jsonData.json()
     return albums;
  }
  
  export async function GetPostComment(postId = 1) {
    const jsonData =  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const albums =  await  jsonData.json()
     return albums;
  }


  export async function getCountries() {
   const apiUrl = process.env.NEXT_PUBLIC_API_STRAPI_BASE_URL;
   // 127.0.0.1:1337
   const jsonData =  await axios.get(`http://127.0.0.1:1337/api/countries`);
   const albums =  await  jsonData.data
    return albums;
 }
  