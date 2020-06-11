export default{
  changeCity (ctx, city) {
    console.log(city)
    ctx.commit('changeCity', city)
  }
}
