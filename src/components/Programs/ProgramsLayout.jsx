import React from "react"
import {
  LearningHighlights,
  HeroPrograms,
  AboutProgram,
  Structure,
  OurOtherPrograms,
} from "~/components/Programs"
import { TechJourneyBegins } from "~/components/TechJourneyBegins"
import { listHowWork } from "~/features/home"
import PropTypes from "prop-types"

export const ProgramsLayout = props => {
  const {
    color,
    itemsHeroPrograms,
    listProgramsDetail,
    listLearningHighLight,
    listSoftSkill,
    listTopics,
    listPlatforms,
    listProgramStructure,
    contentAboutProgram,
    listJourneyBegins = listHowWork,
    backgroundColorBox,
    backgroundColorDifferent,
  } = props

  return (
    <div className="d-flex flex-column w-100">
      <HeroPrograms items={itemsHeroPrograms} color={color} />
      <AboutProgram
        content={contentAboutProgram}
        listProgramsDetail={listProgramsDetail}
        colorTitle={color}
        backgroundColorDetail={backgroundColorBox}
      />
      <LearningHighlights
        listLearningHighLight={listLearningHighLight}
        listSoftSkill={listSoftSkill}
        listTopics={listTopics}
        listPlatforms={listPlatforms}
        backgroundColorBox={backgroundColorBox}
        colorTitle={color}
      />
      <Structure
        listProgramStructure={listProgramStructure}
        colorTitle={color}
        backgroundColorBox={backgroundColorDifferent ?? backgroundColorBox}
      />
      <OurOtherPrograms colorTitle={color} />
      <TechJourneyBegins
        listData={listJourneyBegins}
        styleStrip={{
          colorId: color,
          backgroundTrip: backgroundColorDifferent ?? backgroundColorBox,
        }}
        backgroundContainer="white"
        colorTitleContainer={color}
        isShowButton={false}
      />
    </div>
  )
}

ProgramsLayout.propTypes = {
  color: PropTypes.string,
  itemsHeroPrograms: PropTypes.any,
  listJourneyBegins: PropTypes.any,
  listTopics: PropTypes.any,
  listPlatforms: PropTypes.any,
  listSoftSkill: PropTypes.any,
  listLearningHighLight: PropTypes.any,
  listProgramsDetail: PropTypes.any,
  listProgramStructure: PropTypes.any,
  contentAboutProgram: PropTypes.any,
  backgroundColorBox: PropTypes.string,
  backgroundColorDifferent: PropTypes.string,
}
