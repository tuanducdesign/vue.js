<template>
  <div id="root">
    <Navication/>
    <Banner/>
  </div>
</template>

<script>
// Navication
import Navication from './components/Navication.vue'
// Header
import Banner from './components/Banner.vue'
// About
//import About from './components/About.vue'
// Exp
//import Exp from './components/Exp.vue'
// Time
//import Time from './components/Time.vue'
// Music
//import Music from './components/Music.vue'
// Website
//import Website from './components/Website.vue'
// Contact
//import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Navication,
    Banner
  }
}
</script>