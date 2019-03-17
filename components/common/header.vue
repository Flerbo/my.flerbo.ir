<template>
    <header class="full-width">
        <div class="wave">
            <svg width="100%" height="100%" viewBox="0 0 1440 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(0.000000, -39.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <path d="M1.25055521e-12,57 C284.679475,33 524.867531,33 720.564169,57 C916.260807,81 1156.11553,81 1440.12834,57 L1440.12834,82 L1.25055521e-12,82 L1.25055521e-12,57 Z" />
                    </g>
                </g>
            </svg>
        </div>
        <nav class="container box">
            <div class="row full-height align-content-middle">
                <div class="all-auto">
                    <a href="https://flerbo.ir/?utm_source=myflerbo&utm_campaign=mvp&utm_content=logo" class="link">
                        <img src="logo.png" alt="فلربو">
                    </a>
                </div>
                <div class="all-auto align-left">
                    <a href="https://flerbo.ir/?utm_source=myflerbo&utm_campaign=mvp&utm_content=desktop_back" class="link">بازگشت به فروشگاه</a>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="postcss" scoped>
    @import '../../assets/styles/vars/all.css';
    header {
        background: $sazito;
        margin: 0 auto 30px;
        position: relative;
        display: inline-block;
        .wave {
            @util position(absolute null 0 0 0);
            svg {
                display: block;
                overflow: hidde;
            }
        }
        nav {
            background-color: $white;
            position: relative;
            z-index: 10;
            margin: 30px auto 0;
            padding: 0 25px;
            height: 100px;
            img {
                @util size(144px, auto);
                display: block;
            }
        }
    }
</style>
