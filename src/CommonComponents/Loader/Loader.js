import React, { Component } from 'react'
import { iconLoder } from 'Assets';


export default class Loader extends Component {
    render() {
        return (
            <div>

                {/*  Display loader if loading value is true  */}

                {
                    this.props.loading ?
                        <div className="newloader-style">
                            <img alt={'LoaderImage'} src={iconLoder} style={{ height: 300 }} />
                            <div className="loader-container-inner">
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}
