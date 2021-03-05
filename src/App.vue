<template>
    <div id="root">
        <!-- Navbar -->
        <Navication logourl="https://tuanducdesign.com" logotitle="Trần Tuấn Đức" logoimg="https://cdn.tuanducdesign.com/assets/images/tuanducdesign.jpg" logowidth="50" navhomeurl="https://tuanducdesign.com" />
        <!-- Header -->
        <Banner banner_title="Trần Tuấn Đức" banner_img="https://cdn.tuanducdesign.com/assets/images/tuanducdesign.jpg" banner_seo_google_width="128" banner_seo_google_height="128" />
        <!-- About -->
        <About />
        <!-- Exp -->
        <Exp anhso1_url="https://muathongminh.net" anhso1_title="Mua Thông Minh" anhso1_img="https://cdn.tuanducdesign.com/assets/images/muathongminh.jpg" anhso2_url="https://traugacbep.vn" anhso2_title="Trâu Gác Bếp" anhso2_img="https://cdn.tuanducdesign.com/assets/images/traugacbep.jpg" anhso3_url="https://lachongvien.vn" anhso3_title="Lạc Hồng Viên" anhso3_ing="https://cdn.tuanducdesign.com/assets/images/lachongvien.jpg" />
        <!-- Time -->
        <Time />
        <!-- Music -->
        <Music embed="Pz3tm92Zpvs" />
        <!-- Website -->
        <Website lienketweb1_url="https://thachpham.com/" lienketweb1_img="https://cdn.tuanducdesign.com/assets/images/thachpham.png" lienketweb1_title="Thạch Phạm" lienketweb2_url="https://myclass.vn" lienketweb2_img="https://cdn.tuanducdesign.com/assets/images/myclass.png" lienketweb2_title="My Class" lienketweb3_url="https://zendvn.com" lienketweb3_img="https://cdn.tuanducdesign.com/assets/images/zend.png" lienketweb3_title="Zend" />
        <!-- Contact -->
        <Contact contact_url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7451.479825628708!2d105.78735892285039!3d20.962957412878765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad28ea29211f%3A0x604fe71832a3e934!2zS2h1IMSRw7QgdGjhu4sgWGEgTGEsIFBow7pjIExhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1519359932775" />
        <div style="height:5px">
            <div style="width:25%;background:#af472d;height:100%;float:left"></div>
            <div style="width:25%;background:#c6ac27;height:100%;float:left"></div>
            <div style="width:25%;background:#207347;height:100%;float:left"></div>
            <div style="width:25%;background:#8f99b6;height:100%;float:left"></div>
        </div>
        <!-- Footer -->
        <Footer copyright="2021" design_url="https://www.facebook.com/tuanduc.support" design_name="Trần Tuấn Đức" socials_twitter_url="https://twitter.com/tuanducdesign/" socials_twitter_name="Twitter" socials_facebook_url="https://www.facebook.com/tuanduc.support/" socials_facebook_name="Facebook" socials_instagram_url="https://instagram.com/mi.profile.56/" socials_instagram_name="Instagram" />
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
