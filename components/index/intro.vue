<template>
    <div class="row double-gutter align-content-middle align-content-center">
        <div class="desktop-5 double-gap">
            <div class="row align-content-center">
                <div class="desktop-10">
                    <img src="~assets/images/intro.png" class="responsive" alt="استیکرهات رو روی لپتاپت بچین">
                </div>
            </div>
        </div>
        <div class="desktop-5 double-gap">
            <h1 class="no-margin">
                استیکرهای لپ‌تاپت رو بچین
            </h1>
            <p class="intro no-margin gutter">
                قبل از این که استیکرهات رو از <a href="https://flerbo.ir/?utm_source=myflerbo&utm_campaign=v1&utm_content=intro" class="link">فلربو</a> بخری، روی لپتاپت بچینشون و اگه خوشت اومد، با تخفیف سفارششون بده!
            </p>
            <div class="align-left">
                <router-link :to="{ name: 'preview' }" class="button">
                    شروع کن
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
    @import '../../assets/styles/vars/all.css';
    h1 {
        color: $black;
        font-size: 80px;
        font-family: Lalezar;
        line-height: 1.2;
    }
    .intro {
        font-size: 18px;
        color: $dark-grey;
    }
</style>
