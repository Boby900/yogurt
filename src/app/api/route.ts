import { createClient } from 'pexels';

// const client = createClient(process.env.PEXELS_API_KEY ?? '');

// // All requests made with the client will be authenticated


export default async function getData() {
    const res = await fetch('https://api.pexels.com/v1/photos',{
        headers: {
            authorization: process.env.PEXELS_API_KEY ?? '',
          },
    })
    console.log(res)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // client.photos.show({ id: 2499611 }).then(photo => {...});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

 
  