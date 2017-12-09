export class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGeo: true,
      latitude: 0,
      longitude: 0
    };
    this.getGeolocation();
  }

  clickHandler = () => {
    const { showGeo } = this.state;
    this.setState({ showGeo: !showGeo });
  }

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }

  render() {
    const { showGeo, latitude, longitude } = this.state;

    return (
      <div>
        <button onClick={this.clickHandler}>
          { showGeo ? 'Show my geolocation' : 'Hide my geolocation' }
        </button>
        { !showGeo && <span>{`latitude: ${latitude} longitude: ${longitude}`}</span> }
      </div>
    );
  }
}
