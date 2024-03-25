import React from "react"
import PropTypes from "prop-types"
import "./Teams.scss"

export const Teams = props => {
  const {
    imagesUrl = "",
    name = "",
    role = "",
    location = "",
    detail = "",
  } = props
  return (
    <div className="team-member">
      <div className="left-group">
        <img className="avatar-member" src={imagesUrl}></img>
        <div className="member-name">
          <strong>{name}</strong>
        </div>
        <div className="member-detail">
          <div className="member-role">{role}</div>
          <div className="member-location">
            <em>{location}</em>
          </div>
        </div>
      </div>
      <div className="padding-group"></div>
      <div className="right-group">{detail}</div>
    </div>
  )
}

Teams.propTypes = {
  imagesUrl: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  location: PropTypes.string,
  detail: PropTypes.string,
}
