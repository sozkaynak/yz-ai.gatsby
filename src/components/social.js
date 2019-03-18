import React from 'react';
import { SocialIcon } from 'react-social-icons';


const iconStyle = {
  height: 40,
  width: 40,
  marginRight: '0.25rem',
};

const Social = () => (
  <div>
    <SocialIcon color="#17a2b8" style={iconStyle} url="mailto:yazearin@gmail.com" />
  </div>
);

export default Social;
