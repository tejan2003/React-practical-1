import "./Card.css";

function Card(){
    return(
        <> 
    <h2 className="Card">Card components</h2>
    <button className="btn btn-primary" onClick={() => alert("Hello")}>
        click Me
        </button>
    </>
    );
}
export default Card;