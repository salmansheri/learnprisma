import { likeTweet } from "@/libs/prisma/tweets";

export async function PATCH(Request) {
   
    try {
        const {id } = await Request.query; 

        const { tweet , error } = await likeTweet({ id }) 
     

        
    }catch(error) {
        console.log(err)
        return new Response(JSON.stringify({message: error.message}))
    }
}