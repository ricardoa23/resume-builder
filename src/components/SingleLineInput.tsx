import React, { Children } from "react";

interface SingleLineInputInterface{
    title: string;
}

const SingleLineInput = ({title = 'NEEDS TO Be Changed'}) => {
  return (
    <>
    <h3>{title}</h3>
      <input type="text" />
    </>
  );
};

export default SingleLineInput;
