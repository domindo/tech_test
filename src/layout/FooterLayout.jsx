import React from "react"
import "./Layout.scss"
import { fb, phone, zalo } from "~/assets/images"
import { activePage } from "~/constants"
import { useLocation } from "react-router-dom"
import { FormSubmit } from "."

const FooterLayout = () => {
  const location = useLocation()
  console.log("params", location?.pathname)

  return (
    <div
      className="d-flex align-items-center justify-content-center footer-container"
      style={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        background: activePage?.find(page => page.url === location?.pathname)
          ?.backgroundColor,
        padding: "20px 0",
      }}
    >
      <div
        className="d-flex footer-container_box"
        style={{
          maxWidth: "1080px",
          padding: "20px",
          gap: "20px",
          color: "white",
        }}
      >
        <div className="d-flex flex-column footer-container_information">
          <div>
            <h1
              style={{
                display: "inline-block",
                fontWeight: 600,
                marginBottom: "20px",
              }}
              className="footer-container_title"
            >
              Have more questions?
            </h1>
            <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
              Get in touch with our dedicated team. We're eager to help you
              choose the perfect program for your child and answer any question
              you may have.
            </p>
            <div className="d-flex flex-row">
              <a
                target="_blank"
                style={{ marginRight: "20px" }}
                className="d-flex align-items-center"
              >
                <img
                  className="contact-medthod-logo"
                  src={fb}
                  alt="facebook"
                  style={{
                    width: "65px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    transition: "all 0.2s",
                  }}
                />
              </a>
              <a
                target="_blank"
                style={{ marginRight: "20px" }}
                className="d-flex align-items-center"
              >
                <img
                  className="contact-medthod-logo"
                  src={phone}
                  alt="facebook"
                  style={{
                    width: "65px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    transition: "all 0.2s",
                  }}
                />
              </a>
              <a
                target="_blank"
                style={{ marginRight: "20px" }}
                className="d-flex align-items-center"
              >
                <img
                  className="contact-medthod-logo"
                  src={zalo}
                  alt="facebook"
                  style={{
                    width: "65px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    transition: "all 0.2s",
                  }}
                />
              </a>
            </div>
          </div>
          <div>
            <h1
              style={{
                fontWeight: 600,
                fontSize: "2rem",
                marginBottom: "20px",
                paddingTop: "20px",
              }}
            >
              Contact
            </h1>
            <p
              style={{
                fontSize: "1rem",
                textAlign: "left",
                marginBottom: "10px",
              }}
            >
              Tel/WA/Zalo: +84 (0) 899 327 527
              <br />
              Email: hello@techtrainasia.com
            </p>
          </div>
          <h1
            style={{
              fontWeight: 600,
              fontSize: "2rem",
              marginBottom: "20px",
              paddingTop: "20px",
            }}
          >
            Opening hours
          </h1>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            Monday - Thursday: 8am - 8pm
            <br />
            Friday - Sunday: 8am - 6pm
          </p>
        </div>
        <div className="footer-container_fields">
          <div
            className="d-flex flex-column align-items-center footer-container_forms"
            style={{
              boxShadow: "0 2px 15px 0 #686868",
              borderRadius: "20px",
              background: "white",
              padding: "40px 18px 18px 18px",
            }}
          >
            <div
              style={{
                color: activePage?.find(page => page.url === location?.pathname)
                  ?.backgroundColor,
                fontWeight: 600,
                marginBottom: "10px",
                textAlign: "center",
              }}
              className="footer-container_header"
            >
              See the TechTrain difference
              <br />
            </div>
            <div
              style={{
                width: "80%",
                color: "#333",
                marginBottom: "20px",
                fontWeight: 400,
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              Enter your details and we will schedule a FREE trial at your
              convenience
            </div>
            <div
              style={{ alignSelf: "auto", marginTop: "10px" }}
              className="d-flex flex-column align-items-center w-100"
            >
              <FormSubmit />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLayout
