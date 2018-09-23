import React, { Component } from 'react';

class ProjectItem extends Component {
    toggleDetails = () => {
        this.props.toggleDetails(this.props.id)
    }

    render() {
        return (
            <div className="project-elem" onClick={this.toggleDetails}>
                <div className="project-item-wrapper">
                    <img className="project-item-img" alt="Project Cover" src={this.props.cover} style={{ width: "200px", height: "200px", }} />
                    <p className="project-item-title">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default ProjectItem;
