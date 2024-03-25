import React, { useRef } from "react"
import { Carousel } from "react-bootstrap"
import { ollo, robotic, smart3 } from "~/assets/videos"
import "./Home.scss"

const listVideo = [
  {
    urlVideo: ollo
  },
  {
    urlVideo: smart3

  },
  {
    urlVideo: robotic
  },
  {
    urlVideo: smart3
  },
  {
    urlVideo: robotic

  },
  {
    urlVideo: ollo
  }
]
const SliderVideo = () => {
  // Tính toán số lượng items trên mỗi slide (ví dụ: 3 items)
  const itemsPerSlide = 3

  // Chia dữ liệu thành các nhóm với số lượng itemsPerSlide
  // eslint-disable-next-line react/prop-types
  const groupedData = listVideo.reduce((acc, video, index) => {
    const slideIndex = Math.floor(index / itemsPerSlide)

    if (!acc[slideIndex]) {
      acc[slideIndex] = []
    }

    acc[slideIndex].push(video)

    return acc
  }, [])

  const videoRefs = useRef([])
  const handlePlay = (index) => {
    // Dừng tất cả các video trước đó   s
    videoRefs.current.forEach((videoRef, i) => {
      if (i !== index && !videoRef.paused) {
        videoRef.pause()
      }
    })
  }

  return (
    <div className="slider-video position-relative sliderVideo">
      <Carousel className="container-fluid my-5" style={{ position: "static" }} fade pause={"hover"}>
        {groupedData.map((slideItems, slideIndex) => (
          <Carousel.Item key={slideIndex} interval={300000}>
            <div className="d-flex justify-content-around ">
              {slideItems.map((video, item) => (

                <div key={item} className="d-flex">
                  <video
                  className="sliderVideo_video"
                    ref={(ref) => (videoRefs.current[slideIndex * itemsPerSlide + item] = ref)}
                    onPlay={() => handlePlay(slideIndex * itemsPerSlide + item)}
                    controls>
                    <source src={video.urlVideo} type="video/mp4" />
                  </video>
                </div>

              ))}</div>


          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderVideo
