import * as React from 'react';
import Image from './image';

const User = (props) => {
  const { user, onClick, isActive } = props;
  return (
    <div
      className={`testimonials__user ${isActive ? 'active-user-test' : ''} hoverClass`}
      onClick={onClick}
    >
      <div className="testimonials__user-pic">
        <Image
          src={user.imgname || 'user.png'}
          alt="img"
          style={{
            width: '48px',
            height: '48px',
          }}
        />
      </div>
      <div className="testimonials__user-namejob">
        <div className="testimonials__user-name">{user.name}</div>
        <div className="testimonials__user-job">{user.job}</div>
      </div>
    </div>
  );
};

export default () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const users = [
    {
      name: 'Bisvarup Mukherjee',
      job: 'UI Engineer 2 at Uber',
      descHeading:`Mentored me before my Uber interview through his YouTube videos and in-person discussions`,
      desc: `Rahul mentored me before my Uber interview through his YouTube videos and in-person discussions, which were some clarifications of the content of the videos.

      Without his guidance, I would have been scrambling a number of topics before my round, and would not be able to do justice during the interview. He saved a lot of time for me.

      Keep helping folks with the informal & formal mentorship, and all the best for your growth as well.`
    },
    {
      name: 'Arindam Das',
      job: 'Sr Softare Engineer at Uber',
      descHeading: 'He is an exceptionally hard working and sincere engineer',
      desc: `I had the opportunity to work with Rahul during my stint at Uber. He is an exceptionally hard working and sincere engineer on whom you can depend. I have seen him working for different teams doings cross-team collaborations while delivering quality features. I have seen him revamping the entire UI experience for several of the products and mentoring a lot of junior members as a force multiplier.
      Keep up the good work!`
    },
    {
      name: 'Aashish Sharma',
      job: 'Cofounder at DolphinChat',
      descHeading:
        `He's a talented Developer and a hardworking guy.`,
      desc: `Rahul did a project for our company CivilCops. He's a talented Developer and a hardworking guy.`
    },
  ];
  return (
    <div className="testimonials row">
      <div className="testimonials__heading">Testimonials</div>
      <div className="testimonials__users-desc">
        <div className="testimonials__users-wrapper">
          {users.map((user, index) => {
            return (
              <div>
                {
                  <User
                    user={user}
                    isActive={index === selectedIndex}
                    onClick={() => setSelectedIndex(() => index)}
                  />
                }
              </div>
            );
          })}
        </div>
        <div className="testimonials__desc">
          <div className="testimonials__desc-heading">{users[selectedIndex].descHeading}</div>
          <div className="testimonials__desc-desc">{users[selectedIndex].desc}</div>
        </div>
      </div>
    </div>
  );
};
