export const setCookie = (key, value, expire = 10) => {
  let timeSeting = Date.now();
  timeSeting = timeSeting + expire * 60 * 60 * 1000;
  const timeToexpire = new Date(timeSeting);

  const cookieSetting =
    `${key}=${value}; expires=` + timeToexpire.toUTCString();
  document.cookie = cookieSetting;
};

export const removeCookie = (key) => {
  document.cookie = `${key}=; expires=` + 'Thu, 01 Jan 1970 00:00:00 UTC;';
};

export const getCookie = (cname) => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
