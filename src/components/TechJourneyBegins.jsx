import React from "react"
import { ButtonHover } from "~/components/Button"
import { TripComponent } from "~/components/TripComponent"
import { listHowWork } from "~/features/home/constants"
import PropTypes from "prop-types"
import { clickButtonScroll } from "~/utils"
import "./TechJourneyBegins.scss"
import { TitleBox } from "./Form"

export const TechJourneyBegins = props => {
  const {
    listData = listHowWork,
    isShowButton = true,
    styleStrip = {},
    backgroundContainer = "rgba(74, 198, 124, .1)",
    colorTitleContainer,
  } = props
  return (
    <TitleBox
      title="Your child's tech journey begins here"
      colorTitle={colorTitleContainer ?? styleStrip?.colorId ?? "#179d50"}
      styleBox={{ backgroundColor: backgroundContainer }}
    >
      <div
        className="d-flex justify-content-center align-items-center flex-column techJourneyBegins-container"
        style={{
          padding: "0 5%",
          // backgroundColor: backgroundContainer,
          position: "relative",
        }}
      >
        <div
          className="d-flex justify-content-around align-items-center flex-column"
          style={{
            opacity: 1,
            zIndex: 2,
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="d-flex justify-content-center w-100 techJourneyBegins-container_list"
            style={{ gap: "30px" }}
          >
            {listData.map(work => {
              return (
                <TripComponent key={work?.id} list={work} {...styleStrip} />
              )
            })}
          </div>
          {isShowButton && (
            <ButtonHover
              styleButton={{
                border: "1px solid #179d50",
                fontSize: "1.3rem",
                fontWeight: 500,
                padding: "9px 15px",
                boxShadow: " 0 2px 5px 0 #686868",
              }}
              color="white"
              background="#179d50"
              content="Book your FREE trial"
              onClick={() => clickButtonScroll()}
              className="techJourneyBegins-container_btn"
            />
          )}
        </div>
      </div>
    </TitleBox>
  )
}
TechJourneyBegins.propTypes = {
  listData: PropTypes.any,
  isShowButton: PropTypes.bool,
  styleStrip: PropTypes.any,
  backgroundContainer: PropTypes.string,
  colorTitleContainer: PropTypes.string,
}
