import "./List.css"
import Card from "./Card";

// We want to get just the main series name here
function List({title, shows}) {
    // for series in series
    // add card, add title

    return (
        <>
        <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
        <div className="container">
            {Object.values(shows).map(show => 
                <Card key={show.title} title={show.title} logo={show.logo}/>
            )}
        </div>
        </>
    );
};


export default List;

