function getUrl() { return window.location.href }

function setLanguageToUrl(language, url) { window.location.replace(urls.get(url) + languages.get(language)) }

function setTargetUrl(i) { window.location.replace(urls.get(i) + getUrlLanguage(getUrl())) }

function urlIsPortuguese() { return getUrl().includes("?lg=pt-br") }

function urlIsEnglish() { return getUrl().includes("?lg=en") }

function urlIsEnglishOrDefault() { return getUrl().includes("?lg=en") || !getUrl().includes("?lg=") }

function translateByText(text) {
    if (urlIsPortuguese()) { return mapPtBr.get(text) } 
    else if (urlIsEnglishOrDefault()) { return mapEn.get(text) }
}

function getUrlLanguage(url) {
    urlParameters = url.split('?')
    
    for (i = 0; i < urlParameters.length; i++) {
        if (languages.get(urlParameters[i])) { return languages.get(urlParameters[i]) }
    }

    return ''
}

var languages = new Map()
languages.set("english", "?lg=en")
languages.set("portuguese", "?lg=pt-br")
languages.set("lg=en", "?lg=en")
languages.set("lg=pt-br", "?lg=pt-br")

var urls = new Map()
urls.set("home", "index.html")
urls.set("professional", "pgs/professional.html")
urls.set("professional-career", "pgs/professional.html#career")
urls.set("professional-education", "pgs/professional.html#education")
urls.set("professional-personal", "pgs/professional.html#personal")
urls.set("technical", "pgs/technical.html")
urls.set("technical-backend", "pgs/technical.html#backend")
urls.set("technical-database", "pgs/technical.html#database")
urls.set("technical-data", "pgs/technical.html#data")
urls.set("technical-devops", "pgs/technical.html#devops")
urls.set("technical-focus", "pgs/technical.html#focus")
urls.set("technical-frontend", "pgs/technical.html#frontend")
urls.set("technical-interest", "pgs/technical.html#interest")
urls.set("technical-landscape", "pgs/technical.html#landscape")
urls.set("technical-resume", "pgs/technical.html#resume")
urls.set("technical-technology", "pgs/technical.html#technology")
urls.set("portfolio", "pgs/portfolio.html")
urls.set("portfolio-mobile", "pgs/portfolio.html#mobile")
urls.set("portfolio-webapp", "pgs/portfolio.html#webapp")