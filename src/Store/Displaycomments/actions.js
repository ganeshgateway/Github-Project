import * as types from './actionTypes';
import { endPoints } from '../../CommonApiController/AppConfig';
import { RestApiController } from '../../CommonApiController/ApiController';
import { apiLoadingStart, apiLoadingStop } from '../Global/actions';

export const getComments = (params, { SuccessCallback, FailureCallback }) => {
    let endPoint = endPoints.Dashboard.endpoint + '/' + params[0]['search'].userName + '/' + params[0]['search'].repoName + '/pulls/' + params[1]['urlparameter'] +'/comments';
    return (dispatch) => {
        dispatch(apiLoadingStart());
        dispatch({ type: types.COMMENTS_REQUEST_REQUEST })
        // Common API call
        RestApiController(endPoint, params, endPoints.Dashboard.header, endPoints.Dashboard.method,
            {
                SuccessCallback: response => {
                    const { data } = response
                    dispatch(apiLoadingStop())
                    dispatch({ type: types.COMMENTS_REQUEST_SUCCESS, payload: data })
                    SuccessCallback(response);
                },
                FailureCallback: response => {
                    dispatch(apiLoadingStop())
                    dispatch({ type: types.COMMENTS_REQUEST_FAIL, payload: response })
                    if (response.message === 'Network Error') {
                        return;
                    } else {
                        FailureCallback(response);
                    }
                }
            })
    }
}

