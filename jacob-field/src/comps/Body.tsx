import * as React from "react";
import { Main } from "./Main.tsx";

export function Body() {
  return (
    <>
      <div className="mainBody">
        <div className="content-container">
          <h1 className="header-title">
            <span className="jacob">JACOB </span>&nbsp;FIELD
          </h1>
          <Main></Main>
        </div>
      </div>
    </>
  );
}
