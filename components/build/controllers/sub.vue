<template>
    <div class="submenu-wrapper half-gutter">
        <div v-show="loading"
             class="row carousel full-width full-height"
        >
            <div v-for="spinner in 9"
                 class="all-auto"
                 :key="spinner"
            >
                <div class="spinner"
                     :style="`animation-delay: ${spinner * 600}ms`"
                />
            </div>
        </div>
        <carousel v-show="!loading"
                  class="carousel full-width"
                  :pagination-enabled="false"
                  :navigation-enabled="true"
                  :navigation-next-label="'➜'"
                  :navigation-prev-label="'➜'"
                  :per-page="11"
        >
            <slide v-for="item in items"
                   class="item half-padding"
                   :key="item.id"
            >
                <div class="item-content row align-content-middle align-content-center full-height half-padding"
                     @click="clicked(item)"
                >
                    <img :src="item.image_url" :alt="item.title">
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide,
    },
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
        loading: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        clicked(item) {
            this.$emit('click', item);
        },
    },
};
</script>
<style lang="postcss" scoped>
    @import '../../../assets/styles/vars/all.css';
    .submenu-wrapper {
        height: 100px;
    }
    .carousel {
        background-color: $light-blue-grey;
        border-radius: $round-radius;
        position: relative;
        &:after,
        &:before {
            @util size(20px, 100%);
            @util position(absolute, 0 null 0 null);
            content: '';
            z-index: 2;
        }
        &:after {
            background-image: linear-gradient(90deg, $light-blue-grey 0%, transparent 100%);
            left: 0;
        }
        &:before {
            background-image: linear-gradient(-90deg, $light-blue-grey 0%, transparent 100%);
            right: 0;
        }
    }
    .item {
        height: 85px;
        &-content {
            border-radius: $round-radius;
            cursor: pointer;
            transition: all $smooth-transition;
            &:hover {
                background-color: color(black a(10%));
            }
            img {
                @util size(auto, 100%);
                display: block;
            }
        }
    }

    .spinner {
        @util size(40px);
        transform: scale(0);
        background-color: $sazito;
        border-radius: 100%;
        margin: 23px auto;
        animation: sk-scaleout 1.0s infinite ease-in-out;
    }

    @keyframes sk-scaleout {
        0% {
            transform: scale(0);
        } 100% {
            transform: scale(1.0);
            opacity: 0;
        }
    }
</style>
<style lang="postcss">
    @import '../../../assets/styles/vars/all.css';
    .VueCarousel-navigation {
        &-button {
            color: $dark-grey !important;
            transition: all $smooth-transition;
            font-size: 32px;
            line-height: 1;
            outline: none !important;
            user-select: none;
            &:hover {
                color: $sazito !important;
            }
        }
        &-prev {
            transform: translateY(-50%) translateX(-100%) scale(-1) !important;
        }
        &--disabled {
            cursor: auto;
            opacity: 0 !important;
        }
    }
</style>
