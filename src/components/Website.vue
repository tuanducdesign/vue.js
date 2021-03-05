<template>
    <section class="landing-container" id="lienketwb">
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Liên Kết Website</h2>
                    </div>
                    <p class="block-desc">Có vô vàn các trang dạy website hay nhưng mình chỉ chú tâm tới ba website hữu ích nhất đó là <strong>{{ lienketweb1_title }}</strong>,<strong>{{ lienketweb2_title }}</strong> và <strong>{{ lienketweb3_title }}</strong>.
                    </p>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb1_img }}" as="image" />
                            <a href="{{ lienketweb1_url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb1_title }}">
                                <img src="{{ lienketweb1_img }}" alt="{{ lienketweb1_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb1">{{ lienketweb1_title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb2_img }}" as="image" />
                            <a href="{{ lienketweb2_url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb2_title }}">
                                <img src="{{ lienketweb2_img }}" alt="{{ lienketweb2_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb2">{{ lienketweb2_title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb3_img }}" as="image" />
                            <a href="{{ lienketweb3_url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb3_title }}">
                                <img src="{{ lienketweb3_img }}" alt="{{ lienketweb3_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb3">{{ lienketweb3_title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Website',
        props: {
            // box 1
            lienketweb1_url: String,
            lienketweb1_img: String,
            lienketweb1_title: String,
            // box 2
            lienketweb2_url: String,
            lienketweb2_img: String,
            lienketweb2_title: String,
            // box 3
            lienketweb3_url: String,
            lienketweb3_img: String,
            lienketweb3_title: String
        }
    }
</script>