import { describe, expect, it } from "vitest";
import { usePrettifyURL } from './usePrettifyURL'

describe("usePrettifyURL", () => {
    let baseURL = 'https://foo.com'
    let fullPath = '/bar'

    it("slices trailing slash from baseURL", () => {
        baseURL = 'https://foo.com/'
        expect(usePrettifyURL(baseURL, fullPath)).toEqual('https://foo.com/bar')
    });
    
    it("slices trailing slash from fullPath", () => {
        fullPath = '/bar/'
        expect(usePrettifyURL(baseURL, fullPath)).toEqual('https://foo.com/bar')
    });

    it("leaves other trailing characters alone", () => {
        expect(usePrettifyURL(baseURL, fullPath)).toEqual('https://foo.com/bar')
    });

    it("throws on invalid baseURLs", () => {
        expect(() => usePrettifyURL('htps://foo.com', fullPath)).toThrowError()
        expect(() => usePrettifyURL('https:// foo.com', fullPath)).toThrowError()
        expect(() => usePrettifyURL('https:/foo.com', fullPath)).toThrowError()
        expect(() => usePrettifyURL('foo.com', fullPath)).toThrowError()
        expect(() => usePrettifyURL('https://foon\'t.com/', fullPath)).toThrowError()
    });
});
