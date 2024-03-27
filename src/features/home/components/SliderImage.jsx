import React, { useEffect, useState } from "react"
import {
  blender,
  develop,
  machine_learning,
  python,
  roblox,
  scratch,
  tinker,
  typing_club,
  zoom,
} from "~/assets/images"
import "./Home.scss"

export const SliderImage = () => {
  const listImageSlider = [
    zoom,
    scratch,
    roblox,
    python,
    tinker,
    blender,
    typing_club,
    develop,
    machine_learning,
    zoom,
    scratch,
    roblox,
    python,
    tinker,
    blender,
    typing_club,
    develop,
    machine_learning,
    zoom,
    scratch,
    roblox,
  ]

  const [positionSlider, setPositionSlider] = useState(0)
  useEffect(() => {
    if (positionSlider === -2200) {
      setPositionSlider(120)
    }
    const slider = setTimeout(() => {
      setPositionSlider(positionSlider - 1)
    }, 8)
    return () => {
      clearTimeout(slider)
    }
  }, [positionSlider])
  return (
    <div
      className="d-flex flex-column align-items-start justify-content-center techTool-container"
      style={{ backgroundColor: "#ffe4e4", paddingBottom: "40px" }}
    >
      <div
        className="w-100 d-flex flex-column justify-content-center"
        style={{
          order: 0,
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#dd1717",
            paddingTop: "20px",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          Learning with real-world tech tools and platforms
        </h1>
      </div>
      <div
        className="w-100"
        style={{ alignSelf: "stretch", overflow: "hidden", order: 1 }}
      >
        <div
          className="d-flex justify-content-start align-items-center"
          style={{
            width: "1800px",
            willChange: "transform",
            transformStyle: "preserve-3d",
            transition: "all .2s",
            transform: `translate3d(${positionSlider}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            // pointerEvents:"none"
          }}
        >
          {listImageSlider.map((image, index) => {
            return (
              <img
                className="home_image"
                style={{
                  transition: "all .2s",
                  verticalAlign: "middle",
                  padding: "0 3rem",
                }}
                key={index}
                src={image}
                alt="slide-img"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
