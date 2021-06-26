import React from 'react';
import md5 from 'md5'

function Gravatar(props) {
    const email = props.email;
    // console.log(email)
    const hash = md5(email);
    // console.log(hash);
    // console.log(props);

    return (
        <img className={props.className} src={`http://gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/>
    )



}

export default Gravatar;