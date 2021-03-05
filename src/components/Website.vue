<template>
    <section class="landing-container" id="lienketwb">
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Liên Kết Website</h2>
                    </div>
                    <p class="block-desc">Có vô vàn các trang dạy website hay nhưng mình chỉ chú tâm tới ba website hữu ích nhất đó là <strong>{{ lienketweb1-title }}</strong>,<strong>{{ lienketweb2-title }}</strong> và <strong>{{ lienketweb3-title }}</strong>.
                    </p>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb1-img }}" as="image" />
                            <a href="{{ lienketweb1-url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb1-title }}">
                                <img src="{{ lienketweb1-img }}" alt="{{ lienketweb1-title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb1">{{ lienketweb1-title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb2-img }}" as="image" />
                            <a href="{{ lienketweb2-url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb2-title }}">
                                <img src="{{ lienketweb2-img }}" alt="{{ lienketweb2-title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb2">{{ lienketweb2-title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ lienketweb3-img }}" as="image" />
                            <a href="{{ lienketweb3-url }}" target="_blank" rel="nofollow noreferrer" title="{{ lienketweb3-title }}">
                                <img src="{{ lienketweb3-img }}" alt="{{ lienketweb3-title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="lienketwb3">{{ lienketweb3-title }}</div>
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
            lienketweb1-url: String,
            lienketweb1-img: String,
            lienketweb1-title: String,
            // box 2
            lienketweb2-url: String,
            lienketweb2-img: String,
            lienketweb2-title: String,
            // box 3
            lienketweb3-url: String,
            lienketweb3-img: String,
            lienketweb3-title: String
        }
    }
</script>