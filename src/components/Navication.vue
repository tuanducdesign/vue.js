<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" role="navigation" itemtype="https://schema.org/SiteNavigationElement" itemscope="itemscope">
        <div class="container">
            <link rel="preload" href="{{ logo_img }}" as="image" />
            <a href="{{ logo_url }}" title="{{ logo_title }}" id="logo">
                <img class="site-logo" src="{{ logo_img }}" alt="{{ logo_title }}" width="{{ logo_width }}" loading="lazy" />
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="{{ nav_home_url }}" class="nav-link" title="Trang Chủ">Trang Chủ</a>
                    </li>
                    <li class="nav-item"><a href="#vetoi" class="nav-link" title="Về Tôi">Về Tôi</a>
                    </li>
                    <li class="nav-item"><a href="#kinhnghiem" class="nav-link" title="Kinh Nghiệm">Kinh Nghiệm</a>
                    </li>
                    <li class="nav-item"><a href="#quangthoigian" class="nav-link" title="Quãng Thời Gian">Quãng Thời Gian</a>
                    </li>
                    <li class="nav-item"><a href="#baihat" class="nav-link" title="Bài Hát">Bài Hát</a>
                    </li>
                    <li class="nav-item"><a href="#lienketwb" class="nav-link" title="Liên Kết Website">Liên Kết Website</a>
                    </li>
                    <li class="nav-item"><a href="#lienhe" class="nav-link" title="Liên Hệ">Liên Hệ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navication',
        props: {
            logo_img: String,
            logo_title: String,
            logo_width: String,
            nav_home_url: String
        }
    }
</script>