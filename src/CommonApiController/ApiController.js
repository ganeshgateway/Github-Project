import axios from 'axios';
import { apiUrls, DevelopmentMode } from './AppConfig';
import { envModeVar } from '../index'

export let endPointsData, paramsData, headersData, methodData, successCallBackData, failureCallbackData

/**
 * Common structure for API call
 * @param  {object} endPoints  endPoints of api url
 * @param  {object} params parameters to pass in url
 * @param  {object} headers api headers
 * @param  {object} method api method type - GET/POST/PUT/DELETE
 * @param  {object} SuccessCallback fuction return success response
 * @param  {object} FailureCallback fuction return failure response
*/

let BaseUrl = '';

export const RestApiController = (endPoints, params, headers, method, { SuccessCallback, FailureCallback }) => {
    let envMode = envModeVar;
    if (envMode === DevelopmentMode.STAGING) {
        BaseUrl = apiUrls.stagingBaseURL
    }
    else if (envMode === DevelopmentMode.DEVELOPMENT) {
        BaseUrl = apiUrls.developmentBaseURL
    }

    endPointsData = endPoints;
    paramsData = params;
    headersData = headers;
    methodData = method;
    successCallBackData = SuccessCallback;
    failureCallbackData = FailureCallback;
    if (navigator.onLine) {
        return axios({
            method: method,
            url: `${BaseUrl}${endPoints}`,
            data: params,
            headers: headers
        }, { SuccessCallback, FailureCallback })
            .then((response) => {
                SuccessCallback(response)
            })
            .catch((error) => {
                FailureCallback(error)
            })
    }
}