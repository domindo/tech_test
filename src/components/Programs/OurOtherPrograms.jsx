import React, { useState } from "react"
import { TitleBox } from "~/components/Form"
import "./Programs.scss"
import { ButtonHover } from "~/components/Button"
import { listItemOurPrograms } from "./constants"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

export const OurOtherPrograms = props => {
  const { listItem = listItemOurPrograms, ...propsBox } = props
  const [listItemsScroll, setListItemsScroll] = useState(listItem)
  const navigate = useNavigate()
  const [positionItem, setPositionItem] = useState(0)
  const handleIconLeft = () => {
    console.log("window.innerWidth", window.innerWidth)
    // if (positionItem < 360 * 5 - window.innerWidth) return
    // setPositionItem(prev => prev - 360)
    setTimeout(()=>{
      setListItemsScroll(prev=>{
        const firstItem = prev.shift()
        return [...prev,firstItem]
      })
    },100)
  }
  const handleIconRight = () => {
    // if (positionItem > 360 * 5 - window.innerWidth) return
    // setPositionItem(prev => prev + 360)
    setListItemsScroll(prev=>{
      const lastItem = prev.pop()
      return [lastItem,...prev]
    })
  }

  return (
    <TitleBox
      styleBox={{ backgroundColor: "transparent" }}
      title="Our other Programs"
      styleTitle={{ color: propsBox?.colorTitle ?? "#007aac" }}
    >
      <div className="ourPrograms">
        <div className="ourPrograms-container">
          <div
            className="ourPrograms-list"
            style={{ transform: `translateX(${positionItem}px)` }}
          >
            {listItemsScroll?.map(item => {
              return (
                <div key={item?.title} className="ourPrograms-list_item">
                  <h1 style={{color: propsBox?.colorTitle ?? "#007aac"}} aria-hidden="true">{item?.title}</h1>
                  <p>{item?.content}</p>
                  <div className="ourPrograms-list_img">
                    <img
                      src={item?.imageUrl}
                      loading="lazy"
                      sizes="(max-width: 479px) 300px, (max-width: 767px) 288px, 324px"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                  <ButtonHover
                    content="Learn more"
                    color={propsBox?.colorTitle ?? "#007aac"}
                    styleButton={{
                      padding: "9px 15px",
                      fontSize: "1.3rem",
                      width: "200px",
                      textAlign: "center",
                      position: "absolute",
                      bottom: 0,
                      marginBottom: "40px",
                      boxShadow: "0 2px 5px 0 #686868",
                    }}
                    onClick={()=>{navigate(item?.path)}}
                  />
                </div>
              )
            })}
          </div>
          <div className="ourPrograms-icon left" onClick={handleIconLeft}>
            <i
              style={{
                color: propsBox?.colorTitle ?? "#007aac",
                fontWeight: 400,
                fontSize: "3rem",
              }}
              className="fas fa-chevron-left"
            ></i>
          </div>
          <div className="ourPrograms-icon right" onClick={handleIconRight}>
            <i
              style={{
                color: propsBox?.colorTitle ?? "#007aac",
                fontWeight: 400,
                fontSize: "3rem",
              }}
              className="fas fa-chevron-right"
            ></i>
          </div>
        </div>
      </div>
    </TitleBox>
  )
}
OurOtherPrograms.propTypes = {
  listItem: PropTypes.any,
  color: PropTypes.string,
}
