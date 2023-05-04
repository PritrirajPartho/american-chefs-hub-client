import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const{user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <p>{user && <Image className='w-50 h-50 mb-2' src={user?.photoURL} roundedCircle />}</p>
            {/* <span>{user?.displayName}</span> */}
        </div>
    );
};

export default Profile;