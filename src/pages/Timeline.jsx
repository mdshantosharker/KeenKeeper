import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendsContext';

const Timeline = () => {
    const {timeline} = useContext(FriendsContext)
    console.log(timeline);
    return (
        <div>
            timeline
        </div>
    );
};

export default Timeline;