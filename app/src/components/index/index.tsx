import React, {Fragment, useEffect} from "react";
import {HeadComponent} from "../header";
import {ContentComponent} from "../content";
import BookComponent from "../book";
import PregnantComoponent from "../pregnant";
import RecommendComponent from "../recommend";
import {useNavigate} from "react-router-dom";


const IndexComponent=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')

        }
    })
    return (
        <div>
            <HeadComponent/>
            <ContentComponent/>
            <BookComponent/>
            <PregnantComoponent/>
            <RecommendComponent/>
        </div>
    )
}
export default IndexComponent
