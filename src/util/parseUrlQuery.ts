import {URL} from "url";

export const parseUrlQuery = (url) => {

    const myURL = new URL(url)

    let parsedUrl = ''
    myURL.searchParams.forEach((value, key) => {
        parsedUrl += `**${key}:**`
        const valueWithSpace = value.replace(/,/gi, ', ')
        parsedUrl += ' ' + valueWithSpace + ' | '
    })
    return parsedUrl
}
