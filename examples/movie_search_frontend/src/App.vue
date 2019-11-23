<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width:200px;">
    <HelloWorld msg="IMDB Movie Search"/>
    <div>
      <input type="text" class="search" v-model="movie" placeholder="Please enter a movie name">
      &nbsp;&nbsp;&nbsp;
      <input type="button" value="Search" class="search-button" @click="search"/>
    </div>
    <br />
    <div v-if="isLoading">Loading...</div>
    <br /><br />
    <div v-for="item in results" v-bind:key="item.name" style="width:50%;margin:auto" v-show="item.title">
      <div style="float:left;margin-right:40px;width:50%;">
        <img :src="item.poster"/>
      </div>
      <div style="float:left;width:40%;">
        <table>
          <tr>
            <td><b>Title:</b></td><td>
              <b>{{item.title}}</b></td>
          </tr>
          <tr>
            <td><b>Year:</b></td><td>{{item.year}}</td>
          </tr>
          <tr>
            <td><b>awards:</b></td><td>{{item.awards}}</td>
          </tr>
          <tr>
            <td><b>country:</b></td><td>{{item.country}}</td>
          </tr>
          <tr>
            <td><b>director:</b></td><td>{{item.director}}</td>
          </tr>
          <tr>
            <td><b>imdbid:</b></td><td>{{item.imdbid}}</td>
          </tr>
          <tr>
            <td><b>imdburl:</b></td>
            <td>
              <a :href="item.imdburl" target="_blank">Click here</a>
            </td>
          </tr>
          <tr>
            <td><b>languages:</b></td><td>{{item.languages}}</td>
          </tr>
          <tr>
            <td><b>rated:</b></td><td>{{item.rated}}</td>
          </tr>
          <tr>
            <td><b>rating:</b></td><td>{{item.rating}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-for="item in results" v-bind:key="item.name" style="width:50%;margin:auto" v-show="!item.title">
      <h2>Not Found</h2>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      searched: false,
      isLoading: false,
      movie: null,
      results: []
    }
  },
  methods: {
    search() {
      this.isLoading = true;
      this.searched = true;
      this.results = null;
      axios.get('http://localhost:3000', {
        params:{
          movie: this.movie
        }
      }).then(response => {
        this.results = [response.data];
        this.isLoading = false;
        /* eslint-disable */
        console.log(response);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.search {
  width:350px;
  height:35px;
  color: silver;
  font-size:22px;
  padding-left:10px;
  padding-right:10px;
  outline:0px;
  border:1px solid silver;
  border-radius: 5px;
}
.search-button {
  height: 40px;
  background: #589dbc;
  color: white;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: -3px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.search-button:hover {
  background: #1d9fdf;
}
tr td:first-child {
  text-align:right;
}
tr td:last-child {
  text-align:left;
}
</style>
