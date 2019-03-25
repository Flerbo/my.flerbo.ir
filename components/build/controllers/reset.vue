<template>
    <div class="reset row align-content-middle half-gutter gap"
         @click="reset"
    >
        <span>از اول</span>
        <svg-icon name="undo" />
    </div>
</template>
<script>
export default {
    methods: {
        reset() {
            this.$emit('click');
        },
    },
};
</script>
<style lang="postcss" scoped>
    @import '../../../assets/styles/vars/all.css';
    .reset {
        @util position(absolute, 0 null null 0);
        background-color: $white;
        border-radius: $round-radius;
        color: $grey;
        cursor: pointer;
        user-select: none;
        transition: color $smooth-transition;
        svg {
            @util size(20px);
            fill: $grey;
            transition: fill $smooth-transition;
            margin-right: 10px;
        }
        &:hover {
            color: $sazito;
            svg {
                fill: $sazito;
            }
        }
    }
</style>
