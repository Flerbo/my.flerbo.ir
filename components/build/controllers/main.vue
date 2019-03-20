<template>
    <div class="row align-content-center">
        <div v-for="item in items"
             class="half-padding"
             :key="item"
        >
            <label :class="['type_select-item box padding pointer', {active: picked === item}]">
                <svg-icon class="icon"
                          :name="item"
                />
                <input v-model="picked"
                       type="radio"
                       :value="item"
                >
            </label>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        picked: '',
        items: [
            'laptop',
            'sticker',
        ],
    }),
    watch: {
        picked(item) {
            this.$emit('input', item);
        },
    },
};
</script>
<style lang="postcss" scoped>
    @import '../../../assets/styles/vars/all.css';
    .type_select {
        &-item {
            display: block;
            transition: background $smooth-transition;
            input {
                display: none;
            }
            .icon {
                @util size(40px);
                display: block;
                transition: fill $smooth-transition;
            }
            &:not(.active) {
                .icon {
                    fill: $dark-grey;
                }
                &:hover {
                    .icon {
                        fill: $sazito;
                    }
                }
            }
            &.active {
                .icon {
                    fill: $white;
                }
            }
        }
    }
</style>
