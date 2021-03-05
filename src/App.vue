<template>
    <div id="root">
        <!-- Navbar -->
        <Navication />
        <!-- Header -->
        <Banner />
        <!-- About -->
        <About />
        <!-- Exp -->
        <Exp />
        <!-- Time -->
        <Time />
        <!-- Music -->
        <Music />
        <!-- Website -->
        <Website />
        <!-- Contact -->
        <Contact />
        <div style="height:5px">
            <div style="width:25%;background:#af472d;height:100%;float:left"></div>
            <div style="width:25%;background:#c6ac27;height:100%;float:left"></div>
            <div style="width:25%;background:#207347;height:100%;float:left"></div>
            <div style="width:25%;background:#8f99b6;height:100%;float:left"></div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>
<script>
    // Navication
    import Navication from './components/Navication.vue'
    // Header
    import Banner from './components/Banner.vue'
    // About
    import About from './components/About.vue'
    // Exp
    import Exp from './components/Exp.vue'
    // Time
    import Time from './components/Time.vue'
    // Music
    import Music from './components/Music.vue'
    // Website
    import Website from './components/Website.vue'
    // Contact
    import Contact from './components/Contact.vue'
    // Footer
    import Footer from './components/Footer.vue'
    // Export components
    export default {
        name: 'app',
        components: {
            Navication,
            Banner,
            About,
            Exp,
            Time,
            Music,
            Website,
            Contact,
            Footer
        },
        mounted() {
            // Jquery
            let jqueryScript = document.createElement('script')
            jqueryScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js')
            document.head.appendChild(jqueryScript)
            // Bootstrap bundle
            let bundleScript = document.createElement('script')
            bundleScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js')
            document.head.appendChild(bundleScript)
            // Popper
            let popperScript = document.createElement('script')
            popperScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js')
            document.head.appendChild(popperScript)
            // Bootstrap
            let bootstrapScript = document.createElement('script')
            bootstrapScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js')
            document.head.appendChild(bootstrapScript)
            
        },
    }

</script>
<style>
    @import '/css/app.min.css';
</style>