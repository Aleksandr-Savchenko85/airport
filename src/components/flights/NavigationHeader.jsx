import React from 'react';

const NavigationHeader = () => {
    return (<>
        <div className="logo"><img
            src="https://ufuture.com/wp-content/uploads/2017/10/xkief-1-300x151.jpg.pagespeed.ic.p8oJ2OZ4Py.jpg"></img>
        </div>
        <div className="navbar">
            <ul className="navbar-nav">
                <li><span><a href="https://iev.aero/helpdesk/security" className="link">passengers</a></span></li>
                <li><span><a href="https://travel.iev.aero/" className="link-iev">iev service</a></span></li>
                <li><span><a href="https://iev.aero/terminal-b/pax-service" className="link">vip</a></span></li>
                <li><span><a href="https://iev.aero/corporate" className="link">partners</a></span></li>

            </ul>
        </div>
        </>
    )
};


export default NavigationHeader;