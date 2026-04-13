import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendsDetails = () => {
    const {id} = useParams()
    const friends = useLoaderData()
    const expectedFriends = friends.find(friend=>friend.id==id)
    console.log(expectedFriends);
    return (
        <div>
            FriendsDetails
        </div>
    );
};

export default FriendsDetails;