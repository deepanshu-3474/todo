import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
        <div className="container-fluid bg-black head">
            <div className="container df sa wrap">
                <div className="div-20 df logo">
                    <img src="/2e41ffea-895f-4322-a5e1-bef54f0c0a15.jpg" alt="" />
                    <h1>TO-DO</h1>

                </div>
                <div className="div-70">

                </div>
                <div className="div-10 log df center">
                    <Link to={'/login'}>Log in</Link>

                </div>

            </div>

        </div>
        </>
    )
}