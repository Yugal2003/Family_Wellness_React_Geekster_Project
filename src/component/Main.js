import React from "react";
import './Main.css';
import img from './img/two_girl.JPG'

const Main = () =>{
    return(
        <>
            <div id="girl_with_text">
                <img id="img_id" alt="img" src={img}/>
            </div>
            <div id="pink_text_h3">
                    <h2 id="think_health">
                        Think Health. Think Massage.
                    </h2>
                    <p id="pink_text_p">
                        We are open 9am to 6pm; Monday through Sunday.If you would like to schedule an appointment <br></br> with us,please call us at 987-654-3210 today!
                    </p>
                    <div id="button">
                        <button className="btn">
                            LEARN MORE ABOUT US
                        </button>
                        <button className="btn">
                            CONTACT US TODAY
                        </button>
                    </div>
            </div>
            <div className="other_text">
                <p id="pink_txt">
                    Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage<br></br> therapists who can provide clinical massage.
                </p>
                <p className="two_text">
                    We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle.<br></br> Enhance your health and improve your performance with our treatments.
                </p>
                <p className="two_text">
                    We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the<br></br> best massage therapy in Mainland.
                </p>
                <hr className="hr"></hr>
            </div>
        </>
    )
}

export default Main;