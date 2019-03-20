<template>
    <div class="container build">
        <div class="row full-height">
            <div class="full-width preview-wrapper">
                preivewer
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
            if (value === 'sticker') {
                this.loadStickers();
            }
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
    },
};
</script>
<style lang="postcss" scoped>
    @import '../assets/styles/vars/all.css';
    .build {
        @util position(fixed, null 0 0 0);
        min-height: 100vh;
        padding-top: 160px;
    }
</style>
