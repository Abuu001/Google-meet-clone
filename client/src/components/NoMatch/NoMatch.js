import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../UI/Header/Header'
import "./NoMatch.scss"

function NoMatch() {
    return (
        <div className="noMatch">
             <Header />

             <div className="nomatch__content">
                 <h2>Invalid Video Call Name</h2>

                 <div className="action__btn">
                     <Link to="/" className="btn green">
                         Return to home screen
                     </Link>
                 </div>
             </div>
        </div>
    )
}

export default NoMatch
