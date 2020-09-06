import React from "react"

class Searchbar extends React.Component {
    state = {
        repoName: "",
        userName: ""
    };

    handleChangeReponame = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            repoName: value
        }, () => this.props.repoNameChange(this.state.repoName));

    }

    handleChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            userName: value
        }, () => this.props.userNameChange(this.state.userName));
    }

    render() {
        return (
            <>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">User Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => this.handleChangeUsername(e)} />
            </div>
            <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Repo Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => this.handleChangeReponame(e)} />
        </div>
        </>
        );
    }
}

export default Searchbar;