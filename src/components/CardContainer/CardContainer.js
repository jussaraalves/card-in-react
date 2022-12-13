import CardLogo from '../CardLogo/CardLogo'
import Card from "../Card/Card";
import './CardContainer.css';

const CardContainer = (props) => {
    return (
        <div className="CardContainer">
            <div className="title-container">
                <p className="title-card">Compartilhe seu #rocketcard</p>
                
            </div>
            <Card>
                 <CardLogo/>
            </Card>
            
        </div>
    );
};


export default CardContainer;