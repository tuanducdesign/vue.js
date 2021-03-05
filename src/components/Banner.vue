<template>
    <link rel="preload" href="https://cdn.tuanducdesign.com/assets/images/topheader.jpg" as="image" />
    <header class="header-container" itemtype="https://schema.org/WPHeader" itemscope="itemscope" role="banner" id="header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h1 itemprop="name" class="info-landing">Hi! Mình là <span>{{ banner_title }}</span></h1>
                    <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                        <img class="profile mmo-float img-thumbnail" src="{{ banner_img }}" alt="{{ banner_title }}" loading="lazy" />
                        <meta itemprop="url" content="{{ banner_img }}" />
                        <meta itemprop="width" content="{{ banner_seo_google_width }}" />
                        <meta itemprop="height" content="{{ banner_seo_google_height }}" />
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
            banner_title: String,
            banner_img: String,
            banner_seo_google_width: String,
            banner_seo_google_height: String
        }
    }
</script>