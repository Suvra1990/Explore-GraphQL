import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">Stayin</div>
                    <Link to="/" className="ml1 no-underline black">
                        Home
                    </Link>
                    <Link to="/properties" className="ml1 no-underline black">
                        Properties
                    </Link>
                    <Link to="/hotels" className="ml1 no-underline black">
                        Hotels
                    </Link>
                    <Link to="/createProperty" className="ml1 no-underline black">
                        Create property
                    </Link>
                    <Link to="/createRoom" className="ml1 no-underline black">
                        Create room
                    </Link>
                    {authToken && (
                        <div className="flex">
                        <div className="ml1">|</div>
                        <Link to="/signup" className="ml1 no-underline black">
                            Create
                        </Link>
                        </div>
                    )}
                </div>
                <div className="flex flex-fired">
                    {authToken ? (
                        <div className="ml1 pointer black"
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                            this.props.history.push('/')
                        }}
                        >
                            logout
                        </div>
                    ) : (
                        <Link to="/login" className="ml1 no-underline black">
                            login
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(Header)