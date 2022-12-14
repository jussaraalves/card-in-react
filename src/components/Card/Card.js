import './Card.css';

const Card = ({children}) => {
    return (
        <div className="card-outer">
            <div className="card-inner">{children}</div> 
        </div>     
    );
};

export default Card;