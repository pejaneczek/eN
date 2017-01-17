function cleanHistory(history, userId) {
    var cleanObj = {}
    var cleanHist = {}
    var cleanHistArr = []
    var i

    if (!history) {
        return
    }

    for (i = 0; i < history.length; i++) {
        cleanObj = {
            url: history[i].url,
            title: history[i].title,
            last_visit: history[i].lastVisitTime,
            visit_count: history[i].visitCount,
            create_date: new Date().getTime()
        }
        cleanHistArr.push(cleanObj)
    }

    cleanHist = {
        user_id: userId,
        history: cleanHistArr
    }

    return cleanHist
}


setInterval(function () {
    var dayInSeconds = 1000 * 60 * 60 * 24
    var oneDay = (new Date).getTime() - dayInSeconds

    chrome.cookies.get({
        url: 'https://localhost', // TODO
        name: 'eN' // TODO
    }, function (cookie) {
        if (!cookie) {
            return
        }
        chrome.history.search({
            'text': '',
            'startTime': oneDay
        }, function (historyArr) {
            var cleanedArr

            if (!historyArr) {
                return
            }
            cleanedArr = cleanHistory(historyArr, cookie.value)
            try {
                $.ajax({
                    url: 'http://localhost:3000/user/history/update', //TODO
                    contentType: "application/json",
                    type: "POST",
                    data: JSON.stringify(cleanedArr),
                    success: function (res) {
                        console.log(res)
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    },
                    dataType: 'json'
                });
            } catch (e) {

            }

        })
    })
}, 10000)

