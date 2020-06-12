let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
// eslint-disable-next-line no-empty
} catch (e) {}

export default{
  city: defaultCity
  // localStorage.city || '武汉'
}
