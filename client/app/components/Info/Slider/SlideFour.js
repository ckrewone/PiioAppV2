import React from 'react';
import ex from '../../../img/ex.jpg';
import Fade from 'react-reveal/Fade';

const SlideFour = () => {


  let stylesImg = {
    width: '50vw',
    borderRadius: '10px',
    marginTop: '12vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    boxShadow: '0 20px 32px -8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31)'
  }

  let stylesDiv = {
    position: 'absolute',
    bottom: '13%',
    right: '0%',
    background: 'rgba(0,0,0,.8)',
    textAlign: 'center',
    color: '#fff',
    fontSize: '3rem',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    verticalAlign: 'middle',
    lineHeight: '20vh',
    fontWeight: '300'
  }


  return <div className='slide' style={{overflowX: 'hidden'}}>
    <Fade>
      <img src={ex} style={stylesImg}/>
    </Fade>
    <Fade right>
      <div style={stylesDiv}>4. Ucz się</div>
    </Fade>
  </div>
}

export default SlideFour;
