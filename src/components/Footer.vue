<template>
<footer class="mmo-footer" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
        <div class="text-center">©<span itemprop="copyrightYear">{{ copyright }}</span> - <span itemprop="copyrightHolder" itemscope="itemscope" itemtype="https://schema.org/Organization"><a href="/" itemprop="url" title="Trần Tuấn Đức"><span itemprop="name">Trần Tuấn Đức</span>
                </a>- All Rights Reserved.<br />
                Giao diện được thiết kế bởi : <a href="{{ design_url }}" target="_blank" rel="nofollow noreferrer" title="{{ design_name }}"><span itemprop="name">{{ design_name }}</span></a>
            </span>
            <div class="socials" itemscope="itemscope" itemtype="https://schema.org/Organization">
                <link itemprop="url" href="/" />
                <a rel="nofollow noreferrer" target="_blank" href="{{ socials_twitter_url }}" data-toggle="tooltip" data-placement="top" title="{{ socials_twitter_name }}" itemprop="sameAs"> <span class="fab fa-twitter"></span>
                </a>
                <a rel="nofollow noreferrer" target="_blank" href="{{ socials_facebook_url }}" data-toggle="tooltip" data-placement="top" title="{{ socials_facebook_name }}" itemprop="sameAs"> <span class="fab fa-facebook-f"></span>
                </a>
                <a rel="nofollow noreferrer" target="_blank" href="{{ socials_instagram_url }}" data-toggle="tooltip" data-placement="top" title="{{ socials_instagram_name }}" itemprop="sameAs"><span class="fab fa-instagram"></span>
                </a>
            </div>
        </div>
    </footer>
</template>
<script type="application/javascript" src="https://cdn.tuanducdesign.com/assets/js/main.min.js" async></script>
<script>
    export default {
        name: 'Footer',
        props: {
           copyright: String,
           design_url: String,
           design_name: String,
           socials_twitter_url: String,
           socials_twitter_name: String,
           socials_facebook_url: String,
           socials_facebook_name: String,
           socials_instagram_url: String,
           socials_instagram_name: String
        }
    }
</script>