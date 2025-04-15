import Footer from "./Footer"
import Header from "./Header"


export default function MainSection({children}){
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}