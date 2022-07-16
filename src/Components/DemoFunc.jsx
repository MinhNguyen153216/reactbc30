//rfc : React function component

import React from "react";

export default function DemoFunc() {
  //Nội dung của component phải được bao phủ bởi 1 thẻ (vd: <div></div>)
  return (
    <div>
      DemoFunc
      <div className="card text-start">
        <img className="card-img-top" src="text-start" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}
