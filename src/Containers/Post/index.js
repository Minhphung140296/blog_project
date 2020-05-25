import React from 'react'
import "./style.css"
import BlogPost from "../../Components/BlogPost";
import SlideBar from '../../Components/SlideBar';
export default function Post(props) {
    console.log(props);
    
    return (
        <div>
            <section className="container">
                <BlogPost {...props}/> 
                <SlideBar/>
            </section>
        </div>
    )
}
