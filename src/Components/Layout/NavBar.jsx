import { Link } from "react-router-dom"
import '../../App.css'


function NavBar () {

    return(
        
        <nav className="display flex justify-center p-6" >
            
            <ul className="display flex items-center ">
                <li className="mr-6 zelda-text text-3xl hover:text-amber-400"> <Link to='/'>Home</Link></li>
                <li className="mr-6 zelda-text text-3xl hover:text-amber-400"> <Link to='/category'>Category</Link></li>
                <li className="mr-6 zelda-text text-3xl hover:text-amber-400">Teste</li>
            </ul>
        </nav>

    )


}


export default NavBar