import '../css/about.css'
import Navbar from "./Navbar";

const Authors = () => {
    return (
        <>
        <Navbar />
        <div className="about">
            <h1>About The Authors</h1>
            <p>This app was developed by someone, a self-taught web developer and technical writer.</p>
        </div>
        </>
    )
}

export default Authors