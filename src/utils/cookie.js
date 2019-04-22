/**
 * Created by Ysssssss on 19/4/22.
 */

export function setCookie (name, value, days){
    if(!days){
        days = 30;
    }
    const expiresTimes = new Date(Date.now() + days * 86400000)
    document.cookie = `${name}=${value}; path=/; expires=${expiresTimes}`
}

/*get cookie*/
export function getCookie (name) {
    const cookieString = "; " + document.cookie;
    const cookies = cookieString.split( "; " + name + "=" );
    if ( cookies.length === 2 ){
        return cookies.pop().split( ";" ).shift();
    }
    return null;
}