import React, { useState, useEffect } from 'react';
import './style.css';
import Card from "../UI/Card";
import blogPost from "../../Data/Blog.json";
import { NavLink } from 'react-router-dom';
export default function SlideBar() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);


    return (
        <div className="slideBarContainer">
            <Card>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require("../../BlogPostImage/thoi-trang-2.jpeg")} alt="" />
                </div>
                <div className="cardBody">
                    <p className="profile">my name is Phung I am a software developer specialization in frontend development.....</p>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Social network </span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map((post, index) => {
                            return (
                                <NavLink exact to={`/post/${post.id}`} key={index}>
                                    <div className="recentPost" >
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn} </span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }

                </div>

            </Card>
        </div>

    );
}
