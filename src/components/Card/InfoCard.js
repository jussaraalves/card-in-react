import './InfoCard.css'

import fotoPerfil from '../assets/foto-perfil.jpg'
import following from "../assets/following.svg"
import followers from "../assets/followers.svg"
import repository from "../assets/repository.svg"
import company from "../assets/company.svg"
import location from "../assets/location.svg"
import logo from "../assets/logo.svg"

const CardLogo = () =>{
    return(
        <div className='logo'>
            <img alt="" src={logo}/>    
            <p>jussaraalves</p> 
        </div>
    )
}

const CardHeader = () => {
    return (
        <div className='profilePic'>
            <img alt="" src={fotoPerfil}/>
        </div>
    )
}

const CardBody = () => {
    return (
        <div className='cardBody'>
            <span>
                <img alt="" src={followers}/>
                <p>22 Seguidores</p>
            </span>
            <span>
                <img alt="" src={following}/>  
                <p>54 Seguindo</p>
            </span>
            <span>
                <img alt="" src={repository}/>
                <p>8 Repositórios</p>
            </span>
            <span>
                <img alt="" src={company}/>
                <p>@Rosemodas</p>
            </span>
            <span>
                <img alt="" src={location}/>
                <p>Belo Jardim-PE</p>
            </span>
        </div>
    )
}

const CardFooter = () => {
    return (
        <div className='cardFooter'>
            <img alt="" src={logo}/> 
            <p className="text-footer">ROCKETCARD</p>
        </div>
    )
}

const CardMain = () => {
    return(
        <div className='cardInfo'>
            <CardHeader/>
            <CardBody/>
            <CardFooter/>
        </div>        
    )
}


const InfoCard = () => {
    return (
        <div className='infoCard'>
            <span>
                Compartilhe seu #rocketcard
            </span>
            <div className="cardOuter">
                <div className="cardInner">
                    <CardLogo/>
                    <CardMain/>
                </div> 
            </div>     
        </div>
    );
};

export default InfoCard;