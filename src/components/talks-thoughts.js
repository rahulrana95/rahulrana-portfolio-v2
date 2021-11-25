import * as React from 'react';
import Image from './image';

export default () => {
  const arrowEl = (
    <Image
      src="up-arrow.png"
      alt="img"
      style={{
        width: '24px',
        height: '24px',
      }}
    />
  );

  return (
    <div className="talks  row">
      <div className="talks_heading">Talks and Blogs</div>
      <div className="talks_items">
        <div className="talks__item">
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Image
            src="map-class.png"
            alt="img"
            style={{
              width: '300px',
              height: '300px',
            }}
            />
            </div>
          <div className="talks__item-heading hoverClass">
            Implementing Map Class
            <a href="https://medium.com/weekly-webtips/implementing-own-map-class-javascript-8d31d92478a2" target="_blank"> {arrowEl}</a>
          </div>
        </div>
        <div className="talks__item" >
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Image
            src="luca-rossi-tech-talk.webp"
            alt="img"
            style={{
              width: '300px',
              height: '300px',
            }}
            />
            </div>
          <div className="talks__item-heading hoverClass">
            Coffee Tech Talks with Luca Rossi
            <a href="https://www.youtube.com/watch?v=SbWgU_G8p0Y&t=11s" target="_blank">{arrowEl}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
