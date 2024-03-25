import React from "react"
import { TitleBox } from "~/components/Form"
import PropTypes from "prop-types"
import "./Programs.scss"

export const Structure = props => {
  const { listProgramStructure, ...propsBox } = props

  return (
    <TitleBox
      styleBox={{ backgroundColor: "transparent" }}
      title="Program structure"
      styleTitle={{ color: propsBox?.colorTitle ?? "#1178bb" }}
    >
      <div
        style={{
          maxWidth: "1250px",
          gap: "40px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="structure-container"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {listProgramStructure?.map(structure => {
          return (
            <div
              key={structure?.title}
              style={{
                backgroundColor: propsBox?.backgroundColorBox ?? "#e0f7ff",
                boxShadow: "0 2px 15px 0 #686868",
                borderRadius: "20px",
                flex: 1,
                maxWidth: "385px",
                overflow: "hidden",
              }}
              className="d-flex justify-content-start align-items-start flex-column"
            >
              <img
                src={structure?.imageUrl}
                loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 400px, 600px"
                srcSet={structure?.imageUrl}
                alt=""
                style={{
                  marginBottom: "10px",
                  maxWidth: "100%",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.target.style.transform = "scale(1.1)"
                }}
                onMouseLeave={e => {
                  e.target.style.transform = "scale(1)"
                }}
              />
              <div className="d-flex align-items-center flex-column structure-container_information">
                <h1
                  style={{
                    marginBottom: "20px",
                    fontWeight: 600,
                    color: propsBox?.colorTitle ?? "#1178bb",
                    fontSize: "28px",
                    textAlign: "center",
                    paddingTop: "20px",
                  }}
                >
                  {structure?.title}
                </h1>
                {structure?.children?.map(childItem => {
                  return (
                    <div
                      key={childItem?.imageUrl}
                      className="d-flex justify-content-start align-items-center"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <img
                        src={childItem?.imageUrl}
                        loading="lazy"
                        alt=""
                        style={{ width: "40px", marginRight: "10px" }}
                      />
                      <div
                        style={{
                          fontSize: "1rem",
                          alignSelf: "center",
                          textAlign: "left",
                        }}
                      >
                        {childItem?.content}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </TitleBox>
  )
}

Structure.propTypes = {
  listProgramStructure: PropTypes.any,
}
