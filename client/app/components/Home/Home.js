import React, {Component} from 'react';
import Header from '../Header/HeaderHome';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import img from '../../img/logo.svg';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hide: false
    }
  }

  componentDidMount() {
    if (this.props.initial) {
      this.setState({loading:true});
      setTimeout(() => {
        this.setState({loading: false});
      }, 2000);
      setTimeout(() => {
        this.setState({hide: true});
      }, 1500);
    }
  }

  render() {
    let imgStyle = {
      height: '30vw',
      marginTop: '10vh'
    }

    let isFaded;
    if(this.props.initial){
      isFaded = <Fade>
        <Header/>
        <div id='main'>
          <Zoom>
            <h1>
              <img style={imgStyle} src={img}></img>
            </h1>
            <h2>
              <Link
                className='btn btn-sample btn-lg '
                role='button'
                to='/more'>
                START</Link>
            </h2>
          </Zoom>
        </div>
      </Fade>
    } else {
       isFaded = <div>
        <Header/>
        <div id='main'>
        <Zoom>
          <h1>
            <img style={imgStyle} src={img}></img>
          </h1>
          <h2>
            <Link
              className='btn btn-sample btn-lg '
              role='button'
              to='/more'>
              START</Link>
          </h2>
        </Zoom>
      </div>
      </div>
    }
    if (!this.state.loading) {
      return (
        <div className='return-page'>
          {isFaded}
        </div>
      );
    } else {
      return (
        <div className={this.state.hide ? 'bubbling hidden' : 'bubbling visible'}>
	<Fade>
          <div className="bubblingG">
	<span id="bubblingG_1">
	</span>
            <span id="bubblingG_2">
	</span>
            <span id="bubblingG_3">
	</span>
          </div>
	</Fade>
        </div>
      );
    }
  }
}

export default Home;
