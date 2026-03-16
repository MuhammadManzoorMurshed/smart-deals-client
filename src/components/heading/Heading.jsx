import React from 'react';

const Heading = ({ headingTitle }) => {
    const { part1, part2 } = headingTitle;

    return (
        <div>
            <h1 className='font-bold text-5xl text-center'>{ part1 } <span className='text-gradient'>{ part2 }</span></h1>
        </div>
    );
};

export default Heading;