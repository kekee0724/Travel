<template>
  <div>
    <city-header />
    <div id="city-container">
      <city-search :cities="cities" />
      <city-list
        :cities="cities"
        :hot="hotCities"
        :letter="letter"
      />
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
      />
    </div>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
      // console.log(res)
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
  #city-container {
    -webkit-tap-highlight-color: transparent;
    font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    color: #212121;
    // font-size: .28em;
    line-height: 1;
  }
</style>
