import React, { useEffect, useReducer, useState } from 'react'
import "./CallPage.scss"
import CallPageFooter from './CallPageFooter/CallPageFooter'
import CallPageHeader from './CallPageHeader/CallPageHeader'
import MeetingInfo from './MeetingInfo/MeetingInfo'
import Messenger from "./Messenger/Messenger"
import {useHistory, useParams} from "react-router-dom"
import MessageListReducer from "../../components/Reducer/MessageListReducer"
import Peer from "simple-peer"
import { postRequest,getRequest } from '../utils/apiRequests'
import { BASE_URL,GET_CALL_ID,SAVE_CALL_ID } from '../utils/apiEndPoints'
import io from "socket.io-client"

function CallPage() {
//19:05
    let peer =null;
    const  socket =io.connect("http://localhost:3008")
    const initialState =[]
    const history=useHistory()
    let {id} = useParams();  
   const [screenCastStream, setScreenCastStream] = useState()
   const [isPresenting, setIsPresenting] = useState(false)
   const [isMessenger, setIsMessenger] = useState(false)
   const [isAudio, setIsAudio] = useState(true)
   const [streamObj, setStreamObj] = useState()
   const [messageAlert, setMessageAlert] = useState({})
   const [meetingInfoPopup,setMeetingInfoPopup] = useState(false)
   let alertTimeout = null
   const [messageList,messageListReducer] = useReducer(
    MessageListReducer,
    initialState
   )

    //check if user is admin
    const isAdmin =window.location.hash === '#init' ? true : false
    const url =`${window.location.origin}${window.location.pathname}`


    useEffect(()=>{
            if(isAdmin){
                setMeetingInfoPopup(true)
            }

            initWebRTC();

            socket.on('code',(data)=>{
                peer.signal(data)
            })
    },[])

    const getReceiverCode=async()=>{
        const res = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`)

        if(res.code){
            peer.signal(res.code)
        }
    }

    const initWebRTC=()=>{
        navigator.mediaDevices.getUserMedia({
            video:true,
            audio :true
        })
        .then((stream)=>{
            setStreamObj(stream);

          peer=  new Peer({
                initiator:isAdmin,
                trickle :false,
                stream:stream
            })

            if(!isAdmin){
                getReceiverCode()
            }

            peer.on('signal',async(data)=>{
                if(isAdmin){
                    let payload ={
                        id,
                        signalData : data
                    }
                    await postRequest(`${BASE_URL}${SAVE_CALL_ID}`,payload)
                }else{
                        socket.emit('code',(cbData)=>{
                            console.log("code sent");
                        })
                }
            })
  
            peer.on('connect',()=>{
                console.log("peer connected")
            })

            peer.on('stream',(stream)=>{
                let video =document.querySelector('video');

                if('srcObject' in video){
                    video.srcObject= stream
                }else{
                    video.src = window.URL.createObjectURL(stream)
                }

                video.play();
            })
        })
        .catch(err=>{
            console.log("error")
        })
    }

    const screenShare =()=>{
        navigator.mediaDevices.getDisplayMedia({cursor : true})
           .then(screenStream=>{
               peer.replaceTrack(
                   streamObj.getVideoTracks()[0],
                   screenStream.getVideoTracks(),
                   streamObj
               )
               setScreenCastStream(screenStream);
               screenStream.getTracks()[0].onended=()=>{
                   peer.replaceTrack(
                       screenStream.getVideoTracks()[0],
                       streamObj.getVideoTracks()[0],
                       streamObj
                   )
               }
               setIsPresenting(true)
           })
    }

    const stopScreenShare=()=>{
        screenCastStream.getVideoTracks().forEach((track)=>{
            track.stop()
        })
        peer.replaceTrack(
            screenCastStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
        )

        setIsPresenting(false)
    }

    return (
        <div className="CallPage">
            
            <video  className="Video__Container" src="" type="video/mp4" controls></video>
            <CallPageHeader />
            <CallPageFooter isPresenting={isPresenting}   stopScreenShare={stopScreenShare}/> 
            {(isAdmin && meetingInfoPopup) && (
                 <MeetingInfo setMeetingInfoPopup={setMeetingInfoPopup} url={url}/>
             )}
           
            <Messenger />
        </div>
    )
}

export default CallPage
