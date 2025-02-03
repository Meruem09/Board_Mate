import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }



    return ( 
        <div className="sidebar">
            <ul>
            <li onClick={handleHome} >Boards</li>
            <li >Template</li>
            <li >Home</li>
            </ul>
        </div>
    );
}
 
export default Sidebar;