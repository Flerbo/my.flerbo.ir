<template>
    <div class="container build">
        <div class="column full-height">
            <div class="full-width all-auto">
                <div class="row full-height align-content-middle align-center">
                    <div class="all-auto">
                        <div class="laptop-wrapper">
                            <img class="laptop"
                                 src="~assets/laptop.png"
                                 alt=""
                                 :width="this.laptops.selected.width * inchToPixelConstant">
                            <div class="sticker-wrapper">
                                <canvas id="canvas" />
                            </div>
                            <!-- <h3 dir="ltr" lang="en">Lenovo Thinkpad L570 - 15.6"</h3> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="full-width align-center align-end" dir="ltr">
                <sub-controller v-if="mainItem === 'laptop'"
                                :items="laptops.available"
                                :loading="loading.stickers"
                />
                <sub-controller v-if="mainItem === 'sticker'"
                                @click="addSticker"
                                :items="stickers.available"
                                :loading="loading.stickers"
                />
                <main-controller v-model="mainItem" />
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
import { fabric } from 'fabric';

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
        inchToPixelConstant: 33.8,
        laptops: {
            available: [],
            selected: {
                width: 14.8,
                height: 10,
            },
        },
        canvas: null,
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
    mounted() {
        this.canvas = new fabric.Canvas('canvas', {
            width: this.laptops.selected.width * this.inchToPixelConstant,
            height: this.laptops.selected.height * this.inchToPixelConstant,

        });
        fabric.Group.prototype._controlsVisibility = {
            tl: false,
            tr: false,
            br: false,
            bl: false,
            ml: false,
            mt: false,
            mr: false,
            mb: false,
            mtr: true,
        };
    },
    methods: {
        addSticker(sticker) {
            fabric.Image.fromURL(sticker.image_url, img => {
                // Sticker Preview Width = Sticker Actual Width * (Laptop Preview Width / Laptop Actual Width)
                if (sticker.width) {
                    img.scaleToWidth(sticker.width * this.inchToPixelConstant, true);
                } else {
                    img.scaleToHeight(sticker.height * this.inchToPixelConstant, true);
                }
                img.setControlsVisibility({
                    mt: false,
                    mb: false,
                    ml: false,
                    mr: false,
                    bl: false,
                    br: false,
                    tl: false,
                    tr: false,
                    mtr: true,
                });
                img.setShadow({
                    color: '#00000030',
                    blur: 1,
                    offsetX: 1,
                    offsetY: 1,
                });
                this.canvas.centerObject(img);
                this.canvas.add(img);
            });
        },
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
        min-height: 100vh;
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
