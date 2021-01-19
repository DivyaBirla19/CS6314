import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostPricing from '../PostPricing/PostPricing';
import SliderBox from '../../Component/SliderBox/SliderBox';
import './Posts.css';

const Postings = (props) => {

    const [original,setOriginal] = useState([])
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    useEffect(() => {

        const fetchPosts = () => {
            setLoading(true);
            axios.get('http://localhost:8001/pricing').then(res => {
         
                setPosts(res.data);
                setOriginal(res.data);
            }).catch(err => {
                console.log(err)
            })

            setLoading(false);
        }

        fetchPosts();
    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    console.log(indexOfFirstPost + " " + indexOfLastPost);
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



    console.log(currentPosts)
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const filterPost=(new_posts)=>{
            setPosts(new_posts)
    }

    return (<div className="post-item row">
        <div className="col-6 fee-box">
            <div className="row">
                <div className="col-12 col-md-3">
                    <h5>Fee:</h5>
                </div>
                <b>$0</b>
                <div className="col-12 col-md-7">

                    <SliderBox filterPost={filterPost} posts={original} measure="fee" min="100" max="1000" />

                </div>
                <b>$1000</b>
            </div>

        </div>
        <div className="col-6 exp-box">
            <div className="row">
                <div className="col-12 col-md-3">
                    <h5>Experience:</h5>
                </div>
                <b>1</b>
                <div className="col-12 col-md-7">

                    <SliderBox filterPost={filterPost} posts={original} measure="experience" min="1" max="10" />

                </div>
                <b>10</b>
            </div>
        </div>
        <div className="col-12">
            <PostPricing posts={currentPosts} loading={loading} totalpost={posts} postperpage={postsPerPage} changePage={changePage} addCardItem={props.addCardItem}></PostPricing>
        </div>



    </div>)

}

export default Postings;
