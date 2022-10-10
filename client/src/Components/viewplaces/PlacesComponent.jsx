import React from "react";
import Rating from "./rating";
import Img from "./img";
import Details from "./details";
import Btn from "../Btn";
import "./style.css"
import { Link } from "react-router-dom";

function Components(props){
    return(
        <div className="place-box1">
            <Img photo={props.photo} alt="bye"/>
            <div class="place-details">
            <Details to={props.to} details={props.details}/>
            <Rating rate={props.rate}/>
            <div className="button-holder">
            <Link to="/book"><Btn type="button" value="Book"/></Link>
            <Link to="/placeshotel"><Btn type="button" value="See more"/></Link>
            </div>
        </div></div>
    )
}
export default Components;

