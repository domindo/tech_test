import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import { listHowWork } from "~/features/home"
import {
  itemsHeroProgramsSteam,
  listLearningHighLightSteam,
  listPlatformsSteam,
  listProgramStructure,
  listProgramsDetailSteam,
  listSoftSkillSteam,
  listTopicsSteam,
} from "~/features/techDiscovery/constants"
import PropTypes from "prop-types"

export const TechDiscoveryLayout = () => {
  const contentAboutProgram = (
    <div>
      Our Tech Discovery program is designed for young learners or students who
      have completed the STEAM Discovery program, who are already comfortable
      with online learning and students who have had some previous tech
      experience and want to explore their options.
      <br />
      <br />
      Tech Discovery students receive a well-rounded experience with all the
      topics available at TechTrain. exploring coding fundamentals, Machine
      Learning concepts, and 3D design platforms.
      <br />
      <br />
      The Game Design Discovery course allows students to discover all of the
      foundational coding concepts present in Scratch, learning about each block
      type, and how it relates to real-world coding.
      <br />
      <br />
      The 3D Design Discovery course allows students to discover the essential
      steps and tools of 3D modeling. Students will learn the 3D design process,
      from finding a reference to creating the model and will gain an
      understanding of how to navigate a virtual 3D environment.
      <br />
      <br />
      By the end of the program, students will be prepared to choose their own
      path forward through our curriculum based on their new found experience
      along with their interests and ambitions.
    </div>
  )
  return (
    <ProgramsLayout
      color="#179d50"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsSteam}
      listProgramsDetail={listProgramsDetailSteam}
      listLearningHighLight={listLearningHighLightSteam}
      listProgramStructure={listProgramStructure}
      listJourneyBegins={listHowWork}
      listSoftSkill={listSoftSkillSteam}
      listTopics={listTopicsSteam}
      listPlatforms={listPlatformsSteam}
      backgroundColorBox="rgba(74,198,124,.1)"
    />
  )
}

TechDiscoveryLayout.propTypes = {
  color: PropTypes.string,
}
