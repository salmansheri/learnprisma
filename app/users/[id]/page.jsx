import { getUserById } from '@/libs/prisma/users'
import React from 'react'
import User from '../user';

const page = async ({params}) => {
    const { user }  = await getUserById(params.id)
    console.log(user); 
  return (
    <div>
        <User user={user} />
    </div>
  )
}

export default page