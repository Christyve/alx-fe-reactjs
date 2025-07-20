import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '20px', borderRadius: '8px', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
