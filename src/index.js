import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message={'Please accept location request'} />
  }
  return <div>{content}</div>
}

// class App extends React.Component {
//   state = { lat: null, errorMessage: '' }

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       //success callback
//       position => this.setState({ lat: position.coords.latitude }),
//       //failure callback
//       err => this.setState({ errorMessage: err.message })
//     )
//   }

//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />
//     }
//     return (
//       <div>
//         <Spinner message={'Please accept location request'} />
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'))
