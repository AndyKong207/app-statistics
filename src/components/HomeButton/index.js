import React, { memo } from 'react';
import classNames from 'classnames'
import './index.css'

const HomeButton = memo((props) => {
  const { children, icon } = props
  return (
    <div className='home-button'>
      <i className={classNames('icon', `icon-${icon}`)}/>
      <div className='btn-text'>
        {children}
      </div>
    </div>
  );
});

export default HomeButton;