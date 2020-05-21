import React from 'react'
import "./style.css"
import BlogPost from "../../Components/BlogPost";
import slideBar from "../../Components/SlideBar";
export default function Post() {
    return (
        <div>
            <section className="container">
                <BlogPost/> 
                <div className="slideBar">Slide Bar</div>
            </section>
        </div>
    )
}
