import React from "react"
import { BoxExplore } from "."
import {  listK12 } from "~/features/home/constants"
import "./Home.scss"
export const Program = () => {

  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center flex-column programs-container"
      style={{
        paddingBottom: "60px",
        paddingTop: "20px",
        fontSize: "1rem",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div style={{ maxWidth: "920px", textAlign: "center" }}>
        <h1
          className="programs-container_title"
        >
          Chương trình phổ thông
          <br/>
          (K12 programs)
        </h1>
        <div style={{ textAlign: "center", fontSize: "1rem" }}>
          Dive into block-based coding, 3D design, game development,
          programming, AI &amp; machine learning. Each TechTrain Program offers
          a unique tech adventure for curious young minds.
        </div>
      </div>
      <div
        style={{ maxWidth: "1200px" }}
        className="d-flex justify-content-center flex-wrap align-items-center programs-container_list"
      >
        {listK12.map((item, index) => {
          return <BoxExplore key={index} {...item} />
        })}
      </div>
    </div>
  )
}
