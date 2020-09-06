import {combineReducers} from 'redux'
import global from './Global'
import dashboard from './Dashboard'
import commits from './Commits'
import comments from './Displaycomments'


// Combine all reducers
export default combineReducers({
    global,
    dashboard,
    commits,
    comments
})

