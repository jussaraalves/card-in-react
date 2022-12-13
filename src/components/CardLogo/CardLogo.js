import logo from '../assets/logo.svg'
import './CardLogo.css'

const CardLogo = (props) =>{
    return(
        <>
            <div className='header'>
                <div className='user'>
                    <div className='logo'>
                        <img src={logo}/>    
                    </div>
                       <p>jussaraalves</p> 
                </div>
            </div>
        </>
    )
}

export default CardLogo;