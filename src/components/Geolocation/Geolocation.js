import './geolocation.scss';

export class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      userLatitude: 0,
      userLongitude: 0,
      isCorrectLatitude: true,
      isCorrectLongitude: true
    };
    this.getGeolocation();
  }

  changeLongitudeHandler = ({ target: { value } }) => {
    this.setState({
      userLongitude: value
    });
  }

  changeLatitudeHandler = ({ target: { value } }) => {
    this.setState({
      userLatitude: value
    });
  }

  clickHandler = () => {
    const {
      userLatitude,
      userLongitude,
      latitude,
      longitude
    } = this.state;

    if (userLatitude && (userLatitude >= -90) && (userLatitude <= 90)) {
      this.setState({
        latitude: userLatitude,
        isCorrectLatitude: true
      });
    } else {
      this.setState({
        isCorrectLatitude: false
      });
    }
    if (userLatitude === '') {
      this.setState({
        isCorrectLatitude: true,
        latitude
      });
    }
    if (userLongitude && (userLongitude >= -180) && (userLongitude <= 180)) {
      this.setState({
        longitude: userLongitude,
        isCorrectLongitude: true
      });
    } else {
      this.setState({
        isCorrectLongitude: false
      });
    }
    if (userLongitude === '') {
      this.setState({
        isCorrectLongitude: true,
        longitude
      });
    }
  }

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        userLatitude: position.coords.latitude,
        userLongitude: position.coords.longitude
      });
    });
  }

  render() {
    const {
      latitude,
      longitude,
      isCorrectLongitude,
      isCorrectLatitude
    } = this.state;

    const src = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},
      ${longitude}&zoom=12&size=300x300&sensor=false&language=ru&markers=color:blue|label:S|${latitude},${longitude}`;

    return (
      <div className="geo">
        <span>Longitude:</span>
        <input
          onChange={this.changeLongitudeHandler}
          id="longitude"
          placeholder={longitude}
        />
        {!isCorrectLongitude && <span className="error">Enter correct longitude from -180 to 180 degree</span>}
        <span>Latitude:</span>
        <input
          onChange={this.changeLatitudeHandler}
          id="latitude"
          placeholder={latitude}
        />
        {!isCorrectLatitude && <span className="error">Enter correct latitude from -90 to 90 degree</span>}
        <button className="btn-geo" onClick={this.clickHandler}>Show position on map</button>
        <img src={src} alt="map" />
      </div>
    );
  }
}
