import { Link } from "react-router-dom"
import "../css/PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="notFoundCont">
        <div className="notFoundInnerCont">
            <h1 className="OopsTitle">OOPS!</h1>
            <svg src="../assets/page-not-found-svgrepo-com.svg"></svg>
            <h4>404 - PAGE NOT FOUND.</h4>
            <p>The page you are looking for might have been removed,<br/>had its name changed or is temporarily unavailable.</p>
            <Link to={"/"}>
                <button>Go Home</button>
            </Link>
        </div>
    </div>
  )
}
