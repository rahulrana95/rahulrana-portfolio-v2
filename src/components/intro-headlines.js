import * as React from 'react';
import Image from './image';

const commonTextStyle = {
  width: '100%',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '50px',
  lineHeight: '65px',
  color: '#272732',
};

const blueColor = {
  color: '#020BE9',
};

const images = [
  { name: 'facebook.png', url: 'https://www.facebook.com/3rahul4/', title: 'Facebook Profile' },
  { name: 'twitter.png',url: 'https://twitter.com/rahulrana_95' , title: 'Twitter Profile'},
  { name: 'instagram.png',url: 'https://www.instagram.com/rahul_rana95/' , title: 'Instagram Profile'},
  { name: 'linkedin.png',url: 'https://www.linkedin.com/in/rahul-rana-b713499a/', title: 'Linkedin Profile' },
];
export default () => {
  return (
    <div data-testid="intro"  className="intro row">
      <div style={commonTextStyle}>
        I’m Rahul, a Software Engineer who loves to{' '}
        <span style={blueColor}>solve problems</span> that impacts millions of
        people through <span style={blueColor}>digital products</span>.
      </div>
      <div className="social-media-wrapper">
        {images.map((img, index) => {
          return (
            <div  onClick={() => window.open(img.url,"_blank")} className="hoverClass" title={img.title}>
            <Image
              src={img.name}
              className={index > 0 ? 'social-media-wrapper__item' : ''}
              alt="img"
              style={{
                width: '24px',
                height: '24px',
              }}

              />
              </div>
          );
        })}
      </div>
    </div>
  );
};
