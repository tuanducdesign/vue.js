<template>
    <section class="landing-container" id="kinhnghiem">
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Kinh nghiệm của Trần Tuấn Đức</h2>
                    </div>
                </div>
                <p class="block-desc">Mình trên hai năm kinh nghiệm về html javascript và css luôn luôn quyết định đúng đắn trước khi làm website Mình luôn luôn phải suy nghĩ xem chọn màu nào phù hợp với một website.</p>
            </div>
        </div>
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Một số khách hàng mà mình đã giúp</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row text-center">
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ anhso1_img }}" as="image" />
                            <a href="{{ anhso1_url }}" target="_blank" rel="nofollow noreferrer" title="{{ anhso1_title }}">
                                <img src="{{ anhso1_img }}" alt="{{ anhso1_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="anhso1">{{ anhso1_title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ anhso2_img }}" as="image" />
                            <a href="{{ anhso2_url }}" target="_blank" rel="nofollow noreferrer" title="{{ anhso2_title }}">
                                <img src="{{ anhso2_img }}" alt="{{ anhso2_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="anhso2">{{ anhso2_title }}</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="media">
                        <div class="media-left">
                            <link rel="preload" href="{{ anhso3_img }}" as="image" />
                            <a href="{{ anhso3_url }}" target="_blank" rel="nofollow noreferrer" title="{{ anhso3_title }}">
                                <img src="{{ anhso3_img }}" alt="{{ anhso3_title }}" class="mmo-float img-thumbnail" loading="lazy" />
                                <div id="anhso3">{{ anhso3_title }}</div>
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
        name: 'Exp',
        props: {
            // media 1
            anhso1_url: String,
            anhso1_title: String,
            anhso1_img: String,
            // media 2
            anhso2_url: String,
            anhso2_title: String,
            anhso2_img: String,
            // media 3
            anhso3_url: String,
            anhso3_title: String,
            anhso3_img: String
        }
    }
</script>