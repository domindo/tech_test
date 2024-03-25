import React from "react"
import PropTypes from "prop-types"
import "./TechJourneyBegins.scss"

export const TripComponent = props => {
  const {
    list: { id = "", imageUrl = "", title = "", content = "" },
    ...styleTrip
  } = props

  return (
    <div
      data-aos="fade-up"
      key={id}
      className="d-flex align-items-center flex-column trip-container"
      style={{
        minWidth: 0,
        minHeight: "auto",
        color: "black",
        backgroundColor: styleTrip?.backgroundTrip ?? "transparent",
        marginBottom: "20px",
        padding: "30px 20px 25px",
        borderRadius: "10px",
        boxShadow: "0 2px 9px rgba(0,0,0,.2)",
        position: "relative",
      }}
    >
      <div
        className="d-flex align-items-center flex-column"
        style={{
          position: "absolute",
          top: "-7%",
          bottom: "auto",
          right: 0,
          left: 0,
        }}
      >
        <p
          style={{
            color: styleTrip.colorId ?? "#179d50",
            fontSize: "27px",
            fontWeight: 700,
            width: "50px",
            height: "50px",
            border: `3px solid ${styleTrip.colorId ?? "#179d50"}`,
            backgroundColor: "white",
            borderRadius: "50px",
            textAlign: "center",
          }}
          className="d-flex justify-content-center align-items-center trip-container_id"
        >
          {id}
        </p>
      </div>
      <img
        style={{ width: "100px" }}
        src={imageUrl}
        loading="lazy"
        alt=""
        className="step-img"
      ></img>
      <div className="d-flex flex-column align-items-center">
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 500,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "1rem",
            alignSelf: "center",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  )
}
TripComponent.propTypes = {
  list: PropTypes.any,
  colorId: PropTypes.string,
  backgroundTrip: PropTypes.string,
}
