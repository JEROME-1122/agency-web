import React from "react";

function Box({ title, des,img }) {
  return (
    <>
      {img ? (
        <img src={img} alt={title} className="w-full h-auto mb-4 mx-auto" />
      ) : null}
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4 ">
        <strong>{title}</strong>
      </h3>
      <p className="">{des}</p>
    </>
  );
}

export default Box;
