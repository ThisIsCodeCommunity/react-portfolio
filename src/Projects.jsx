import React, { Component } from 'react'
import axios from 'axios'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.readProjects()
  }

  async readProjects() {
    let projects = await axios.get('./data/projects.json')
    this.setState({ projects: projects.data })
  }

  render() {
    let projectList = this.state.projects.map(project => {
      return (
        <li key={project.id}>{project.name}</li>
      )
    })
    return (
      <div>
        <h1 className="content-text">My Projects</h1>
        <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        <ul>{projectList}</ul>
      </div>
    )
  }
}

export default Projects
