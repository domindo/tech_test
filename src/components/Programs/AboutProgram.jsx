import React from "react"
import { ButtonHover } from "../Button"
import PropTypes from "prop-types"
import { clickButtonScroll } from "~/utils"
import "./Programs.scss"

export const AboutProgram = props => {
  const { content, listProgramsDetail = [], ...propsBox } = props

  return (
    <div
      style={{
        paddingBottom: "40px",
        backgroundColor: "transparent",
        paddingTop: "20px",
      }}
      className="d-flex flex-column align-items-center aboutProgram-container"
    >
      <div
        style={{ maxWidth: "1280px", gap: "60px", padding: "20px" }}
        className="d-flex aboutProgram-container_box"
      >
        <div
          className="d-flex flex-column justify-content-start align-items-start"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1
            style={{
              paddingTop: "20px",
              marginBottom: "30px",
              fontWeight: 600,
              color: propsBox?.colorTitle ?? "#1178bb",
              marginTop: 0,
            }}
            className="aboutProgram-container_title"
          >
            About the Program
          </h1>
          <div style={{ fontSize: "1rem", marginBottom: "10px" }}>
            {content}
          </div>
        </div>
        <div
          style={{
            borderRadius: "20px",
            boxShadow: "0 2px 15px 0 #686868",
            backgroundColor: propsBox?.backgroundColorDetail ?? "#e0f7ff",
          }}
          className="d-flex flex-column align-items-center aboutProgram-container_detail"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: 600,
              color: propsBox?.colorTitle ?? "#1178bb",
            }}
          >
            Program Details
          </h1>
          <div className="aboutProgram-container_items">
            {listProgramsDetail.map((detail, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="d-flex align-items-center"
                    style={{ marginBottom: "5px" }}
                  >
                    <img
                      style={{ width: "25px", marginRight: "10px" }}
                      src={detail.imageUrl}
                      loading="lazy"
                      alt=""
                    />
                    <div style={{ color: "#333" }}>{detail.content}</div>
                  </div>
                  {detail?.children?.length > 0 &&
                    detail?.children?.map(childItem => {
                      return (
                        <div
                          key={childItem?.content}
                          className="d-flex align-items-center"
                          style={{ marginBottom: "5px", marginLeft: "35px" }}
                        >
                          <img
                            style={{ width: "25px", marginRight: "10px" }}
                            src={childItem?.imageUrl}
                            loading="lazy"
                            alt=""
                          />
                          <div
                            style={{
                              color: "#33333",
                              fontStyle: "italic",
                              opacity: 0.8,
                            }}
                          >
                            {childItem?.content}
                          </div>
                        </div>
                      )
                    })}
                </>
              )
            })}
          </div>
          <ButtonHover
            color="white"
            background={propsBox?.colorTitle ?? "#1178bb"}
            styleButton={{
              border: `1px solid ${propsBox?.colorTitle ?? "#1178bb"}`,
              fontSize: "1.3rem",
              boxShadow: "0 2px 5px 0 #686868",
              borderRadius: "10px",
              fontWeight: 500,
              padding: "9px 15px",
              marginTop: "20px",
            }}
            onClick={() => clickButtonScroll()}
            content="Join our FREE session"
          />
        </div>
      </div>
    </div>
  )
}
AboutProgram.propTypes = {
  content: PropTypes.any,
  listProgramsDetail: PropTypes.any,
}
