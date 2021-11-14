export const setCookie = (key, value, expire = 10) => {
  let timeSeting = Date.now();
  timeSeting = timeSeting + expire * 60 * 60 * 1000;
  const timeToexpire = new Date(timeSeting);
  console.log('current', timeToexpire);

  const cookieSetting =
    `${key}=${value}; expires=` + timeToexpire.toUTCString();
  console.log(cookieSetting);
  document.cookie = cookieSetting;
};

export const removeCookie = (key) => {
  document.cookie = `${key}=; expires=` + 'Thu, 01 Jan 1970 00:00:00 UTC;';
};
