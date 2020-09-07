import React from 'react'
import { connect } from 'react-redux'
import { getComments } from 'Store/Displaycomments'
import { MDBDataTable } from 'mdbreact'
import { getCommentResult } from '../../Utils/Processpulldata'
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './Displaycomments.css'

class Displaycomments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        var parameter = [];
        parameter.push({ 'search': this.props.location.searchProps.searchData });
        parameter.push({ 'urlparameter': this.props.match.params.id });
        this.props.getComments(parameter, {
            SuccessCallback: res => {
                let commentsData = getCommentResult(res.data)
                this.setState({
                    comments: commentsData
                })
            },
            FailureCallBack: error => alert(JSON.stringify(error))
        })
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'Comments',
                    field: 'comments',
                    sort: 'asc',
                    width: 270
                }
            ],
            rows: this.state.comments
        };
        return (
            <>
                <h2 className="Displaycomments">Comments Data</h2>
                <div className='result'>
                    <MDBDataTable
                        className="text-center"
                        striped
                        bordered
                        small
                        data={data}
                        searching={false}
                    />
                </div>
                <MDBBtn className="backButtton" rounded color="success"><Link to="/" >Back</Link></MDBBtn>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        commentsArr: state.comments.commentsList,
    };
}

const mapDispatchToProps = {
    getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Displaycomments);