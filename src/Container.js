import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import { NoInternet, Loader } from 'CommonComponents'

class Container extends Component {

  constructor(props) {
    super(props)

    this.state = {
      offline: !navigator.onLine
    }
    this.setOfflineStatus = this.setOfflineStatus.bind(this)
  }

  componentDidMount(){
    //Add event lister no check internet availability
    window.addEventListener('online', this.setOfflineStatus.bind(this, true));
    window.addEventListener('offline', this.setOfflineStatus.bind(this, false));
  }
  componentWillUnmount() {
    //Remove event lister no check internet availability
    window.removeEventListener('online', this.setOfflineStatus.bind(this, true));
    window.removeEventListener('offline', this.setOfflineStatus.bind(this, false));
  }

  //Cange internet state
  setOfflineStatus = () => {
    this.setState({
      offline: !navigator.onLine
    })
  }

  render() {
    const { offline } = this.state;
    return (
      <div >

        {/* If offline state is true, display NoInternet component else navigate to routing */}
        {
          offline ? <NoInternet /> : <Navigation />
        }

        {/* Common Loader component */}
        <Loader loading={this.props.isLoading} />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.global.loading
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
