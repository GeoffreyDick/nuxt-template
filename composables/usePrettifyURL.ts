export const usePrettifyURL = (baseURL: string, fullPath: string): string => {
    const validURL: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    if (!validURL.test(baseURL)) {
        throw `${baseURL} is not a valid URL`
    }

    baseURL = baseURL.replace(/\/$/, "")
    fullPath = fullPath.replace(/\/$/, "")

    return baseURL + fullPath
}