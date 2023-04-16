import React from 'react'; 
import Image from 'next/image';

const User = ({user}) => {
  return (
    <div>
        <div className="center">
            <div className="relative h-40 w-40 rounded-full">
                <Image
                src="/next.svg"
                alt="userimage"
                width={100}
                height={100}

                />
            </div>
            <h1 className="text-xl font-bold">{user?.name}</h1>
            <p className="text-sm text-stone-400">{user?.email}</p>

        </div>
    </div>
  )
}

export default User