import code1 from "./assets/images/code1.jpg"
import c2 from "./assets/images/c2.jpg"
import sys1 from "./assets/images/sys1.jpg"
import c3 from "./assets/images/c3.jpg"
import code2 from "./assets/images/code2.jpg"
import book from "./assets/images/book.jpg"
import django from "./assets/images/django.jpg"
import ai from "./assets/images/ai"


function Popular() {
    return (
        <div className="popular">
            <h1 className="popular_title">Most Popular</h1>
            <p className="popular_subtitle">Pick the best</p>
            <div className="popular_container">
                <div className="course_card">
                    <img src={code1}></img>
                    <h3>2023 Python Data Visualization</h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del> 1999 </del></p>
                </div>
                <div className="course_card">
                    <img src={c2}></img>
                    <h3>Complete JavaScript -Zero to Hero</h3>
                    <p>Hema Kumari</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>400 <del> 1999 </del></p>
                </div>
                <div className="course_card">
                    <img src={sys1}></img>
                    <h3>Learn JavaScript-Beginner</h3>
                    <p>Youcan Doit</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>4449 <del> 7999 </del></p>
                </div>
                <div className="course_card">
                    <img src={c3}></img>
                    <h3>Machine Learning-AI</h3>
                    <p>Col Steele</p>
                    <p>2.0⭐⭐</p>
                    <p>849 <del> 1999 </del></p>
                </div>
                <div className="course_card">
                    <img src={code2}></img>
                    <h3>Basic Coding</h3>
                    <p>Col Steele</p>
                    <p>4.8⭐⭐⭐⭐</p>
                    <p>449 <del> 1999 </del></p>
                </div>
                <div className="course_card">
                    <img src={book}></img>
                    <h3>Bootcamp Java</h3>
                    <p>Sreyas tadde</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>4000 <del> 18999 </del></p>
                </div>
                <div className="course_card">
                    <img src={django}></img>
                    <h3>2023 Django -Bootcamp</h3>
                    <p>Colin Le</p>
                    <p>3.9⭐⭐⭐⭐</p>
                    <p>559 <del> 1999 </del></p>
                </div>
                <div className="course_card">
                    <img src={ai}></img>
                    <h3>Master in AI</h3>
                    <p>Cam Sipara</p>
                    <p>4.8⭐⭐</p>
                    <p>490 <del> 1999 </del></p>
                </div>
            </div>
            </div>
)}
export default Popular