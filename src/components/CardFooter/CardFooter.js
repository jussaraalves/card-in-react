import logo from "../assets/logo.svg"
import './CardFooter.css'

const CardFooter = () => {
    return(
            <div className="footer">
                <div className="logo-footer">
                    <img src={logo}/> 
                    <p className="text-footer">ROCKETCARD</p>
                </div>
            </div>
        
    )
}

export default CardFooter;