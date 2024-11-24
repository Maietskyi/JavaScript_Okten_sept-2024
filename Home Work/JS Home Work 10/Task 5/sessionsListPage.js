const pageView = JSON.parse(localStorage.getItem('pageView'))
let sessionsListPage = document.getElementById('sessionsListPage')


for (const pageViewElement of pageView) {
    const containerPageView = document.createElement('div')
    containerPageView.innerText = pageViewElement;
    sessionsListPage.appendChild(containerPageView)
}




