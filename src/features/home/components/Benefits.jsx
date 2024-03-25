import React from "react"
import { listBenefits } from "../constants"
import "./Home.scss"

export const Benefits = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center benefits-container"
      style={{
        backgroundColor: "rgba(27, 167, 224, .2)",
        padding: "40px 5% 20px",
        fontSize: "16px",
      }}
    >
      <h1
        style={{
          color: "#1178bb",
          fontWeight: 600,
          marginBottom: "30px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        Shaping tomorrow's tech-savvy global citizens
      </h1>
      <div
        style={{ maxWidth: "1400px" }}
        className="d-flex justify-content-center"
      >
        <div>
          <div className="div-block-151">
            <div className="benefits-container_description padding-10">
              At TechTrain, we go beyond simply teaching coding. We strive to
              cultivate lifelong curiosity and innovative thinking in children.
              Our unique STEAM &amp; Creative tech curriculum combines technical
              learning, topic-specific English skills, critical thinking and
              collaboration. We provide our learners with the tools to succeed
              in a future shaped by constant technological change.
            </div>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="benefits-container_list"
            data-aos="fade-up"
          >
            {listBenefits.map((benefit, index) => {
              return (
                <div
                  key={index}
                  style={{
                    padding: "0 10px",
                    marginBottom: "20px",
                  }}
                  className="d-flex flex-column justify-content-start align-items-center benefits-container_item"
                >
                  <img
                    src={benefit.imageSrc}
                    loading="lazy"
                    width="100"
                    alt=""
                    style={{
                      width: "80px",
                      marginBottom: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div
                      style={{
                        textAlign: "center",
                        marginBottom: "5px",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                      }}
                    >
                      {benefit.title}
                    </div>
                    <div
                      className="w-100"
                      style={{ fontSize: "1rem", textAlign: "center" }}
                    >
                      {benefit.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
