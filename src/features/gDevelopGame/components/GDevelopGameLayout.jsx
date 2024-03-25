import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import { listHowWork } from "~/features/home"
import {
  itemsHeroProgramsDevelop,
  listLearningHighLightDevelop,
  listPlatformsDevelop,
  listProgramStructure,
  listProgramsDetailDevelop,
  listSoftSkillDevelop,
  listTopicsDevelop,
} from "~/features/gDevelopGame/constants"
import PropTypes from "prop-types"

export const GDevelopGameLayout = () => {
  const contentAboutProgram = (
    <div>
      Our GDevelop Game Design World program is designed for students who are
      comfortable with online learning, have some tech experience and who wish
      to learn more game design tools techniques and terminology.
      <br />
      <br />
      In this program students learn the easy-to-use and powerful 2D,
      cross-platform open-source game engine, Gdevelop. Packed full of features
      to learn and combine to build games, 'GDev' is a unique and easy way to
      design game concepts, emphasizing an event system. Events are a powerful
      way to express the logic of a game without using a programming language.
      Students' games created with GDevelop can be published to Android, Apple
      iOS, Facebook Gaming, Steam and more!
      <br />
      <br />
      By the end of the program, students understand essential concepts
      including coordinate planes, variables and coding logic in game design.
      Furthermore, we review our projects, the build process, planning methods
      and the games' User Interface (UI) and User Experience (UX) so students
      can discuss what makes a well-designed game, and where we can iterate and
      improve.
    </div>
  )
  return (
    <ProgramsLayout
      color="#179d50"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsDevelop}
      listProgramsDetail={listProgramsDetailDevelop}
      listLearningHighLight={listLearningHighLightDevelop}
      listProgramStructure={listProgramStructure}
      listJourneyBegins={listHowWork}
      listSoftSkill={listSoftSkillDevelop}
      listTopics={listTopicsDevelop}
      listPlatforms={listPlatformsDevelop}
      backgroundColorBox="rgba(74,198,124,.1)"
    />
  )
}

GDevelopGameLayout.propTypes = {
  color: PropTypes.string,
}
