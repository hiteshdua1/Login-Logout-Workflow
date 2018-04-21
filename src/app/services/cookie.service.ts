export class CookieService  {

    constructor() {}

    getCookie(cookieName) {
        const cookies = {};
        const pairs = document.cookie.split('; ');
        for (const key in pairs) {
            if (pairs.hasOwnProperty(key)) {
                const pair = pairs[key].split('=');
                cookies[pair[0]] = decodeURIComponent(pair[1]);
            }
        }
        return cookies[cookieName];
    }

    getUserCookie() {
        const cookie = this.getCookie('app_cookie');
        if (cookie) {
            return JSON.parse(cookie);
        } else {
            return undefined;
        }
    }
}
