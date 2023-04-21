import React from 'react';

export default function Post ({ postInfo }) {
  const { id, username, created_datetime, title, content } = postInfo;
  const formatedDate = new Date(created_datetime);
  console.log(formatedDate.toTimeString());
  console.log(formatedDate.getMinutes());
  console.log('break line');
  return (
    <div>
      <p>{id}</p>
      <p>{username}</p>
      <p>{formatedDate.toTimeString()}</p>
      <p>{title}</p>
      <p>{content}</p>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
