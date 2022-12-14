import './CardMain.css';
import fotoPerfil from '../assets/foto-perfil.jpg'

const CardMain = ({children}) => {
    return(
        <>
            <div className='main'>
                <div className='profile'>
                    <img src={fotoPerfil}/>
                </div>
            </div>
        </>
    )
}

export default CardMain;