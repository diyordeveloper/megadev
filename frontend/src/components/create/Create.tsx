import React from 'react'
import Creat from '../../assets/images/layouts/create.png'
function Create() {
  return (
    <section className="create">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="create__main">
                        <div className="content">
                            <h4 className="heading">Create your NFT portfolio</h4>
                            <p>Get udpated with news, tips & tricks</p>
                            <a href="contact.html" className="action-btn"><span>Join Now</span></a>
                        
                        </div>
                        <img src={Creat} alt="Error..."/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Create