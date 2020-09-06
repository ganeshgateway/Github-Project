import * as types from './actionTypes';
import { endPoints } from '../../CommonApiController/AppConfig';
import { RestApiController } from '../../CommonApiController/ApiController';
import { apiLoadingStart, apiLoadingStop } from '../Global/actions';

export const getPulls = (params, { SuccessCallback, FailureCallback }) => {
    let endPoint = endPoints.Dashboard.endpoint + '/' + params.userName + '/' + params.repoName + '/pulls';
    return (dispatch) => {
        dispatch(apiLoadingStart());
        dispatch({ type: types.PULL_REQUEST_REQUEST })
        // Common API call
        RestApiController(endPoint, params, endPoints.Dashboard.header, endPoints.Dashboard.method,
            {
                SuccessCallback: response => {
                    const { data } = response
                    dispatch(apiLoadingStop())
                    dispatch({ type: types.PULL_REQUEST_SUCCESS, payload: data })
                    SuccessCallback(response);
                },
                FailureCallback: response => {
                    dispatch(apiLoadingStop())
                    dispatch({ type: types.PULL_REQUEST_FAIL, payload: response })
                    if (response.message === 'Network Error') {
                        return;
                    } else {
                        FailureCallback(response);
                    }
                }
            })
    }
}

