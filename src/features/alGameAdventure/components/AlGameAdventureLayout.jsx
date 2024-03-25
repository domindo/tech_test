import React from "react"
import { ProgramsLayout } from "~/components/Programs"
import {
  itemsHeroProgramsGame,
  listLearningHighLightGame,
  listPlatformsGame,
  listProgramStructure,
  listProgramsDetailGame,
  listSoftSkillGame,
  listTopicsGame,
  listJourneyBeginsRoblox,
} from "~/features/alGameAdventure/constants"
import PropTypes from "prop-types"

export const AlGameAdventureLayout = () => {
  const contentAboutProgram = (
    <div>
      Our AI & Game Adventure program is designed for students who are
      comfortable with online learning and wish to take the next step in coding
      and game design, while also learning how they can harness the power of
      machine learning.
      <br />
      <br />
      Students will learn how to approach a game design project, with an
      emphasis on planning, communicating, critical thinking and graphic
      creation. For those with an interest in how all the characters and
      environments of their favourite games are created and interact with one
      another, this program provides an exciting new challenge.
      <br />
      <br />
      Students will be introduced to Machine Learning concepts, learning how to
      apply sentiment analysis and image recognition. They will also be
      introduced to the Python programming language and its underlying logic and
      syntax, allowing students to imagine and build even more complex game
      elements.
      <br />
      <br />
      Students will also practice self- and peer-evaluation, as well as
      partaking in brainstorming sessions as they work and collaborate on game
      project ideas together.
      <br />
      <br />
      By the end of the program, students will be familiar with game design
      concepts and fundamentals. They will also be able to create basic Python
      applications and combine this with their introduction to Machine Learning
      to build a Python enabled machine learning system.
    </div>
  )
  return (
    <ProgramsLayout
      color="#dd1717"
      contentAboutProgram={contentAboutProgram}
      itemsHeroPrograms={itemsHeroProgramsGame}
      listProgramsDetail={listProgramsDetailGame}
      listLearningHighLight={listLearningHighLightGame}
      listProgramStructure={listProgramStructure}
      listJourneyBegins={listJourneyBeginsRoblox}
      listSoftSkill={listSoftSkillGame}
      listTopics={listTopicsGame}
      listPlatforms={listPlatformsGame}
      backgroundColorBox="#f5dbdc"
      backgroundColorDifferent="#f9eded"
    />
  )
}

AlGameAdventureLayout.propTypes = {
  color: PropTypes.string,
}
