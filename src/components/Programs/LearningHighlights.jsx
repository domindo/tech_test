import React from "react"
import { TitleBox } from "~/components/Form"
import { TitleContainer } from "./TitleContainer"
import PropTypes from "prop-types"
import "./Programs.scss"

export const LearningHighlights = props => {
  const {
    listLearningHighLight = [],
    listSoftSkill = {},
    listTopics = [],
    listPlatforms = [],
    ...propsBox
  } = props

  return (
    <TitleBox
      styleBox={{ backgroundColor: propsBox?.backgroundColorBox ?? "#e0f7ff" }}
      title="Learning goal highlights"
      styleTitle={{ color: propsBox?.colorTitle ?? "#1178bb" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          gap: "60px",
          flex: "0 auto",
        }}
        className="d-flex flex-row learningHighlights-container"
      >
        <div
          style={{ backgroundColor: "transparent" }}
          className="d-flex justify-content-center algin-items-start flex-column"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {listLearningHighLight.map((item, index) => {
            return (
              <div
                key={`${index}_${item.title}`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  marginBottom: "20px",
                }}
                className="d-flex learningHighlights-container_item"
              >
                <img
                  src={item?.imageUrl}
                  loading="lazy"
                  width="80"
                  height="80"
                  alt=""
                  className="image-102"
                />
                <div
                  className="d-flex justify-content-center flex-column learningHighlights-container_content"
                  style={{ marginLeft: "20px" }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                    className="learningHighlights-container_title"
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      alignSelf: "center",
                    }}
                    className="learningHighlights-container_sub"
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div
          style={{
            padding: "20px 20px 20px 30px",
            borderRadius: "20px",
            boxShadow: "0 2px 15px 0 #686868",
            backgroundColor: "white",
            maxWidth: "400px",
          }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <TitleContainer title="Acquired soft skills">
            <div
              className="d-flex flex-wrap"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              {listSoftSkill?.list?.map((skill, index) => {
                return (
                  <div
                    key={{ index }}
                    style={{
                      backgroundColor:
                        listSoftSkill?.backgroundColor ??
                        propsBox?.backgroundColorBox,
                      color: listSoftSkill?.color ?? propsBox?.colorTitle,
                      borderRadius: "10px",
                      alignSelf: "center",
                      marginBottom: "10px",
                      marginRight: "10px",
                      padding: "5px 15px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {skill}
                  </div>
                )
              })}
            </div>
          </TitleContainer>
          <TitleContainer title="Topics">
            <div
              className="d-flex flex-nowrap justify-content-start w-100"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              {listTopics.map((topic, index) => {
                return (
                  <div
                    key={index}
                    style={{ width: "35%", marginRighT: "20px" }}
                    className="d-flex flex-column align-items-center"
                  >
                    <img
                      src={topic.imageUrl}
                      loading="lazy"
                      height="80"
                      width="80"
                      alt=""
                      style={{
                        borderRadius: "20px 20px 0 0",
                        marginBottom: "10px",
                      }}
                    />
                    <div style={{ textAlign: "center", fontWeight: 500 }}>
                      {topic.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </TitleContainer>
          <TitleContainer title="Platforms">
            <div
              className="d-flex flex-nowrap justify-content-start w-100"
              style={{ gap: "30px" }}
            >
              {listPlatforms.map((topic, index) => {
                return (
                  <img
                    key={index}
                    src={topic.imageUrl}
                    loading="lazy"
                    width="80"
                    alt=""
                    style={{
                      transition: "all .2s",
                      objectFit: "fill",
                    }}
                    className="img_platform"
                  />
                )
              })}
            </div>
          </TitleContainer>
        </div>
      </div>
    </TitleBox>
  )
}
LearningHighlights.propTypes = {
  listLearningHighLight: PropTypes.any,
  listSoftSkill: PropTypes.any,
  listTopics: PropTypes.any,
  listPlatforms: PropTypes.any,
}
