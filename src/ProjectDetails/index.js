import React, { Component } from 'react'

class ProjectDetails extends Component {
    render() {
        return (
            <div className="project-details">
                <h2>{this.props.projectName}</h2>
                <p>{this.props.summary}</p>
                <a href={this.props.github} target="_blank">GitHub Code</a>
                <a href={this.props.link}>Live Site</a>
            </div>
        )
    }
}

export default ProjectDetails;
