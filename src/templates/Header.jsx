import { Link } from "react-router-dom";

function Header () {
    return(
      
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/myjob"}>MyJob</Link>
        </nav>
       
    )
}

 export default  Header; 