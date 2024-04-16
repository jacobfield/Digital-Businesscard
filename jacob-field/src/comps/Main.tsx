import * as React from "react";
import { Info } from "./Info.tsx";
export function Main() {
  return (
    <>
      <div className="arch-div">
        <img
          className="profile-pic"
          src="Linkedin.png"
          alt="Jacob Field profile "
        />
      </div>
      <Info />
    </>
  );
}
