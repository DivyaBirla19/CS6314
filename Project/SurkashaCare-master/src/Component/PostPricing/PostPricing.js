import React from 'react';
import Cards from '../../Containers/Cards/Cards';
import Pagination from '../Pagination/Pagination';
import './PostPricing.css';

const postCakes=({posts,loading,totalpost,postperpage,changePage,addCardItem})=>{
  
    let postings=null;
    postings = (posts.map(post=>(
        <Cards docName={post.docName} qualifications={post.qualification} availability={post.availability} experience={post.experience} fee={post.fee} timing={post.timing} docImg={post.docImg}  addCardItem={addCardItem}/>
       
    )))
    if(loading)
        return <h2>Loading ...</h2>
    return (
            <div class="row">
                <div className="col-12 pricing-card">
                {postings}
                </div>
                <div className="col-12 page-box">
                <Pagination totalpost={totalpost} postperpage={postperpage} changePage={changePage}/>
                </div>
               
            </div>
           
        
    )
}
export default postCakes;