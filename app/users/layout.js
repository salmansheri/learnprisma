import Page from "./page";
import Users from './users'; 

const Layout = ({children}) => {
    return(
        <div>
            <aside className="w-1/4">
                <Users />
               
            </aside>
            <div className="ml-[300px]">{children}</div>
        </div>
    )
}

export default Layout; 