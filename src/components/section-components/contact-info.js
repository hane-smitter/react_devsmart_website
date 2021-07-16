import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Contact_Info extends Component {
    render() {
        return <div>
        <div className="map-area pd-top-120">
            <div className="container">
                <div className="map-area-wrap">
                    <div className="row no-gutters">
                        <div className="col-lg-8">
                            {parse('<div class="mapouter"><div class="gmap_canvas"><iframe width="1075" height="440" id="gmap_canvas" src="https://maps.google.com/maps?q=emmanuel%20House,%20Ongata%20Rongai,%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br/><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps on websites</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>')}
                        </div>  
                        <div className="col-lg-4 desktop-center-item">
                            <div>
                                <div className="contact-info">
                                    <h4 className="title">{sectiondata.contactinfo.title}</h4>
                                    <p className="sub-title">{sectiondata.contactinfo.description}</p>
                                    <p><span>Address:</span> {parse( sectiondata.contactinfo.address )}</p>
                                    <p><span>Mobile:</span> {sectiondata.contactinfo.mobile}</p>
                                    <p><span>E-mail:</span> {sectiondata.contactinfo.mail}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}

export default Contact_Info