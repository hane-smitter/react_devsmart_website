import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Job_Listing extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.joblisting
        let customclass = this.props.customclass ? this.props.customclass : ''
        
    return <div>
            <div className={ "job-listing-page "+customclass  }>
              <div className="container">
                <div className="job-position-area">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="section-title style-four">
                        <h2 className="title"  dangerouslySetInnerHTML={{__html: data.sectiontitle}}> 
                        </h2>
                      </div>
                      {/* single job list */}
                      { data.job.map(( item, i )=>
                          <div key={ i } className="single-job-list media">
                            <img src={ publicUrl+item.icon } alt={imgattr} />
                            <div className="media-body">
                              <h6>{ item.jobtitle }</h6>
                              <p>Send a cover letter and CV to careers@devsmart.co.ke not later than 15th August,2021 by 5pm. Only shortlisted candidates will be contacted.</p>
                              <span>{ item.date }</span>
                            </div>
                            <a href='/Marketing assistant JD.pdf' className="job-apply-btn align-self-center float-right">
                              { data.buttontext }
                            </a>
                          </div>
                        ) }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Job_Listing