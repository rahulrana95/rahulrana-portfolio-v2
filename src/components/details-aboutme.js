import React from 'react';
import Image from './image';

export default () => {
  return (
    <div className="about-me  row">
      <div className="about-me_text">
        <div className="aboutme_text-part1">
          I’m currently a SDE II at Uber building the future of mobility.
          Previously I have experience building systems at scale for companies
          like Directi, Rivigo and Helpshift.
        </div>
        <div className="aboutme_text-part2">
          {' '}
          specialise in frontend engineering for both the web and mobile apps
          and thrive in 0 --> 1 work. My focus is in user experience, codebase,
          and one more thing. My code focus is on React, CSS architecture and
          component systems.
        </div>
        <div className="aboutme_text-part3">
          I’m currently available for development advising roles for early stage
          startups and mentorship for recent graduates.
        </div>
        <div className="contact-me">
          <a
            href="https://www.linkedin.com/in/rahul-rana-b713499a/"
            target="_blank"
          >
            Contact me
          </a>
        </div>
      </div>
      <div title="A pic of myself from Agumbe." className="my-main-pic">
        <Image
          src="rahulrana.jpeg"
          className={'user-profile'}
          alt="img"
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '30px',
            boxShadow: '5px 10px #020BE9',
          }}
        />
      </div>
    </div>
  );
};
