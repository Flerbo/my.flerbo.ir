<template>
    <div class="reset row align-content-middle half-gutter gap">
        <svg-icon name="next" />
        <a href="https://flerbo.ir/?utm_source=myflerbo&utm_campaign=v1&utm_content=order" class="no-link" target="_blank">
            ثبت سفارش
        </a>
    </div>
</template>
<style lang="postcss" scoped>
    @import '../../../assets/styles/vars/all.css';
    .reset {
        @util position(absolute, 0 0 null null);
        background-color: $white;
        border-radius: $round-radius;
        color: $green;
        cursor: pointer;
        user-select: none;
        transition: color $smooth-transition;
        svg {
            @util size(20px);
            fill: $green;
            transition: fill $smooth-transition;
            margin-left: 10px;
        }
        &:hover {
            color: $sazito;
            svg {
                fill: $sazito;
            }
        }
    }
</style>
