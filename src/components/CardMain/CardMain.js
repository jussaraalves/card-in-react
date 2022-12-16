import './CardMain.css';
import fotoPerfil from '../assets/foto-perfil.jpg'
import following from "../assets/following.svg"
import followers from "../assets/followers.svg"
import repository from "../assets/repository.svg"
import company from "../assets/company.svg"
import location from "../assets/location.svg"

const CardMain = ({children}) => {
    return(
        <>
            <div className='main'>
                <div className='profile'>
                    <img src={fotoPerfil}/>
                </div>
                <div className='info'>
                    <div className='images'>
                        <div className='following'>
                            <img src={following}/>  
                            <p>54 Seguindo</p>
                        </div>
                        <div className='followers'>
                            <img src={followers}/>
                            <p>22 Seguidores</p>
                        </div>
                        <div className='repository'>
                            <img src={repository}/>
                            <p>8 Repositorios</p>
                        </div>
                        <div className='company'>
                            <img src={company}/>
                            <p>@Rosemodas</p>
                        </div>
                        <div className='location'>
                            <img src={location}/>
                            <p>Belo Jardim-PE</p>
                        </div>
                        
                    </div>
                
                </div>
                <div>
                    {children}
                </div>
            </div>
            
        </>  
        
    )
}

export default CardMain;