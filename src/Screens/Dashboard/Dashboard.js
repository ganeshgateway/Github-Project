import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPulls } from 'Store/Dashboard'
import { getCommits } from 'Store/Commits'
import Searchbar from 'Screens/Searchbar'
import Rangepicker from "Screens/Rangepicker"
import Displaydata from "Screens/Displaydata"
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './Dashboard.css'
import { appendResult, appendCommentResult } from '../../Utils/Processpulldata'
import { MDBBtn } from 'mdbreact'
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from "@react-pdf/renderer"
import { PdfDocument } from "Screens/Pdf/Pdf"

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userArr: [],
      searchData: {},
      commits: [],
      contributor: [],
      issue: [],
      pullsData: [],
      result: []
    }
  }

  dateChangeFormat = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  onDatechangeHandler = (dateData) => {
    const { searchData } = this.state;
    searchData.sDate = this.dateChangeFormat(dateData.startDate);
    searchData.eDate = this.dateChangeFormat(dateData.endDate);
    this.setState({
      searchData: searchData
    })
  }

  onRepochangeHandler = (repoName) => {
    const { searchData } = this.state;
    this.state.searchData.repoName = repoName;
    this.setState({
      searchData: searchData
    })
  }

  onUserchangeHandler = (userName) => {
    const { searchData } = this.state;
    this.state.searchData.userName = userName;
    this.setState({
      searchData: searchData
    })
  }

  getRepoData = async () => {
    const { searchData } = this.state;
    if (searchData.userName != null && searchData.userName != '') {
      this.props.getPulls(searchData, {
        SuccessCallback: res => {
          const { searchData } = this.state;
          let data = appendResult(res.data, searchData)
          this.props.getCommits(searchData, {
            SuccessCallback: res => {
              const { searchData, pullsData } = this.state;
              let commitData = appendCommentResult(res.data, searchData)
              var maxLengthData = '';
              if (commitData.length >= pullsData.length) {
                maxLengthData = pullsData.length;
              }
              else {
                maxLengthData = commitData.length;
              }
              for (var i = 0; i < maxLengthData; i++) {
                commitData[i].Pull = pullsData[i].Pull;
                commitData[i].contributor = pullsData[i].contributor;
                commitData[i].comments = <Link to={{
                  pathname: `/comments/${pullsData[i].pullnumber}`,
                  searchProps: { searchData }
                }} > <MDBBtn rounded color="success">Comments</MDBBtn></Link>
              }
              this.setState({
                pullsData: commitData
              });
            },
            FailureCallBack: error => alert(JSON.stringify(error))
          })

          this.setState({
            pullsData: data
          })
        },
        FailureCallBack: error => alert(JSON.stringify(error))
      })
    }
  }
  render() {
    const { pullsData } = this.state;
    return (
      <div className="dashboard">
        <Container>
          <div className="row">
            <div className="col-xs-4 col-md-4"><Searchbar userNameChange={this.onUserchangeHandler} repoNameChange={this.onRepochangeHandler} /></div>
            <div className="col-md-6 .offset-md-3"><Rangepicker dateChange={this.onDatechangeHandler} /></div>
            <div className="col-xs-2 col-md-2"></div>
            {typeof pullsData !== 'undefined' && pullsData.length > 0 ?
              <div className="col-xs-2 col-md-2 pdfdownloadlink"><PDFDownloadLink document={<PdfDocument data={this.state.pullsData} />}
                fileName="result.pdf"
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  color: "#fff",
                  backgroundColor: "#00c851",
                  borderRadius: "4px",
                  borderColor: "#28a745"
                }} >Download Pdf</PDFDownloadLink></div>
              : ''}
            <div className="col-xs-2 col-md-2"><Button variant="success" onClick={this.getRepoData}>Search</Button></div>

          </div>
        </Container>
        {typeof pullsData !== 'undefined' && pullsData.length > 0 ?
          <div className="dashboard">
            <Displaydata resultData={this.state.pullsData} search={this.state.searchData} />
          </div>
          : ''}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    pullArr: state.dashboard.pullList,
    commitsArr: state.commits.commitsList,
  };
}

const mapDispatchToProps = {
  getPulls,
  getCommits
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)