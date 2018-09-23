import React, { Component } from 'react';
import ProjectItem from '../ProjectItem';
import ProjectDetails from '../ProjectDetails';

class ProjectsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            currentProject: {},
            showDetails: false,
        }
    }

    toggleDetails = projectId => {
        const currentProject = this.state.projects.filter(project => project.id === projectId)[0];
        this.setState({
          showDetails: !this.state.showDetails,
          currentProject: currentProject,
        })
      }

    render() {
        return (
            <div>
                <div className="project-list">
                    {this.state.projects.map(project => {
                        return (
                            <ProjectItem
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                cover={project.cover}
                                toggleDetails={this.toggleDetails}
                            />
                        );
                    })}
                </div>
                <div>
                    {this.state.showDetails ?
                        <ProjectDetails
                            projectName={this.state.currentGame.name}
                            summary={this.state.currentGame.summary}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
