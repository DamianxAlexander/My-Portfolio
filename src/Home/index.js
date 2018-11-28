import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <header>
            <h1 className="intro-header">DAMIAN A. SALGADO<hr className="splitter"/>FULL STACK DEVELOPER</h1>
        </header>
        <div className="about-me-wrapper">
          <p className="about-me">I am a proud veteran turned developer. My time in the army has taught me to be organized and to persevere in tough situations, while my positive attitude and strong drive help provide focus and adaptability. These traits reverberate in my programming style.</p>
        </div>
      </div>
    )
  }
}

export default Home;