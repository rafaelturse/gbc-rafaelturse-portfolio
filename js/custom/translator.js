window.onload = function pageLoad() {
    visibility("overlay-loader", true)
    translateProcess()
    visibility("overlay-loader", false)
}

function translateProcess() {
    translate()
    setDefaultTranslateBox()
}

function setDefaultTranslateBox() {    
    if (urlIsPortuguese()) {
        visibility("flag-canada-translate-box-default", false)
        visibility("label-canada-translate-box-default", false)
        visibility("flag-brazil-translate-box-default", true)
        visibility("label-brazil-translate-box-default", true)
    } else {
        visibility("flag-canada-translate-box-default", true)
        visibility("label-canada-translate-box-default", true)
        visibility("flag-brazil-translate-box-default", false)
        visibility("label-brazil-translate-box-default", false)
    }
}

function translateByText(i) {
    if (urlIsPortuguese()) { return mapPtBr.get(i) } 
    else if (urlIsEnglishOrDefault()) { return mapEn.get(i) }
}

function translateTargets() {
    var all = document.getElementsByTagName("*")
    var targets = new Array()
    
    for (var i=0; i < all.length; i++) {
        if (all[i].className.length > 0) {
            if (all[i].className.includes("translate-")) { targets.push(all[i]) }
        }
    }

    return targets
}

function translate() {
    var targets = translateTargets()

    for (var i=0; i < targets.length; i++) {
        if (urlIsPortuguese()) { targets[i].innerHTML = mapPtBr.get(targets[i].className)
        } else if (urlIsEnglishOrDefault()) { targets[i].innerHTML = mapEn.get(targets[i].className) }
    }
}

/* *** ******* *** */
/* *** ENGLISH *** */
/* *** ******* *** */
var mapEn = new Map()
/* BUTTON */
mapEn.set("translate-button.more", "more")
/* LABEL */
mapEn.set("translate-label.archive", "ARCHIVE")
mapEn.set("translate-label.backend", "backend")
mapEn.set("translate-label.book", "book")
mapEn.set("translate-label.database", "database")
mapEn.set("translate-label.developed-by", "Developed by")
mapEn.set("translate-label.devops", "devOps")
mapEn.set("translate-label.english", "English")
mapEn.set("translate-label.frontend", "frontend")
mapEn.set("translate-label.motion", "motion")
mapEn.set("translate-label.music", "music")
mapEn.set("translate-label.new", "NEW")
mapEn.set("translate-label.portuguese", "Portuguese")
mapEn.set("translate-label.top", "TOP")
mapEn.set("translate-label.trip", "trip")
/* TAGS */
mapEn.set("translate-tags.personal", "Personal")
mapEn.set("translate-tags.career", "Career")
mapEn.set("translate-tags.skill", "Skill")
mapEn.set("translate-tags.music", "Music")
mapEn.set("translate-tags.companies", "Companies")
mapEn.set("translate-tags.education", "Education")
mapEn.set("translate-tags.landscape", "Landscape")
mapEn.set("translate-tags.professional", "Professional")
mapEn.set("translate-tags.data", "Data")
mapEn.set("translate-tags.abroad", "Abroad")
mapEn.set("translate-tags.technical", "Technical")
mapEn.set("translate-tags.technology", "Technology")
mapEn.set("translate-tags.systems", "Systems")
mapEn.set("translate-tags.articles", "Articles")
mapEn.set("translate-tags.design", "Design")
mapEn.set("translate-tags.photos", "Photos")
mapEn.set("translate-tags.runnig", "Runnig")
mapEn.set("translate-tags.portfolio", "Portfolio")
mapEn.set("translate-tags.akf-database", "database")
mapEn.set("translate-tags.akf-design", "design")
mapEn.set("translate-tags.akf-technology", "technology")
mapEn.set("translate-tags.akf-data", "data")
mapEn.set("translate-tags.akf-systems", "systems")
mapEn.set("translate-tags.development", "development")
mapEn.set("translate-tags.software", "software")
mapEn.set("translate-tags.program", "program")
mapEn.set("translate-tags.coding", "coding")
mapEn.set("translate-tags.mvc", "mvc")
mapEn.set("translate-tags.erp", "erp")
mapEn.set("translate-tags.web-applications", "web-applications")
mapEn.set("translate-tags.mobile", "mobile")
mapEn.set("translate-tags.dashboard", "dashboard")
mapEn.set("translate-tags.reports", "reports")
mapEn.set("translate-tags.design-patterns", "design-patterns")
mapEn.set("translate-tags.solid", "solid")
mapEn.set("translate-tags.clean-code", "clean-code")
mapEn.set("translate-tags.orm", "orm")
mapEn.set("translate-tags.mer", "mer")
mapEn.set("translate-tags.devOps", "devOps")
mapEn.set("translate-tags.music", "music")
mapEn.set("translate-tags.draw", "draw")
mapEn.set("translate-tags.digital-painting", "digital-painting")
mapEn.set("translate-tags.writing", "writing")
mapEn.set("translate-tags.trip", "trip")

/* TEXT */
mapEn.set("translate-text.articles.describe", "Articles and thoughts almost always about technology and software development, but also about places, music, films, series, books and everything else")
mapEn.set("translate-text.celebrate-describe", "* don't make fun of me! I can moderate this ... lol")
mapEn.set("translate-text.motiondesign-describe", "Logo animation and sound design with the professional Adobe After Effects")
mapEn.set("translate-text.motiondesignprocess-describe", "Process of creating a logo using Adobe After Effects, where the project is extremely organized and developed with professional and modern techniques of animation and sound design")
mapEn.set("translate-text.professional-education-short-describe", "Education, courses, languages and certificates")
mapEn.set("translate-text.professional.short-describe", "Information about education, career and profile")
mapEn.set("translate-text.resume.describe", "Easy to find. > Technical Page, Data Section > Resume. See in the page or download if you want, in .PDF or .DOCX")
mapEn.set("translate-text.resume.short-describe", "Professional developer resume to download")
mapEn.set("translate-text.systems.describe", "The best reasons for you to convince yourself that you can no longer be without a strong internet identity and a modern and secure system")
mapEn.set("translate-text.professional.describe", "Information about my education, certificates, professional career, and profile")
mapEn.set("translate-text.technical.describe", "Information about my development skills, programming languages, charts, and other dev stuffs")
mapEn.set("translate-text.technical.short-describe", "Information about development skills and programming languages")
mapEn.set("translate-text.technical-technology-short-describe", "Techonological level of my systems developer skills")
/* TITLE */
mapEn.set("translate-title.celebrate", "Celebrate")
mapEn.set("translate-title.motiondesign", "Motion Design")
mapEn.set("translate-title.resume", "Resume")
mapEn.set("translate-title.tags", "Tags")
mapEn.set("translate-title.ask-me-for-tags", "Ask Me For - TAGS")
mapEn.set("translate-title.professional", "Professional")
mapEn.set("translate-title.technical", "Technical")

/* *** ********** *** */
/* *** PORTUGUESE *** */
/* *** ********** *** */
var mapPtBr = new Map();
/* BUTTON */
mapPtBr.set("translate-button.more", "mais")
/* LABEL */
mapPtBr.set("translate-label.archive", "ARQUIVO")
mapPtBr.set("translate-label.backend", "backend")
mapPtBr.set("translate-label.book", "livro")
mapPtBr.set("translate-label.database", "database")
mapPtBr.set("translate-label.developed-by", "Desenvolvido por")
mapPtBr.set("translate-label.devops", "devOps")
mapPtBr.set("translate-label.english", "Inglês")
mapPtBr.set("translate-label.frontend", "frontend")
mapPtBr.set("translate-label.motion", "motion")
mapPtBr.set("translate-label.music", "música")
mapPtBr.set("translate-label.new", "NOVO")
mapPtBr.set("translate-label.portuguese", "Português")
mapPtBr.set("translate-label.top", "TOP")
mapPtBr.set("translate-label.trip", "viagem")
/* TAGS */
mapPtBr.set("translate-tags.personal", "Pessoal")
mapPtBr.set("translate-tags.career", "Carreira")
mapPtBr.set("translate-tags.skill", "Habilidades")
mapPtBr.set("translate-tags.music", "Música")
mapPtBr.set("translate-tags.companies", "Empresas")
mapPtBr.set("translate-tags.education", "Educação")
mapPtBr.set("translate-tags.landscape", "Paisagem")
mapPtBr.set("translate-tags.professional", "Profissional")
mapPtBr.set("translate-tags.data", "Dados")
mapPtBr.set("translate-tags.abroad", "Estrangeiro")
mapPtBr.set("translate-tags.technical", "Técnico")
mapPtBr.set("translate-tags.technology", "Tecnologia")
mapPtBr.set("translate-tags.systems", "Sistemas")
mapPtBr.set("translate-tags.articles", "Artigos")
mapPtBr.set("translate-tags.design", "Design")
mapPtBr.set("translate-tags.photos", "Fotos")
mapPtBr.set("translate-tags.runnig", "Corrida")
mapPtBr.set("translate-tags.portfolio", "Portifólio")
mapPtBr.set("translate-tags.akf-design", "design")
mapPtBr.set("translate-tags.ak-database", "banco de dados")
mapPtBr.set("translate-tags.akf-technology", "tecnologia")
mapPtBr.set("translate-tags.akf-data", "dados")
mapPtBr.set("translate-tags.akf-systems", "sistemas")
mapPtBr.set("translate-tags.development", "desenvolvimento")
mapPtBr.set("translate-tags.software", "software")
mapPtBr.set("translate-tags.program", "programação")
mapPtBr.set("translate-tags.coding", "codificação")
mapPtBr.set("translate-tags.mvc", "mvc")
mapPtBr.set("translate-tags.erp", "erp")
mapPtBr.set("translate-tags.web-applications", "web-applications")
mapPtBr.set("translate-tags.mobile", "mobile")
mapPtBr.set("translate-tags.dashboard", "dashboard")
mapPtBr.set("translate-tags.reports", "relatórios")
mapPtBr.set("translate-tags.design-patterns", "padrões de projetos")
mapPtBr.set("translate-tags.solid", "solid")
mapPtBr.set("translate-tags.clean-code", "código limpo")
mapPtBr.set("translate-tags.orm", "orm")
mapPtBr.set("translate-tags.database", "banco de dados")
mapPtBr.set("translate-tags.mer", "mer")
mapPtBr.set("translate-tags.devOps", "devOps")
mapPtBr.set("translate-tags.music", "música")
mapPtBr.set("translate-tags.draw", "desenho")
mapPtBr.set("translate-tags.digital-painting", "pintura digital")
mapPtBr.set("translate-tags.writing", "escrita")
mapPtBr.set("translate-tags.trip", "viagem")

/* TEXT */
mapPtBr.set("translate-text.articles.describe", "Artigos e pensamento quase sempre sobre técnologia e desenvolvimento de software, mas também sobre lugares, música, filmes, séries, livros e tudo mais")
mapPtBr.set("translate-text.celebrate-describe", "* não me zoe! Eu posso moderar isso ... lol")
mapPtBr.set("translate-text.motiondesign-describe", "Animação de logos e sonoplastia com o profissional Adobe After Effects")
mapPtBr.set("translate-text.motiondesignprocess-describe", "Processo de criação de um logo utilizando o Adobe After Effects, onde o projeto é extremamente organizado e desenvolvido com técnicas profissionais e modernas  de animação e sonoplastia")
mapPtBr.set("translate-text.professional-education-short-describe", "Educação, cursos, idiomas e certificados")
mapPtBr.set("translate-text.professional.short-describe", "Informação sobre educação, carreira e perfil")
mapPtBr.set("translate-text.resume.describe", "Fácil de encontrar. > Página Técnica, Sessão de Dados > Currículo. Veja na página ou baixe se quiser, em .PDF ou .DOCX")
mapPtBr.set("translate-text.resume.short-describe", "Currículo para download")
mapPtBr.set("translate-text.systems.describe", "Os melhores motivos para você se convencer de que não pode mais ficar sem uma forte identidade na Internet e um sistema moderno e seguro")
mapPtBr.set("translate-text.professional.describe", "Informação sobre minha educação, certificados, carreira profissional e perfil")
mapPtBr.set("translate-text.technical.describe", "Informação sobre minhas habilidades de desenvolvimento, linguagens de programação, gráficos e outras coisas")
mapPtBr.set("translate-text.technical.short-describe", "Informação sobre habilidades de desenvolvimento e linguagens de programação")
mapPtBr.set("translate-text.technical-technology-short-describe", "Nível tecnológico das minhas habilidades de desenvolvedor de sistemas")
/* TITLE */
mapPtBr.set("translate-title.celebrate", "Comemore")
mapPtBr.set("translate-title.motiondesign", "Motion Design")
mapPtBr.set("translate-title.resume", "Currículo")
mapPtBr.set("translate-title.tags", "Etiquetas")
mapPtBr.set("translate-title.ask-me-for-tags", "Etiquetas - Me Peça Para")
mapPtBr.set("translate-title.professional", "Profissional")
mapPtBr.set("translate-title.technical", "Técnico")