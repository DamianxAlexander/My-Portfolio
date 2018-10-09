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
                    cover: "https://i.imgur.com/KmI38fJ.jpg",
                    summary: "This top-down-shooter style game was created utilizing vanilla Javascript and HTML Canvas",
                    github: "https://git.generalassemb.ly/DamianxAlexander/Top-Down-Shooter-Game",
                    link: "https://pages.git.generalassemb.ly/DamianxAlexander/Top-Down-Shooter-Game/"
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
          showDetails: true,
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
                <hr/>
                <div>
                    {this.state.showDetails ?
                        <ProjectDetails
                            projectName={this.state.currentProject.name}
                            summary={this.state.currentProject.summary}
                            github={this.state.currentProject.github}
                            link={this.state.currentProject.link}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsPage;
