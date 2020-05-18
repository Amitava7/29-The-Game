import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import Modal from './Modal';

function Home(props) {
 
  const [showModal,setModal] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [user, setUser] = useState(null);
  useEffect(()=>{
    axios.get('/api/user')
    .then(res => {
      const person = res.name;
      setUser(person);
    })
  },[]);
  return (
  <div className="home">
  {   showModal ?
            <Modal>
                <div class='join-modal'>
                  <input class='sign' type='text' placeholder='Enter room id'  onChange={e=> setRoomId(e.target.value)}/>
                  <div class='sign' onClick={()=>window.location="/api/room?id="+roomId}>Join</div>
                <div 
                    className="modal-close"
                    onClick={()=>setModal(false)}>
                    <a href="#">
                      <span class="left">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                      </span>
                      <span class="right">
                        <span class="circle-left"></span>
                        <span class="circle-right"></span>
                      </span>
                    </a>
                </div>
                </div>
            </Modal> :null
    }           
        <div class='title'>
          <div class="pic"></div>
          <div class="sign" >
            < span class="fast-flicker">29</span>... THE G<span class="flicker">A</span>ME
          </div>
        </div>
          {
          user ?
          <div class="homebtns">
            <div class="sign" onClick={()=>window.location="/api/room/create"}>
              Create Room
            </div>
            <div class="sign" onClick={()=>setModal(true)}>
              Join Room
            </div>
          </div>   
             :
            <div class="loginbtns" onClick={()=>window.location="/api/login/google"}>
              <div class="sign" >
                 Sign in with  < span class="fast-flicker">Google</span>
              </div> 
            </div>  
          }
  </div>);
}

export default Home;
