import Mess from "./mess.module.css";
import { Link } from "react-router-dom";
const mess = () => {
    return (
        <div className={Mess.content}>
            <h1 className={Mess.header}>Barak Mess</h1>
            <p>
                We have our own operating Mess, which provides all three meals
                in a day. Boarders have access to a variety of food items over a
                week that keeps their health and well-being in check and is a
                delicacy to taste. Mess feedback is taken at regular intervals
                through a form accessible by QR codes pasted at the dining
                tables for easy access.
            </p>
            <div className={Mess.buton}>
                <div className={Mess.bookButtom}>
                    {" "}
                    <a href="/"> MESS MENU</a>
                </div>
                <div className={Mess.bookButtom}>
                    {" "}
                    <Link to="/"> FEEDBACK</Link>
                </div>
            </div>
        </div>
    );
};

export default mess;
