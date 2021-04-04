import React from 'react'
import "./Messenger.scss"
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Messenger() {
    return (
        <div className="messenger">
            <div className="messenger__header">
                <h1>Meeting Details</h1>
                <ClearIcon className="icon" />
            </div>

            <div className="messenger__header__tabs">
                <div className="tab">
                    <PeopleIcon className="icon"  />
                    <p>People(1)</p>
                </div>
                
                <div className="tab active">
                    <ChatBubbleIcon className="icon" />
                <p>Chat</p>
                </div>
            </div>

            <div className="chat__section">
                <div className="chat__block">
                    <div className="sender">
                        you <small>10 PM</small>
                    </div>

                    <p className="msg">Actual message</p>
                </div>
            </div>

            <div className="send__msg__section">
                <input placeholder="Send a message to everyone"/>
                <SendIcon   className="icon"/>
            </div>
        </div>
    )
}

export default Messenger
