import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const FormattedText = ({ text }) => {
  const isSmallPhone = useMediaQuery('(max-width:374px)');

  if (isSmallPhone) {
    const words = text.split(' ');

    if (words.length > 6) {
      const half = Math.ceil(words.length / 2);
      
      // Find the last space within the first half
      const lastSpaceIndex = words.slice(0, half).lastIndexOf(' ');

      // If lastSpaceIndex is -1, it means there is no space in the first half
      const splitIndex = lastSpaceIndex !== -1 ? lastSpaceIndex : half;

      const firstHalf = words.slice(0, splitIndex).join(' ');
      const secondHalf = words.slice(splitIndex).join(' ');

      return (
        <div>
          {firstHalf} <br /> {secondHalf}
        </div>
      );
    }
  }

  return text;
};

export default FormattedText;
