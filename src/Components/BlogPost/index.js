import React, { useState, useEffect } from 'react'
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../Data/Blog.json";
export default function BlogPost(props) {
    const [post, setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        slug:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    });
    const [postId, setPostId] = useState("");

    useEffect(() => {
        const postId = parseInt(props.match.params.postId);
        const post = blogPost.data.find(post => post.id === postId);
        setPost(post);
        setPostId(postId);
    }, [post, props.match.params.postId]);

    if(post.blogImage === "") return null;
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogPostHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.postTitle}</h1>
                    <span className="postBy">posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className="blogPostImage">
                    <img src={require('../../BlogPostImage/' + post.blogImage)} alt="Post Image" />
                </div>
                <div className="postContent">
                    <h1>{post.postTitle}</h1>
                    <span>{post.blogText}</span>
                </div>
            </Card>
        </div>
    )
}
