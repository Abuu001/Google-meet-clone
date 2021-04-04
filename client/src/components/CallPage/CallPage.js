import React from 'react'
import "./CallPage.scss"
import CallPageFooter from './CallPageFooter/CallPageFooter'
import CallPageHeader from './CallPageHeader/CallPageHeader'
import MeetingInfo from './MeetingInfo/MeetingInfo'
import Messenger from "./Messenger/Messenger"

function CallPage() {
    return (
        <div className="CallPage">
            
            <video  className="Video__Container" src="" controls />
            <CallPageHeader />
            <CallPageFooter />
            <MeetingInfo />
            <Messenger />
        </div>
    )
}

export default CallPage
