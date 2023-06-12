import Navbar from './Navbar'
import Search from './Search';
import Chats from './Chats';
const Sidebar = () => {
    return ( <div className="sidebar">
        <Navbar></Navbar>
        <Search></Search>
        <Chats/>
    </div> );
}
 
export default Sidebar;