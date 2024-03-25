import React from "react"
import { FormSubmit } from "~/layout/index.js"
import "react-phone-number-input/style.css"
import "./AboutUs.scss"
import { listTeam, listTeamSupport } from "../constants/index.js"
import { Teams } from "~/features/aboutUs/components"

export const AboutUs = () => {
  return (
    <div className="w-100">
      <div className="header-aboutus ">
        <div className="banner-aboutus">
          <div className="banner-group">
            <h1 className="title-group">Test Git action</h1>
            <p className="header-text-group">
              At TechTrain, we know that tech literacy is essential for the 21st
              century learner; it trains the mind to think, and equips us
              <strong> the challenges of Industry 4.0.</strong>
              <br />
              <br />
              Our international team of education and tech specialists design
              and deliver learning paths and solutions to captivate students.
              <br />
              <br />
              <strong>Tomorrow’s leaders learn with TechTrain!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="founder-container d-flex flex-column justify-content-center ">
        <div className="founder-group">
          <h1 className="title-founder ">Words from our founder</h1>
          <div className="text-founder">
            <e>
              " My generation has witnessed digital technologies steadily appear
              in every aspect of our lives, impacting the way we work, travel,
              shop, learn and even play.
              <br />
              <br />
              I founded TechTrain with the firm belief that technology should
              not dominate the lives of our children! They must become more than
              simple technology consumers by engaging with it in healthy and
              useful ways. They must learn to harness it, to shape it, and to
              create it, in order to meet the major challenges in their lives,
              in professional and social contexts, and at local and global
              scales.
              <br />
              <br />
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Education is being disrupted worldwide, and a rethink of how we
              teach and learn is underway. TechTrain's vision is to adapt the
              'toolkit' that a school provides to its students, allowing them to
              become the effective problem-solvers and leaders of the future.
              This toolkit integrates tech literacy and global awareness with a
              mix of essential skills: critical-collaborative-computational
              thinking abilities, based in, and through, English language
              acquisition. "
              <br />
              <br />
            </e>
            <strong>Christo Hughes, Founder & CEO</strong>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="team-container">
          <h1 className="title-team">Cố vấn</h1>
          <div>
            {listTeam.map((teams, index) => {
              return (
                <Teams
                  key={index}
                  imagesUrl={teams?.imagesUrl}
                  name={teams?.name}
                  role={teams?.role}
                  location={teams?.location}
                  detail={teams?.detail}
                />
              )
            })}
          </div>
          <h1 className="title-team">Đội ngũ</h1>
          <div>
            {listTeamSupport.map((teams, index) => {
              return (
                <Teams
                  key={index}
                  imagesUrl={teams?.imagesUrl}
                  name={teams?.name}
                  role={teams?.role}
                  location={teams?.location}
                  detail={teams?.detail}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="booking_trial">
        <div className="booking_container container">
          <div className="left_booking">
            <div className="detail_booking">
              <div className="title_booking">
                Spark your child's creativity...
              </div>
              <div className="step_booking">
                Fill in this booking form, and you will receive from us:
              </div>
              <ol className="list_step">
                <li>A TechTrain Programs Brochure</li>
                <li>A free trial for your child based on his/her interests</li>
                <li>
                  An personalized proposal to best suit your child's needs
                </li>
              </ol>
              <div className="quote_booking">
                <div className="quote_text">
                  "Our son started with TechTrain 2 years ago and has been
                  learning, and more importantly has been learning while having
                  fun, being self-motivated to attend every class."
                </div>
                <div style={{ textAlign: "left" }}>
                  <strong>- Nick, TechTrain parent community</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="right_booking">
            <div className="native-form"></div>
            <div className="form_container_program ">
              <div className="form_title">
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
                <FormSubmit></FormSubmit>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_aboutus">
        <div className="footer_container">
          <div className="footer_group">
            <div className="footer_left">
              <div className="contacts_title">Liên lạc</div>
              <div className="contacts_phone">
                Tel/WA: +84 0969391122
                <br />
              </div>
              <div className="contacts_email">
                <strong>&zwj;</strong>
                <strong>Email:</strong>
                &nbsp; lienhe@teslatech.edu.vn
                <br />
                <strong>Tại các cơ sở của Trường</strong>
                <br />
                Thứ Hai đến Thứ Sáu: 8h00 sáng đến 8h tối
                <br />
                Thứ Bảy, Chủ nhật: 9h sáng đến 6h tối
                <br />
              </div>
            </div>
            <div className="footer_right">
              <div className="connects_title">CONNECT</div>
              {/*<div className="connect_group_logo">*/}
              {/*  <a className="link_connect" target="_blank" href="https://facebook.com">*/}
              {/*    <img className="logo_connect" src={facebook} />*/}
              {/*  </a>*/}
              {/*  <a className="link_connect" target="_blank" href="https://zalo.me">*/}
              {/*    <img className="logo_connect" src={zalo_logo} />*/}
              {/*  </a>*/}
              {/*  <a className="link_connect" target="_blank" href="https://linkedin.com">*/}
              {/*    <img className="logo_connect" src={linked} />*/}
              {/*  </a>*/}
              {/*  <a className="link_connect" target="_blank" href="https://youtube.com">*/}
              {/*    <img className="logo_connect" src={youtube} />*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="text_copyright">
            © Copyright 2024 TechTrain Asia. All Rights Reserved.
            <br />
            Terms & Conditions |
          </div>
        </div>
      </div>
    </div>
  )
}
