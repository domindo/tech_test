import React from "react"
import { home_page } from "~/assets/images"
import { ButtonHover } from "~/components/Button"
import "./Home.scss"

export const InformationHomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${home_page})`,
      }}
      className="home-container"
    >
      <div className="home-container_information" data-aos="zoom-out-right">
        <div className="home-container_title">
          <strong>TRƯỜNG CÔNG NGHỆ TESLA</strong>
        </div>
        <p className="home-container_details" >Nơi ươm mầm những tài năng công nghệ</p>
        <div className="home-container_content">
          Trường Công nghệ Tesla mang đến cho các em học sinh và tất cả mọi
          người những khóa học về STEM, AI và những công nghệ mới nhất. Các khóa
          học được dẫn dắt bởi các chuyên gia hàng đầu của đất nước với chương
          trình, thiết bị được nhập khẩu từ các nền giáo dục tiên tiến hoặc được
          thiết kế chuyên biệt. Trường không chỉ chú trọng đến khả năng phát
          triển tư duy máy tính, kỹ năng lập trình mà còn trang bị cho các con
          những kỹ năng mềm khác như tư duy thiết kế, kỹ năng phản biện và khả
          năng sử dụng tiếng Anh thuần thục từ đó vững bước làm chủ tương lai
          trong kỷ nguyên số.
        </div>
        <div className="home-container_give">
          Give your child the best possible start – experience the TechTrain
          difference for FREE today.
        </div>
        <div className="home-container_buttons">
          <ButtonHover
            content="Discover TechTrain"
            color="white"
            background="#dd1717"
          />
          <ButtonHover
            background="white"
            color="#dd1717"
            content="Explore Programs"
            styleButton={{
              borderColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  )
}
