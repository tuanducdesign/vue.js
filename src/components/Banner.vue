<template>
    <header class="header-container" itemtype="https://schema.org/WPHeader" itemscope="itemscope" role="banner" id="header" v-webp:bg="require('assets/images/topheader.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h1 itemprop="name" class="info-landing">Hi! Mình là <span>Trần Tuấn Đức</span></h1>
                    <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                        <img class="profile mmo-float img-thumbnail" v-webp="/assets/images/tuanducdesign.jpg" alt="Trần Tuấn Đức" loading="lazy" />
                        <meta itemprop="url" content="/assets/images/tuanducdesign.jpg" />
                        <meta itemprop="width" content="128" />
                        <meta itemprop="height" content="128" />
                    </div>
                    <p itemprop="description" class="info-desc">Chào mừng bạn đến với trang profile của mình</p>
                    <a href="#vetoi" class="vetoi" address="true" title="Về tôi"></a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'Banner',
        props: {
        }
    }
</script>