import React, { useEffect, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import CreateIcon from '@mui/icons-material/Create';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import "./feed.css"
import InputOption from './InputOption.js'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function Feed() {
  const[posts,setPosts] = useState([]);
  const[input,setInput] =useState('');
  useEffect(()=>{
    // realtime lister to firebase
    db.collection("posts").onSnapshot(snapshot =>(
      setPosts(snapshot.docx.map(doc=>(
        {
          id: doc.id,
          data:doc.data(),
        }
      )))
    ))
  },[])

  const sendPost= (e) =>{
    e.preventDefault();
    db.collection('posts').add({
      name:'vj',
      description:'this is test',
      message:input,
      photoUrl:'',
      timestamp:firebase.firestore.FieldValue.servertimestamp(),
    })
  };
  // setInput("");

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
              <CreateIcon />
              <form>
                <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                <button onClick={sendPost} type="submit">Send</button>
              </form>
            </div>
            <div className="feed__inputOption">
              <InputOption Icon={ImageIcon}title="Photo" color="#7085f9"/>
              <InputOption Icon={SubscriptionsIcon}title="Video" color="#e7a33e"/>
              <InputOption Icon={EventNoteIcon}title="Event" color="#c0c0cd"/>
              <InputOption Icon={CalendarViewDayIcon}title="Write article" color="#7fc15e"/>
              
            </div>
        </div>
        {/* posts */}
        {posts.map(({id, data:{name,description,message,photoUrl}})=>{
          <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl} />
        })}
        {/* <Post 
        name="name" 
        description="this is a test"
        message="this works" /> */}
    </div>
  )
}

export default Feed