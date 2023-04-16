import Link from "next/link";

const Users = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
        }
    }) 

    const data = await response.json(); 
    



    return(
        <div className="fixed h-full w-1/4 bg-stone-800">
            <div className="center py-4 px-4">

            <h2 className="mb-4 text-xl font-medium text-white">Users</h2>
            <ul className="flex flex-col text-sm text-white">
                {data.map((user, index) => (
                    <Link key={user.id} index={index} href={`/users/${user.id}`}>{user.name}</Link>
                    ))}
            </ul>

                    </div>
        </div>
    )
}

export default Users; 