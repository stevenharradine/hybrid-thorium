export default {
  methods: {
    getCookie(cookieName) {
      let cookies = (document.cookie ? document.cookie.split('; ') : []);
      let result = '';
      for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split('=');
        if (parts[0] === cookieName) {
          result = decodeURIComponent(parts[1]);
          break;
        }
      }
      return result;
    },
    setCookie({ key, value, path, hoursExp }) {
      let ablauf = new Date();
      let expireTime = ablauf.getTime() + (hoursExp * 60 * 60 * 1000);
      ablauf.setTime(expireTime);
      document.cookie = `${key}=${value}; path=${path}; expires=${ablauf.toGMTString()}`;
    }
  },
};
