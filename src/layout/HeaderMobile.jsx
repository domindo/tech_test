import React, { useState } from "react"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap"
import { ListLearnDrop } from "."
import "./Layout.scss"
import { routePaths } from "~/constants"
import { useLocation, useNavigate } from "react-router-dom"

export const HeaderMobile = () => {
  const [open, setOpen] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const toggle = id => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }
  const headerItems = [
    {
      title: "Home",
      url: routePaths.app.home,
    },
    {
      title: "Our Programs",
      children: (
        <ListLearnDrop
          styleBox={{ width: "100%", position: "static" }}
          styleLink={{ width: "100%", height: "52px" }}
        />
      ),
    },
    {
      title: "About us",
      url: routePaths.app.aboutUs,
    },
    {
      title: "Waiting 1",
      url: routePaths.app.root,
    },
    {
      title: "Waiting 2",
      url: routePaths.app.root,
    },
  ]
  return (
    <>
      <Accordion
        flush
        open={open}
        toggle={toggle}
        style={{
          fontSize: "16px",
          borderTop: "1px solid #dee2e6",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 5px",
        }}
      >
        {headerItems.map(header => {
          return (
            <>
              {header?.children ? (
                <AccordionItem>
                  <AccordionHeader
                    targetId="2"
                    onClick={() => navigate(header?.url)}
                    className={
                      location?.pathname === header?.url ? "active" : ""
                    }
                  >
                    {header?.title}
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="2"
                    cssModule={{ paddingBottom: 0 }}
                    className="headerMobile-dropdown"
                  >
                    {header?.children}
                  </AccordionBody>
                </AccordionItem>
              ) : (
                <AccordionItem
                  style={{
                    height: "52px",
                    paddingLeft: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => navigate(header?.url)}
                  className={location?.pathname === header?.url ? "active" : ""}
                >
                  {header?.title}
                </AccordionItem>
              )}
            </>
          )
        })}
      </Accordion>
    </>
  )
}
