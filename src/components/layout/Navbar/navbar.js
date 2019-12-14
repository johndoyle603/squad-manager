import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { connect } from 'react-redux';
import { isLogicalExpression } from '@babel/types';



const Navbar = (props) => {
  const { auth, profile } = props 

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav id='nav' className="nav-wrapper">
      <div className="container">
        <Link to='/' className='brand-logo'><img id='logo' className='responsive-img'src={'images/logo.png'}/></Link>
        { auth.isLoaded && links }
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile

  }
}

export default connect(mapStateToProps)(Navbar);