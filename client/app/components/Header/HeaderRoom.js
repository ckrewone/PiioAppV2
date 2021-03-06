import React, {Component} from 'react';
import img from '../../img/favicon.png';
import {Link} from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import {
  getFromStorage,
} from '../../utils/storage';

class HeaderRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      fisrt: '',
      last: ''
    };
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const {token} = obj;
      //verify
      fetch('api/account/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            token,
            first: json.first,
            last: json.last
          });
        }
      });
    }
  }

  render() {


    return (

      <nav className='navbar navbar-expand'>
        <Flip left>
          <li className='brand'>
            <a><img src={img} className='App-logo'></img></a>
          </li>
        </Flip>
        <ul id='logsign' className='nav navbar-nav ml-auto'>
          {
            (this.state.first) ? (
              <li className='nav-item '>
                <Fade right>
                  <h3 className='name-tag'>Cześć <span>{this.state.first}</span> <span>{this.state.last}</span></h3>
                </Fade>
              </li>
            ) : null
          }
          <Fade right>
            <li className='nav-item'>
              <Link className='nav-link' to='/log'>Opuść pokój<i className='ion-android-arrow-forward'/></Link>
            </li>
          </Fade>
        </ul>
      </nav>

    );
  }
}

export default HeaderRoom;
