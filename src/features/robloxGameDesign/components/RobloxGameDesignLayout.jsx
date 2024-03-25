import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import {
  itemsHeroProgramsRoblox,
  listLearningHighLightRoblox,
  listPlatformsRoblox,
  listProgramStructure,
  listProgramsDetailRoblox,
  listSoftSkillRoblox,
  listTopicsRoblox,
  listJourneyBeginsRoblox
} from "~/features/robloxGameDesign/constants"
import PropTypes from "prop-types"

export const RobloxGameDesignLayout = () => {
  const contentAboutProgram = (
    <div>
      Our Roblox Game Design World program is designed for students who are
      comfortable with online learning, have some tech experience and who wish
      to develop their Roblox Studio game design knowledge and skills.
      <br />
      <br />
      Roblox is built on the Lua programming language, which is used in many
      well known applications including; Adobe Lightroom, Minecraft and Lego
      Mindstorms, with approximately 150 million active users programming and
      sharing their games everyday.
      <br />
      <br />
      In this program, students interested in coding, 3D design, and game
      design, will explore the Roblox Studio toolset, practice building code
      solutions to drive game features, and finally create their own game.
      <br />
      <br />
      Moving through our Explorer, Builder, Creator course framework students
      gain knowledge in the Roblox development environment to combine 3D design,
      coding and project planning. They will then progress to more complex
      animation, Virtual Effects (VFX), and approach themes of digital
      citizenship in online communities and collaborations.
      <br />
      <br />
      By the end of the program students will create their own 'virtual museum'
      around a topic of personal interest, with a weighting towards
      socially-impactful issues. In this way, our students further develop their
      creative, collaborative and global skills.
    </div>
  )
  return (
    <ProgramsLayout
      color="#dd1717"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsRoblox}
      listProgramsDetail={listProgramsDetailRoblox}
      listLearningHighLight={listLearningHighLightRoblox}
      listProgramStructure={listProgramStructure}
      listJourneyBegins={listJourneyBeginsRoblox}
      listSoftSkill={listSoftSkillRoblox}
      listTopics={listTopicsRoblox}
      listPlatforms={listPlatformsRoblox}
      backgroundColorBox="#f5dbdc"
    />
  )
}

RobloxGameDesignLayout.propTypes = {
  color: PropTypes.string,
}
