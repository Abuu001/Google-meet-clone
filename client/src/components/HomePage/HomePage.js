import React, { useState } from 'react'
import Header from '../UI/Header/Header'
import "./HomePage.scss"
import VideoCallIcon from '@material-ui/icons/VideoCall';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import meetGroup from "../Assets/googleGroup1.jpeg"
import shortid from "shortid"
import { useHistory } from 'react-router-dom';

function HomePage() {

    const history= useHistory();
    const [joinMeeting,setJoinMeeting]=useState('')

    const startCall=()=>{ 
        //generate a unique id
            const uid= shortid.generate()
        //redirect to the call page
         history.push(`${uid}#init`);
    }

    const EnterMeeting=()=>{
        window.location=joinMeeting
     
    };

    return (
        <div className="HomePage">
           <Header />
           <div className="body">
               <div className="left__side">
                        <div className="content">
                            <h2>Premium video meetings.Now free for everyone.</h2>
                            <p>We re-engineered the service we built for secure business
                                meetings , Google Meet, to make it free and available for all.
                            </p>
                            <div className="action__btn">
                                <button className="btn green" onClick={startCall}>
                                    <VideoCallIcon className="icon__block"/>
                                    New Meeting
                                </button>
                                <div className="input__block">
                                    <div className="input__section">
                                        <KeyboardIcon className="icon__block" />
                                        <input placeholder="Enter a code or link" value={joinMeeting} onChange={e=>setJoinMeeting(e.target.value)} />
                                    </div>
                                    <button className="btn no-bg" onClick={EnterMeeting}>Join</button>
                                </div>
                            </div>
                        </div>
                        <div className="help__text">
                            <a href="/" >Learn More</a> about Google Meet
                        </div>
               </div>
               <div className="right__side">
                    <div className="content">
                        <img  src={meetGroup} alt="Google Meet group"/>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default HomePage
