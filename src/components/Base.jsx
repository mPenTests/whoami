import React from 'react';

const Base = (props) => {
    return (
        <section id={props.id}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </section>
    );
}

export default Base;
