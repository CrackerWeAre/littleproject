const setCookie = (name, value, exp) => {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

const deleteCookie = (name) =>  {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const uidCreate = () => {
    var _id1 = parseInt(Math.random() * 10000000000);
    var _id2 = parseInt(new Date().getTime() / 1000)
    return _id1 + '.' + _id2;
};
// uid 체크 (Piclick User ID)
document.cookie.uid = getCookie('mkoaUID');
if (document.cookie.uid === null || document.cookie.uid.length !== 21) document.cookie.uid = uidCreate();

document.cookie.todayCheckCookie = getCookie('todayCookie');
if (document.cookie.todayCheckCookie == null) document.cookie.todayCheckCookie = 'None';

// 만료날짜 갱신
setCookie('mkoaUID', document.cookie.uid, 365);