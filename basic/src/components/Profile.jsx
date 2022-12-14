import React from 'react';

export default function Profile({image, name, title, isNew}) {
    return (
        <div className='profile'>
            <img className='photo' alt='avatar' src={image} />
            {isNew && <span className='new'>New</span> }
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

