<template>
    <section class="landing-container" id="lienhe">
        <div class="container">
            <div class="row landing-block text-center">
                <div class="col-sm-12">
                    <div class="arrange-flatuiribbon">
                        <h2 class="landing-block flatuiribbon flatuiribbon-content">Liên Hệ</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="row text-center">
                <div class="col-sm-12">
                    <iframe class="mmo-bando" onload='this.style.visibility="visible"' src="{{ contact_url }}"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Contact',
        props: {
            contact_url: String
        }
    }
</script>