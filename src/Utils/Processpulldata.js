
export const appendResult = (pulls, searchData) => {
    const pullData = [];
    for (let i = 0; i < pulls.length; i++) {
        var checkDate = new Date(pulls[i]['created_at']);
        var parseDate = Date.parse(checkDate);
        var d = new Date(parseDate);
        var processDateString = d.toLocaleDateString();
        var dateString = processDateString.split('/').reverse().join('-');
        var sDate = searchData.sDate;
        var eDate = searchData.eDate;
        if (dateString >= sDate && dateString <= eDate) {
            pullData.push({
                'Pull': pulls[i]['title'],
                'contributor': pulls[i]['user'].login,
                'pullnumber': pulls[i]['number']

            });
        }
    }
    return pullData;
}

export const appendCommentResult = (commits, searchData) => {
    const commitData = [];
    for (let i = 0; i < commits.length; i++) {
        var checkDate = new Date(commits[i]['commit']['committer'].date);
        var parseDate = Date.parse(checkDate);
        var d = new Date(parseDate);
        var processDateString = d.toLocaleDateString();
        var dateString = processDateString.split('/').reverse().join('-');
        var sDate = searchData.sDate;
        var eDate = searchData.eDate;
        if (dateString >= sDate && dateString <= eDate) {
            commitData.push({ 'commits': commits[i]['commit'].message });
        }
    };
    return commitData;
}

export const getCommentResult = (comments) => {
    const commentsData = [];
    for (let i = 0; i < comments.length; i++) {
        commentsData.push({ 'comments': comments[i]['body'] });
    }
    return commentsData;
};





