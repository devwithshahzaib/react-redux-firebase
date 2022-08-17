import React from "react";

function BtnLoader() {
  return (
    <div>
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
       Loading...
    </div>
  );
}

export default BtnLoader;
