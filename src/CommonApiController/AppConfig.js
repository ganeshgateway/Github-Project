/**
 * API path for live, stagging, local
*/

export const DevelopmentMode = {
  PRODUCTION: 'PRODUCTION',
  STAGING: 'STAGING',
  DEVELOPMENT: 'DEVELOPMENT',
};

export const apiUrls = {
  stagingBaseURL: "https://api.github.com",
  developmentBaseURL:  "https://api.github.com",
  productionBaseURL: "https://api.github.com",
}

/**
 * Headers
*/
// const headers = {
//     'Content-Type': 'application/json',
// }

/**
 * Define endpoint menthod and header for API
*/
export const endPoints = {
  Dashboard: {endpoint:"/repos", param:'aaaa', method:'GET', header:null},
};