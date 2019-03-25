<template>
    <div class="reset row align-content-middle"
         @click="reset"
    >
        <svg-icon name="undo" />
        <span class="gap">ریست</span>
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
        color: $grey;
        cursor: pointer;
        user-select: none;
        transition: color $smooth-transition;
        svg {
            @util size(20px);
            fill: $grey;
            transition: fill $smooth-transition;
        }
        &:hover {
            color: $sazito;
            svg {
                fill: $sazito;
            }
        }
    }
</style>
