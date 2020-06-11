let defaultCity = '武汉'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default{
  city: defaultCity
  // localStorage.city || '武汉'
}
