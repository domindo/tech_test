import React from "react"
import { listTechtrain } from "../constants"
import { ButtonHover } from "~/components/Button"
import { clickButtonScroll } from "~/utils"
import "./Home.scss"
export const TechtrainDifference = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center benefits-container"
      style={{
        backgroundColor: "rgba(74, 198, 124, .1)",
        paddingTop: "20px",
        paddingBottom: "40px",
      }}
    >
      <h1
        style={{
          color: "#179d50",
          fontWeight: 600,
          marginBottom: "30px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        Why parents choose TechTrain
      </h1>
      <div
        style={{ maxWidth: "1400px" }}
        className="d-flex justify-content-center"
        data-aos="fade-up"
      >
          <div
            style={{ marginTop: "20px" }}
            className="benefits-container_list"
          >
            {listTechtrain.map((tech, index) => {
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
                    src={tech.imageSrc}
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
                      {tech.title}
                    </div>
                    <div
                      className="w-100"
                      style={{ fontSize: "1rem", textAlign: "center" }}
                    >
                      {tech.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      <ButtonHover
        content="Experience a FREE trial"
        color="white"
        background="#179d50"
        styleButton={{
          fontWeight: 500,
          fontSize: "1.3rem",
          boxShadow: "0 2px 5px 0 #686868",
          border: "1px solid #179d50",
          padding: "9px 15px",
        }}
        onClick={()=>clickButtonScroll()}
      />
    </div>
  )
}
