import React from "react"
import { ButtonHover } from "~/components/Button"
import PropTypes from "prop-types"
import { clickButtonScroll } from "~/utils"
import "./Programs.scss"
export const HeroPrograms = props => {
  const { items, ...propsBox } = props

  return (
    <div
      style={{
        backgroundImage: `url(${items?.imageUrl})`,
        backgroundSize: "cover",
        minHeight: "500px",
        backgroundColor: "transparent",
      }}
      className="d-flex align-items-center justify-content-center flex-column w-100 heroPrograms-container"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="heroPrograms-container_box"
      >
        <div className="d-flex flex-column heroPrograms-container_information" data-aos="zoom-in-right">
          <h2
            style={{
              color: propsBox?.color ?? "#1178bb",
              fontWeight: 600,
              marginBottom: "40px",
            }}
            className="heroPrograms-container_title"
          >
            {items?.title}
          </h2>
          <p
            style={{
              alignSelf: "center",
              fontSize: "1rem",
              marginBottom: "10px",
            }}
            className="heroPrograms-container_content"
          >
            {items?.content}
            <br />
            &zwj;
          </p>
          <ButtonHover
            color="white"
            background={propsBox?.color ?? "#1178bb"}
            styleButton={{
              border: `1px solid ${propsBox?.color ?? "#1178bb"}`,
              padding: "9px 15px",
              fontSize: "1.3rem",
            }}
            onClick={() => {
              clickButtonScroll()
            }}
            content={items?.textButton}
          />
        </div>
      </div>
    </div>
  )
}

HeroPrograms.propTypes = {
  color: PropTypes.string,
  items: PropTypes.any,
}
