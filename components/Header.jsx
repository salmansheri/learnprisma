import Link from "next/link";

const Header = () => {
    return(
        <div className="bg-stone-100 py-12">
            <nav className="center">
                <ul className="flex justify-center gap-8">
                    <li>
                        <Link className="text-sm font-medium uppercase text-gray-500" href="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link className="text-sm font-medium uppencase text-gray-500" href="/users">
                            Users


                        </Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Header; 