import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { scratch_page1 } from "~/assets/images"
import { ButtonHover } from "~/components/Button"
import { WrapperForm } from "~/components/Form"
import PropTypes from "prop-types"
import "./Home.scss"

export const BoxExplore = props => {
  const {
    url = "#",
    textButton = "Learn more",
    title = "STEAM Discovery",
    content = "",
    imageBox = scratch_page1,
    styleButton,
  } = props

  return (
    <Link
      to={url}
      className="d-flex flex-column align-items-center programs-container_item"
      data-aos="fade-up"
    >
      <WrapperForm
        styleWrapper={{
          maxWidth: "320px",
          minWidth: "280px",
          marginTop: "100px",
          paddingTop: "149px",
          alignSelf: "auto",
          position: "relative",
        }}
      >
        <img
          className="w-100"
          src={imageBox}
          style={{
            position: "absolute",
            top: "-65px",
            bottom: "auto",
            left: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "450px",
            background: "white",
            padding: "0 20px 20px",
          }}
          className="d-flex flex-column align-items-start"
        >
          <h1
            style={{
              color: "#1178bb",
              fontWeight: 400,
              fontSize: "1.5rem",
              marginBottom: "20px",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            <strong>{title}</strong>
          </h1>
          <div
            style={{
              textAlign: "left",
              alignSelf: "center",
              fontSize: "1rem",
            }}
          >
            {content}
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              className="d-flex align-items-start"
              style={{ marginBottom: "8px" }}
            >
              <img
                src="https://assets-global.website-files.com/5c00dc53f3b050cf867adc1c/64ad9162d2a1ecdf6c29404b_Level.png"
                loading="lazy"
                alt=""
                style={{ width: "25px", marginRight: "10px" }}
              />
              <div
                style={{
                  textAlign: "left",
                  fontSize: "1rem",
                  alignSelf: "center",
                }}
              >
                Level: beginner
              </div>
            </div>
            <div
              className="d-flex align-items-start"
              style={{ marginBottom: "8px" }}
            >
              <img
                src="https://assets-global.website-files.com/5c00dc53f3b050cf867adc1c/64ad9345840cd198e49c4666_Age.png"
                loading="lazy"
                alt=""
                style={{ width: "25px", marginRight: "10px" }}
              />
              <div className="description">Ages: 5-11 years</div>
            </div>
            <div
              className="d-flex align-items-start"
              style={{ marginBottom: "8px" }}
            >
              <img
                src="https://assets-global.website-files.com/5c00dc53f3b050cf867adc1c/64ad9162a655edd542d87f73_Duration.png"
                loading="lazy"
                alt=""
                style={{ width: "25px", marginRight: "10px" }}
              />
              <div>
                Duration: 24 weeks
                <br />
                (3 x 8-week courses) <br />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            padding: "20px 0",
            backgroundColor: "#efefef",
          }}
        >
          <ButtonHover content={textButton} {...styleButton} />
        </div>
      </WrapperForm>
    </Link>
  )
}
BoxExplore.propTypes = {
  url: PropTypes.string,
  textButton: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  imageBox: PropTypes.any,
  styleButton: PropTypes.any,
}
