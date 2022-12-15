import CardMain from '../CardMain/CardMain';
import CardLogo from '../CardLogo/CardLogo'
import Card from "../Card/Card";
import './CardContainer.css';

const CardContainer = ({chidren}) => {
    return (
        <div className="CardContainer">
            <div className="title-container">
                <p className="title-card">Compartilhe seu #rocketcard</p>
                
            </div>
            <Card>
                 <CardLogo/> 
                 <CardMain/>    
            </Card>
            
        </div>
    );
};


export default CardContainer;