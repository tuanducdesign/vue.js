<template>
    <section class="landing-container" id="baihat">
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Bài Hát Mà Mình Thích</h2>
                    </div>
                    <p class="block-desc">Dưới đây là bài hát mình thích nhất nghe cùng mình nhé!</p>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row text-center">
                <div class="col-sm-12">
                    <!-- data-embed là tên id của video -->
                    <div class="youtube" data-embed="Pz3tm92Zpvs">
                        <div class="play-button"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Music',
        props: {}
    }
</script>