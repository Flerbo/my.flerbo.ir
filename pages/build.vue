<template>
    <div class="container build">
        <div class="column full-height">
            <div class="full-width all-auto">
                <div class="row full-height align-content-middle align-center">
                    <div class="all-auto">
                        <div class="laptop-wrapper">
                            <img class="laptop" src="~assets/laptop.png" width="500px" alt="">
                            <div class="sticker-wrapper">
                                <canvas id="canvas"></canvas>
                            </div>
                            <!-- <h3 dir="ltr" lang="en">Lenovo Thinkpad L570 - 15.6"</h3> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="full-width align-center align-end" dir="ltr">
                <sub-controller v-if="mainItem === 'laptop'"
                                v-model="laptops.selected"
                                :items="laptops.available"
                                :loading="loading.stickers"/>
                <sub-controller v-if="mainItem === 'sticker'"
                                v-model="stickers.selected"
                                :items="stickers.available"
                                :loading="loading.stickers"/>
                <main-controller v-model="mainItem"/>
            </div>
        </div>
    </div>
</template>
<script>
import MainController from '~/components/build/controllers/main';
import SubController from '~/components/build/controllers/sub';
import {
    STICKERS,
} from '~endpoints';

export default {
    components: {
        MainController,
        SubController,
    },
    data: () => ({
        endpoints: {
            STICKERS,
        },
        loading: {
            laptops: false,
            stickers: false,
        },
        mainItem: 'laptop',
        stickers: {
            available: [],
            selected: [],
        },
        laptops: {
            available: [],
            selected: '',
        },
    }),
    watch: {
        mainItem(value) {
            if (value === 'sticker' && this.stickers.available.length === 0) {
                this.loadStickers();
            } else if (value === 'laptop' && this.laptops.available.length === 0) {
                this.loadLaptops();
            };
        },
    },
    methods: {
        loadStickers() {
            this.loading.stickers = true;
            this.stickers.available = [];
            this.$axios.$get(this.endpoints.STICKERS).then(res => {
                this.loading.stickers = false;
                this.stickers.available = res;
            });
        },
        loadLaptops() {
            console.log('loading laptops...');
        },
    },
};
</script>
<style lang="postcss" scoped>
    @import '../assets/styles/vars/all.css';
    .build {
        height: 100vh;
        margin-top: -160px;
        padding-top: 160px;
        padding-bottom: 10px;
    }

    .laptop-wrapper {
        display: inline-block;
        position: relative;
        .laptop {
            height: auto;
            display: block;
        }
        * {
            user-select: none;
        }
        .sticker-wrapper{
            @util position(absolute, 0 0 0 0);
        }
    }
</style>
