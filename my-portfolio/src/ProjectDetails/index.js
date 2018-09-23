import React, { Component } from 'react'

class ProjectDetails extends Component {
    render() {
        return (
            <div className="project-details">
                <h1>DETAILS</h1>
                <div>
                    <h2>{this.props.projectName}</h2>
                    <p>{this.props.summary}</p>
                </div>
            </div>
        )
    }
}

export default ProjectDetails;
