import React, { Component } from 'react';
import ProjectItem from '../ProjectItem';
import ProjectDetails from '../ProjectDetails';

class ProjectsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    name: "Top-Down-Shooter",
                    id: 1,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "great game"
                },
                {
                    name: "Shooter",
                    id: 2,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "new game"
                },
                {
                    name: "Top-Down-Shooter",
                    id: 3,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "great game"
                },
                {
                    name: "Top-Down-Shooter",
                    id: 4,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "great game"
                },
                {
                    name: "Top-Down-Shooter",
                    id: 5,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "great game"
                },
                {
                    name: "Top-Down-Shooter",
                    id: 6,
                    cover: "https://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg",
                    summary: "great game"
                },
            ],
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
                <h1 className="projects-header">PROJECTS</h1>
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
                            projectName={this.state.currentProject.name}
                            summary={this.state.currentProject.summary}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
