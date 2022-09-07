import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Chevron = ({ func }) => {
  return (
    <div className="flex justify-center p-10">
      <BsChevronDown
        size="1.5rem"
        onClick={func}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

Chevron.defaultProps = {
  func: () => {},
};

export default Chevron;
