import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light style={{ backgroundColor: '#4CACF9' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand className='text-white' href='/'>
                        <i className="fa-solid fa-hospital fa-beat-fade fa-xl ps-4 pe-2" style={{ color: '#ff0000' }}></i>
                        <strong>&nbsp;Doctors Hub</strong>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header