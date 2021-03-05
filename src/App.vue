<template>
    <div id="root">
        <!-- Navbar -->
        <Navication></Navication>
        <!-- Header -->
        <Banner></Banner>
        <!-- About -->
        <About></About>
        <!-- Exp -->
        <Exp></Exp>
        <!-- Time -->
        <Time></Time>
        <!-- Music -->
        <Music></Music>
        <!-- Website -->
        <Website></Website>
        <!-- Contact -->
        <Contact></Contact>
        <div style="height:5px">
            <div style="width:25%;background:#af472d;height:100%;float:left"></div>
            <div style="width:25%;background:#c6ac27;height:100%;float:left"></div>
            <div style="width:25%;background:#207347;height:100%;float:left"></div>
            <div style="width:25%;background:#8f99b6;height:100%;float:left"></div>
        </div>
        <!-- Footer -->
        <Footer></Footer>
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
        }
    }
</script>