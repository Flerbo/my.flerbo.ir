<template>
    <div class="container build">
        <div class="relative full-height align-center">
            <div class="laptop-wrapper gap full-height">
                <v-lazy-image class="laptop"
                              ref="laptop"
                              alt=""
                              :src="laptops.selected.image_url"
                              @load="updateInchToPixelConstant"
                />
                <div class="sticker-wrapper gap">
                    <canvas id="canvas" />
                </div>
                <!-- <h3 dir="ltr" lang="en">Lenovo Thinkpad L570 - 15.6"</h3> -->
            </div>
            <reset @click="reset" />
            <div class="full-width controller-wrapper" dir="ltr">
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
import Reset from '~/components/build/controllers/reset';
import {
    STICKERS,
} from '~endpoints';
import { fabric } from 'fabric';

export default {
    components: {
        MainController,
        SubController,
        Reset,
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
            selected: {
                width: 14.8,
                height: 10,
                image_url: 'http://my.flerbo.ikacc.ir/laptops/lenovo-thinkpad_l570.png',
            },
        },
        inchToPixelConstant: 0,
        canvas: null,
    }),
    watch: {
        mainItem(value) {
            if (value === 'sticker' && this.stickers.available.length === 0) {
                this.loadStickers('programming');
            } else if (value === 'laptop' && this.laptops.available.length === 0) {
                this.loadLaptops();
            };
        },
        inchToPixelConstant(value, oldValue) {
            if (this.canvas) {
                this.canvas.setHeight(this.laptops.selected.height * value);
                this.canvas.setWidth(this.laptops.selected.width * value);
                this.canvas.getObjects().forEach(img => {
                    this.canvas.remove(img);
                });
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateInchToPixelConstant);
        this.updateInchToPixelConstant();
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
        updateInchToPixelConstant() {
            if (this.$refs.laptop) {
                this.inchToPixelConstant = this.$refs.laptop.$el.width / this.laptops.selected.width;
            }
        },
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
        reset() {
            this.canvas.clear();
        },
        loadStickers(category) {
            this.loading.stickers = true;
            this.stickers.available = [];
            this.$axios.$get(this.endpoints.STICKERS(category)).then(res => {
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
        padding-bottom: 20px;
    }
    .controller-wrapper {
        @util position(absolute, null 0 0 0);
    }
    .laptop-wrapper {
        display: inline-block;
        position: relative;
        padding-top: 20px;
        padding-bottom: 190px;
        .laptop {
            display: inline-block;
            @media (min-width: $sm) {
                @util size(auto, 100%);
            }
            @media (max-width: $sm) {
                @util size(100%, auto);
            }
        }
        * {
            user-select: none;
        }
    }
    .sticker-wrapper{
        @util position(absolute, 0 0 0 0);
        padding-top: 20px;
        padding-bottom: 190px;
    }
</style>
