import React from "react"
import { SliderCarousel } from "./SliderCarousel"

export const Testimonials = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://assets-global.website-files.com/5c00dc53f3b050cf867adc1c/64885c0e6c8d6b44b9630413_BA_Testimonial%20background%20(1)%20(1).png")`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundColor: "white",
      }}
      className="testimonials-container"
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "transparent",
          textAlign: "center",
          clear: "both",
          position: "relative",
        }}
        className="testimonials-container_box"
      >
        <h1
          style={{
            fontWeight: 600,
            color: "#1178bb",
            marginBottom: "30px",
            paddingTop: "20px",
          }}
        >
          Hear from happy TechTrain parents and students
        </h1>
        <SliderCarousel />
      </div>
    </div>
  )
}
