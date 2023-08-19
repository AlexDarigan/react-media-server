import "./Card.css"

function Card({title, logo}) {
    return (
        <div>
        <div 
            className="card"
            style={{
                backgroundImage: `url(${logo})`
            }}
        />
        <label>{title}</label>
        </div>
    );
}

export default Card;