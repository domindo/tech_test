import React from "react"
import {
  Benefits,
  InformationHomePage,
  Program,
  SliderImage,
  TechtrainDifference,
  Testimonials,
} from "~/features/home/components"
import { listHowWork } from "../constants"
import { TechJourneyBegins } from "~/components/TechJourneyBegins"
import SliderVideo from "~/features/home/components/SliderVideo.jsx"
import { SpecialProgram } from "~/features/home/components/SpecialProgram.jsx"

export const Home = () => {
  return (
    <div className="d-flex flex-column w-100">
      <InformationHomePage />
      <SliderImage />
      <SliderVideo />
      <Program />
      <SpecialProgram/>
      <Benefits />
      <TechtrainDifference />
      <Testimonials />
      <TechJourneyBegins
        listData={listHowWork}
        styleStrip={{ backgroundTrip: "white" }}
      />
    </div>
  )
}
