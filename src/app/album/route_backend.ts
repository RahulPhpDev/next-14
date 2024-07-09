
import axios from "axios"

export async function GET(request: Request) {
  const jsonData =  await fetch('https://jsonplaceholder.typicode.com/albums');

  const albums =  await  jsonData.json()
   return Response.json(albums)
}

