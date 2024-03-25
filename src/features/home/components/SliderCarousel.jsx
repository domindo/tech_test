import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import "./Home.scss"
import { imagesCarousel } from "~/features/home/constants"

export const SliderCarousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Carousel
      slide
      fade
      prevIcon={
        <i
          style={{ color: "#007aac", fontWeight: 400, fontSize: "3rem" }}
          className="fas fa-chevron-left"
        ></i>
      }
      nextIcon={
        <i
          style={{ color: "#007aac", fontWeight: 400, fontSize: "3rem" }}
          className="fas fa-chevron-right"
        ></i>
      }
      style={{ position: "static" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {imagesCarousel.map((image, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                style={{
                  width: "120px",
                  height: "120px",
                  marginBottom: "16px",
                  borderRadius: "100px",
                  border: "4px solid #1178bb",
                  boxShadow: "0 2px 5px 0 #686868",
                }}
                src={image.src}
                alt={image.name}
              />
              <div
                style={{
                  marginBottom: "6px",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                {image?.name}
              </div>
              <div
                style={{
                  marginBottom: "24px",
                  fontSize: "1rem",
                  fontWeight: 300,
                  textAlign: "center",
                }}
              >
                {image?.position}
              </div>
              <div
                style={{
                  width: "255px",
                  height: "1px",
                  marginBottom: "24px",
                  backgroundColor: "#179d50",
                }}
              ></div>
            </div>
            <Carousel.Caption
              style={{
                position: "static",
                width: "80%",
                textAlign: "center",
                color: "#333",
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              {image.caption}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
