// import React, { Component } from 'react';

// class AddressDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             url: props.url,
//             ipAddress: null
//         };
//     }

//     componentDidMount() {
//         fetch(this.state.url)
//             .then(response => response.json())
//             .then(data => this.setState({ ipAddress: data.ip }));
//     }

//     render() {
//         return (
//             <span className="AddressDisplay">
//                 {this.state.ipAddress}
//             </span>
//         );
//     }
// }

// export default AddressDisplay;
import React, { useState, useEffect } from 'react';

function AddressDisplay({ ipvVersion }) {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Determine the API URL based on the ipvVersion prop
    const apiUrl = ipvVersion === 'IPv6' ? 'https://api6.ipify.org?format=json' : 'https://api.ipify.org?format=json';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));
  }, [ipvVersion]);

  return (
    <div className="AddressDisplay">
      <p>{`IP Address (${ipvVersion}):`}</p>
      <span>{ipAddress}</span>
    </div>
  );
}

export default AddressDisplay;
