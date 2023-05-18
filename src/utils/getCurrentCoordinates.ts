// TODO: Querying location permission, might needed for better UX
// navigator.permissions.query({ name: "geolocation"}).then((permissionStatus) => {
//   console.log(permissionStatus.state)
// })

// The maximum age in milliseconds of a possible cached position that is acceptable to return
// Currently set to 1 hour
const MAX_AGE = 1000 * 60 * 60;

async function getCurrentCoordinates() {
  // If a position is found, save its coordinates to local storage
  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    localStorage.setItem('currentCoordinates', `${latitude},${longitude}`);
  };

  const error = (err: any) => {
    console.error(err);
  };

  const options = {
    maximumAge: MAX_AGE,
    timeout: 5000,
  };

  if (!navigator.geolocation) {
    console.error('Geolocation not supported!');
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

export default getCurrentCoordinates;
