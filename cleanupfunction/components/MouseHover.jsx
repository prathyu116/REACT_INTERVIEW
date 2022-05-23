import React, { useEffect, useState } from "react";

const MouseHover = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function logMousePos(e) {
    console.log("MOUSE MOVE");
    setY(e.clientY);
    setX(e.clientX);
  }

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePos);
    return (()=>{
        console.log("unmounted");  //ith koduthillenkil memmory leake nte error kanikkum
        window.removeEventListener("mousemove",logMousePos)
    })
  }, []);
  return (
    <div>
      X-{x} Y-{y}
    </div>
  );
};

export default MouseHover;
