import React from 'react'
import SignupForm from './SignupForm';

const LoginForm = ({ user, signUp, logIn, logOut }) => {
    return (
        <div>
            {
                user ? <div><button onClick={logOut}>Log out</button></div> :
                    <>
                        <SignupForm submit={signUp} header={'Sign up'} />
                        or
                        <SignupForm submit={logIn} header={'Log in'} />
                    </>
            }
        </div>
    )
}

export default LoginForm