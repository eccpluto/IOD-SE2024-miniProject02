import { Link } from "react-router-dom";

/**
 * 
 * @returns PageNotFound component.
 */
function PageNotFound() {

    return(
        <div className="PageNotFound">
            <h1>Page Not Found.</h1>
            <p>Try returning to <Link to='/'>home</Link></p>
        </div>
    )
}

export default PageNotFound