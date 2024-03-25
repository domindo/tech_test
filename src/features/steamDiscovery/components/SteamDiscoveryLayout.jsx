import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import {
  itemsHeroProgramsSteam,
  listLearningHighLightSteam,
  listPlatformsSteam,
  listProgramStructure,
  listProgramsDetailSteam,
  listSoftSkillSteam,
  listTechJourneyBeginsSteam,
  listTopicsSteam,
} from "~/features/steamDiscovery/constants"

export const SteamDiscoveryLayout = () => {
  const contentAboutProgram = (
    <div>
      Our STEAM Discovery program is designed for young learners, students who
      are new to online learning and students who want to build their basic
      computer and block coding skills.
      <br />
      <br />
      STEAM Discovery students begin their online studies with a well-rounded
      focus on online learning skills and classroom tools, building their
      proficiency with basic computer functions and Zoom use.&nbsp;
      <br />
      <br />
      Once comfortable and confident to operate independent of parent
      intervention, students build these skills by engaging in fun and
      educational Scratch block coding projects, which prepare students for
      later courses in coding and design.
      <br />
      <br />
      By the end of the program, students will be comfortable with the use
      ofcomputers, including touch-typing, and will have begun to use
      logic-based control to make their very own digital creations.
    </div>
  )
  return (
    <ProgramsLayout
      color="#1ba7e0"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsSteam}
      listProgramsDetail={listProgramsDetailSteam}
      listLearningHighLight={listLearningHighLightSteam}
      listProgramStructure={listProgramStructure}
      listJourneyBegins={listTechJourneyBeginsSteam}
      listSoftSkill={listSoftSkillSteam}
      listTopics={listTopicsSteam}
      listPlatforms={listPlatformsSteam}
      backgroundColorDifferent ="#e0f7ff"
    />
  )
}