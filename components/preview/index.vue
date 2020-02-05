<template>
    <div class="container preview" :class="{foo: !isEmptyLayout}">
        <div class="relative full-height align-center">
            <div class="laptop-wrapper gap full-height">
                <v-lazy-image v-if="laptops.selected"
                              class="laptop"
                              ref="laptop"
                              :alt="laptops.selected.title"
                              :src="laptops.selected.image_url"
                              @load="updateInchToPixelConstant"
                />
                <template v-else>
                    <div class="placeholder-wrapper row full-height align-content-middle align-center">
                        <div class="all-auto">
                            <svg-icon name="laptop" />
                            <span>برای چیدن استیکر روی لپتاپ، ابتدا یک لپتاپ انتخاب کنید.</span>
                        </div>
                    </div>
                </template>
                <div v-show="laptops.selected"
                     class="sticker-wrapper gap"
                >
                    <canvas id="canvas" />
                </div>
                <!-- <h3 dir="ltr" lang="en">Lenovo Thinkpad L570 - 15.6"</h3> -->
            </div>
            <reset @click="reset" />
            <order v-if="!isEmptyLayout" />
            <div class="full-width controller-wrapper" dir="ltr">
                <sub-controller v-if="mainItem === 'laptop'"
                                @click="addLaptop"
                                :items="laptops.available"
                                :loading="loading.laptops"
                />
                <sub-controller v-if="mainItem === 'category'"
                                @click="openCategory"
                                :items="categries.available"
                                :loading="loading.categries"
                />
                <sub-controller v-if="mainItem === 'sticker'"
                                @click="addSticker"
                                :items="stickers.available"
                                :loading="loading.stickers"
                                :can-return="true"
                />
                <main-controller v-model="mainItem" />
            </div>
        </div>
    </div>
</template>
<script>
import MainController from '~/components/preview/controllers/main';
import SubController from '~/components/preview/controllers/sub';
import Reset from '~/components/preview/controllers/reset';
import Order from '~/components/preview/controllers/order';
import {
    CATEGORIES,
    LAPTOPS,
} from '~endpoints';
import { fabric } from 'fabric';

export default {
    layout: 'no-footer',
    components: {
        MainController,
        SubController,
        Reset,
        Order,
    },
    data: () => ({
        endpoints: {
            CATEGORIES,
            LAPTOPS,
        },
        loading: {
            laptops: false,
            stickers: false,
            categries: false,
        },
        mainItem: '',
        stickers: {
            available: [],
            selected: [],
        },
        laptops: {
            available: [],
            selected: null,
        },
        categries: {
            available: [],
            selected: null,
        },
        inchToPixelConstant: 0,
        canvas: null,
        isEmptyLayout: false,
    }),
    watch: {
        mainItem(value) {
            if (value === 'category' && this.stickers.available.length === 0) {
                this.loadCategories();
            } else if (value === 'laptop' && this.laptops.available.length === 0) {
                this.loadLaptops();
            };
        },
        inchToPixelConstant(value, oldValue) {
            this.canvas.setHeight(this.laptops.selected.height * value);
            this.canvas.setWidth(this.laptops.selected.width * value);
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateInchToPixelConstant);
        window.addEventListener('keydown', event => {
            if (event.key === 'Delete') {
                this.removeStickers();
            }
        });
    },
    methods: {
        initCanvas() {
            if (!this.canvas) {
                this.canvas = new fabric.Canvas('canvas');
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
            }
        },
        updateInchToPixelConstant() {
            if (this.$refs.laptop && this.laptops.selected) {
                this.inchToPixelConstant = this.$refs.laptop.$el.width / this.laptops.selected.width;
            }
        },
        addSticker(sticker) {
            if (sticker) {
                this.stickers.selected.push(sticker);
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
            } else {
                this.mainItem = 'category';
            }
        },
        removeStickers() {
            this.canvas.remove(this.canvas.getActiveObject());
            this.canvas.getActiveObjects().forEach(sticker => {
                this.canvas.remove(sticker);
            });
            this.canvas.discardActiveGroup();
        },
        addLaptop(laptop) {
            this.laptops.selected = laptop;
            this.initCanvas();
        },
        reset() {
            this.canvas.clear();
            this.stickers.selected = [];
        },
        loadStickers(category) {
            this.loading.stickers = true;
            this.stickers.available = [];
            this.$axios.$get(category).then(res => {
                this.loading.stickers = false;
                this.stickers.available = res;
            });
        },
        loadLaptops() {
            this.loading.laptops = true;
            this.laptops.available = [];
            this.$axios.$get(this.endpoints.LAPTOPS).then(res => {
                this.loading.laptops = false;
                this.laptops.available = res;
            });
        },
        loadCategories(category) {
            this.loading.categries = true;
            this.categries.available = [];
            this.$axios.$get(this.endpoints.CATEGORIES).then(res => {
                this.loading.categries = false;
                this.categries.available = res;
            });
        },
        openCategory(category) {
            this.mainItem = 'sticker';
            this.categries.selected = category;
            this.loadStickers(category.id);
        },
    },
};
</script>
<style lang="postcss" scoped>
    @import '../../assets/styles/vars/all.css';
    .preview {
        height: 100vh;
        &.foo {
            margin-top: -160px;
            padding-top: 160px;
            padding-bottom: 20px;
        }
    }
    .controller-wrapper {
        @util position(absolute, null 0 0 0);
    }
    .placeholder-wrapper {
        color: $light-1-grey;
        svg {
            display: inline-block;
            fill: $light-1-grey;
            @media (min-width: $sm) {
                @util size(auto, 100%);
            }
            @media (max-width: $sm) {
                @util size(100%, auto);
            }
        }
        span {
            display: block;
        }
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
<style>
    .canvas-container {
        margin: auto;
    }
</style>
