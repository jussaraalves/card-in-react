import './InfoCard.css'

import fotoPerfil from '../assets/images/foto_perfil.JPG'
import following from "../assets/images/following.svg"
import followers from "../assets/images/followers.svg"
import repository from "../assets/images/repository.svg"
import company from "../assets/images/company.svg"
import location from "../assets/images/location.svg"
import logo from "../assets/images/logo.svg"
import React, { useEffect, useState } from "react";
import api from"../services/api";


const CardLogo = () =>{
    return(
        <div className='logo' >
            <img alt="" src={logo}/>    
            <p>jussaraalves</p> 
        </div>
    )
}

const CardHeader = () => {
    return (
        <div className='profilePic' >
            <img alt="" src={fotoPerfil}/>
        </div>
    )
}


const CardBody = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.get("/users/jussaraalves").then((response) => setUser(response.data))
        .catch((err) => {
            console.log("ops! ocorreu um erro" +err);
        })
    })
    
    return (
        <div className='cardBody'>
            <span>
                <img alt="" src={followers}/>
                <p>{user?.followers} Seguidores</p>
            </span>
            <span>
                <img alt="" src={following}/>  
                <p>{user?.following} Seguindo</p>
            </span>
            <span>
                <img alt="" src={repository}/>
                <p>{user?.public_repos} Repositórios</p>
            </span>
            <span>
                <img alt="" src={company}/>
                <p>{user?.company}</p>
            </span> 
            <span>
                <img alt="" src={location}/>
                <p>{user?.location}</p>
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


const InfoCard = (props) => {
    return (
        <div className='infoCard'>
            <span>
                Compartilhe seu #rocketcard
            </span>
            <div className="cardOuter" style={{ backgroundColor: props.bgColor}}>
                <div className="cardInner">
                    <CardLogo/>
                    <CardMain/>
                </div> 
            </div>     
        </div>
    );
};

export default InfoCard;