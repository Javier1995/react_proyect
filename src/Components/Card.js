
import '../../src/App.css'

function Card(props) {
    return (
        <div>

            <div className="card">
                <div className="card-title">{props.title}</div>
                <div className="card-content">

                        <p>{props.content}</p>
                
                </div>
                <button className="btn">Send</button>
            </div>

        </div>
    );
}

export default Card;