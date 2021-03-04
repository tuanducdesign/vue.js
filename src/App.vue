<template>
  <div id="root">
    <Navication/>
  </div>
</template>

<script>
// Navication
import Navication from './components/Navication.vue'
// Header
//import Banner from './components/Banner.vue'
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
    Navication
  },
mounted() {
      // Jquery
      let jqueryScript = document.createElement('script')
      jqueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js','defer')
      document.head.appendChild(jqueryScript)
      // Bootstrap bundle
      let bundleScript = document.createElement('script')
      bundleScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js','async','1')
      document.head.appendChild(bundleScript)
      // Popper
      let popperScript = document.createElement('script')
      popperScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js','async')
      document.head.appendChild(popperScript)
      // Bootstrap
      let bootstrapScript = document.createElement('script')
      bootstrapScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js','async')
      document.head.appendChild(bootstrapScript)
      // Custom
      let mainScript = document.createElement('script')
      mainScript.setAttribute('src','https://cdn.tuanducdesign.com/assets/js/main.min.js','async')
      document.head.appendChild(mainScript)
    },
}
</script>

<style>
</style>
