import * as React from 'react';

const nameCommonStyle = {
  width: '131px',
  height: '29px',
  left: '187px',
  top: '59px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '29px',
  /* identical to box height */
  textAlign: 'center',
  color: 'black',
};

const firstNameStyle = {
  color: '#020BE9',
};

const menuItem = {
  width: "75px",
  height: "19px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#616161"
}

const menuItemSpecialCase = {
  marginLeft: ''
}

export default () => {
  return (
    <div
      data-testid="header"
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className=" row"
    >
      <div style={nameCommonStyle} title="My name is Rahul Rana">
        <span style={firstNameStyle}>Rahul</span>
        <span style={{marginLeft: '8px'}}>Rana</span>
      </div>
      <div>
        <div style={menuItem} className="hoverClass">Home</div>
      </div>
    </div>
  );
};
