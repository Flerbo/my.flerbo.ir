<template>
    <div class="row double-gutter align-center">
        <div class="all-12">
            <h2>چطوری کار میکنه</h2>
            <p>حتما شده دلتون بخواد از فلربو استیکر لپتاپ بخرید اما نمیدونستید که به لپتاپتون میاد یا نه.<br>حالا کافیه این کار رو بکنید:</p>
        </div>
        <div class="all-12">
            <div class="row">
                <div class="desktop-4 double-gap">
                    <small>قدم ۱</small>
                    <h3 class="no-margin gutter">استیکرهایی که میخوایین رو انتخاب کنین</h3>
                    <div class="gap">
                        <img src="~/assets/images/flerbo-stickers.png" class="responsive" alt="پرطرفدارترین استیکرهایی که داریم">
                    </div>
                </div>
                <div class="desktop-4 double-gap">
                    <small>قدم ۲</small>
                    <h3 class="no-margin gutter">استیکرها رو روی لپتاپتون هزار بار بچینین</h3>
                    <div class="gap">
                        <img src="~/assets/images/flerbo-laptop.png" class="responsive" alt="پیش نمایش استیکر روی لپتاپ">
                    </div>
                </div>
                <div class="desktop-4 double-gap">
                    <small>قدم ۳</small>
                    <h3 class="no-margin gutter">اگه از استیکرها خوشتون اومد، بخریدشون</h3>
                    <div class="gap">
                        <img src="~/assets/images/flerbo-post.png" class="responsive" alt="ارسال سفارش از طریق پست">
                    </div>
                </div>
            </div>
        </div>
        <div class="all-12">
            <p class="no-margin">برای خودتون امتحان کنین.</p>
            <div class="double-gutter">
                <router-link :to="{ name: 'preview' }" class="button">
                    شروع کن
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
    @import '../../assets/styles/vars/all.css';
    p,
    small {
        color: $dark-grey;
    }
    h2 {
        display: inline-block;
        font-weight: 700;
        font-size: 22px;
        line-height: 2.5;
        position: relative;
        &:after,
        &:before {
            @util size(80px, 1px);
            background-color: $sazito;
            content: '';
            display: block;
            margin: auto;
        }
    }
</style>
