import './CardMain.css';
import fotoPerfil from '../assets/foto-perfil.jpg'
import following from "../assets/following.svg"
import followers from "../assets/followers.svg"
import repository from "../assets/repository.svg"
import company from "../assets/company.svg"
import location from "../assets/location.svg"

const CardMain = ({children}) => {
    return(
            <div className='main'>
                <div className='profile'>
                    <img src={fotoPerfil}/>
                </div>
                <div className='info'>
                    <div className='images'>
                        <img src={following}/> 
                        <img src={followers}/>
                        <img src={repository}/>
                        <img src={company}/>
                        <img src={location}/>
                    </div>
                </div>
            
            </div>
           
        
    )
}

export default CardMain;