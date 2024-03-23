import cone from "../assets/images/c1.jpg"
import ctwo from "../assets/images/c2.jpg"
import cthree from "../assets/images/c3.jpg"
import cfour from "../assets/images/c4.jpg"


function Recommended() {
    return (
        <div className="recommended">
            <h3 className="recommended_title">Recommended for you</h3>
            <p>Pick the bestfit</p>
            <div className="recommended_container">
                <div className="course_card">
                    <img src={cone}></img>
                    <h3>2023 Python Data Visualization</h3>
                    <p>Col Steele</p>
                    <p>4.0⭐⭐⭐⭐</p>
                    <p>449 <del> 2999 </del></p>
                </div>
                <div className="course_card">
                    <img src={ctwo}></img>
                    <h3>The Complete Python Bootcamp</h3>
                    <p>Jose Portli</p>
                    <p>3.6 ⭐⭐⭐</p>
                    <p>549 <del> 3999 </del></p>
                </div>
                <div className="course_card">
                    <img src={cthree}></img>               
                     <h3>100 Days of Code</h3>
                    <p>Dr Angel Yankee</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>449 <del> 2999 </del></p>
                </div>
                <div className="course_card">
                    <img src={cfour}></img>
                    <h3>Hands on Experience</h3>
                    <p>Rama Nayagan</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>449 <del> 1999 </del></p>
                </div>

            </div>
        </div>
    )
}

export default Recommended