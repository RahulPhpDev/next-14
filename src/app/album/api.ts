
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
  