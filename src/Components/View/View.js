import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  
  const {postDetails} = useContext(PostContext)
  const [userDetails,setuserDetails] = useState([])

  const {firebase}= useContext(FirebaseContext)
 
  useEffect(()=>{
      
  
    const {userId}  = postDetails

    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setuserDetails(doc.data())
      });
      console.log(userDetails)
    })
},[])

  return (
   <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
