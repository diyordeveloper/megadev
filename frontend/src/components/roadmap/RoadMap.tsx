import React from 'react'
import Line from '../../assets/images/background/line.png'
function RoadMap() {
  return (
    <section className="roadmap">
        <img src={Line} alt="" className="img-line"/>
        <div className="shape"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="block-text center">
                        <h6 className="sub-heading"><span>Road Map</span></h6>
                        <h3 className="heading wow" data-splitting>The Journey of <br/>
                            Cyfonii NFT</h3>
                    </div>

                    <div className="roadmap__main" data-aos="fade-up" data-aos-duration="2000">
                        <div className="roadmap-box" >
                            <div className="time">February 01, 2022</div>
                            <div className="content">
                                <h5 className="title">Idea Generation</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                            </div>
                        </div>
                        <div className="roadmap-box right" >
                            <div className="time">February 01, 2022</div>
                            <div className="content">
                                <h5 className="title">Design & Development</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                            </div>
                        </div>
                        <div className="roadmap-box" >
                            <div className="time">February 01, 2022</div>
                            <div className="content">
                                <h5 className="title">Initial Release</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                            </div>
                        </div>
                        <div className="roadmap-box right">
                            <div className="time">February 01, 2022</div>
                            <div className="content">
                                <h5 className="title">Result & Final Report</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                            </div>
                        </div>
                        <div className="roadmap-box">
                            <div className="time">February 01, 2022</div>
                            <div className="content">
                                <h5 className="title">Design & Development</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.</p>
                            </div>
                        </div>
                        <div className="icon"></div>
                        <div className="icon bottom"></div>

                        
                    </div>
                    <div className="button">
                        <a href="roadmap.html" className="action-btn"><span>View Full Road Map</span></a>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default RoadMap