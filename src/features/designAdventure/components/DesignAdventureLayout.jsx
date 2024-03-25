import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import {
  itemsHeroProgramsAdventure,
  listLearningHighLightAdventure,
  listPlatformsAdventure,
  listProgramStructureAdventure,
  listProgramsDetailAdventure,
  listSoftSkillAdventure,
  listTechJourneyBeginsAdventure,
  listTopicsAdventure,
} from "~/features/designAdventure/constants"

export const DesignAdventureLayout = () => {
  const contentAboutProgram = (
    <div>
      Our 3D Design Discovery program is designed for students who are
      comfortable with online learning and have some design experience and for
      who wish to learn more advanced 3D design tools and techniques.
      <br />
      <br />
      Students will learn to use the professional 3D creation suite, Blender,
      while studying how to apply 3D design workflows to more complex projects
      using this advanced toolset. They will will explore the essential tools in
      Blender and learn the overlapping concepts from TinkerCAD, alongside the
      additional possibilities offered within Blender.
      <br />
      <br />
      As students gain the experience and requisite skills to build more complex
      models, they will further explore the intersection of code and design by
      learning how to use Python coding language to speed up the development of
      complex models.
      <br />
      <br />
      By the end of the program, students will be competent using 3D design
      tools, techniques terminology and workflows. They will then participate in
      brainstorming and planning sessions before combining all of these skills
      to plan and complete their own unique 3D design project.
    </div>
  )
  return (
    <ProgramsLayout
      color="#1ba7e0"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsAdventure}
      listProgramsDetail={listProgramsDetailAdventure}
      listLearningHighLight={listLearningHighLightAdventure}
      listProgramStructure={listProgramStructureAdventure}
      listJourneyBegins={listTechJourneyBeginsAdventure}
      listSoftSkill={listSoftSkillAdventure}
      listTopics={listTopicsAdventure}
      listPlatforms={listPlatformsAdventure}
      backgroundColorBox="#e0f7ff"
    />
  )
}
