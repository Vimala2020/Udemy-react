import sale from "../assets/images/sale.jpg"

function Sale() {
    return (
        <div className="sale">
            <img src={sale}></img>
            <div className="sale__offer">
                <h1>Flash Sale </h1>
                <h2>Offer only for Today</h2>
                <p>Get your favourite course at just RS 499/- If you enroll today.</p>
                <p>Happy Learning</p>
            </div>
        </div>
    )
}

export default Sale