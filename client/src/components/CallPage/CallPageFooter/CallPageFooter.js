import React from 'react'
import "./CallPageFooter.scss"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MicIcon from '@material-ui/icons/Mic';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import MicOffIcon from '@material-ui/icons/MicOff';

function CallPageFooter({isPresenting,stopScreenShare,isAudio,disconnectCall,screenShare,toggleAudio}) {
    return (
        <div className="CallPageFooter">
            <div className="left__item">
                <div className="icon__block">Meeting details <ExpandLessIcon className="icon" /> </div>
            </div>

            <div className="center__item">
                <div className={`icon__block ${!isAudio ?  "red__bg" : null}`} onClick={()=>toggleAudio(!isAudio)}>
                    {isAudio ? <MicIcon className="icon"/> :  < MicOffIcon  className="icon"/> } 
                </div>

                <div className="icon__block" onClick={disconnectCall}>
                    <CallIcon className="icon red"/>
                </div>

                <div className="icon__block" >
                    <VideocamIcon className="icon  "/>
                </div>
            </div>

            <div className="right__item">
                <div className="icon__block">
                    <ClosedCaptionIcon className="icon red" />
                    <p className="title">Turn on captions</p>
                </div>

                    {isPresenting ?(
                        <div className="icon__block"  onClick={stopScreenShare  }>
                        <DesktopMacIcon className="icon red" />
                        <p className="title">Stop presenting</p>
                       </div>
                    ):(
                        <div className="icon__block"    onClick={screenShare}>
                        <DesktopMacIcon className="icon red"/>
                        <p className="title">Present now</p>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default CallPageFooter
