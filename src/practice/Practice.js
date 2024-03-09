import React, { useState } from 'react';

const Practice = () => {

  const [isHovered, setIsHovered] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    console.log('mouse enter');
    // setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('mouse leave');
    // setIsHovered(false);
  };

  // const handleClick = () => {
  //   console.log('click event fired');
  //   // setIsClicked(isClicked);
  // };

  return (
    <div>
      <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        Hover over me!
      </div>

      {/* <button onClick={handleClick}>
        {isClicked ? 'Clicked' : 'Click me'}
      </button> */}
    </div>
  );
};

export default Practice;
