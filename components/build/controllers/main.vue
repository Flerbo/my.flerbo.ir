<template>
    <div class="row align-content-center">
        <div v-for="item in items"
             class="half-padding"
             :key="item.name"
        >
            <label :class="['type_select-item box padding pointer', {active: picked === item.name}, {disabled: item.disabled}]">
                <svg-icon class="icon"
                          :name="item.name"
                />
                <input v-model="picked"
                       type="radio"
                       :disabled="item.disabled"
                       :value="item.name"
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
            {
                name: 'laptop',
            },
            {
                name: 'sticker',
            },
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
            &:not(.active):not(.disabled) {
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
            &.disabled {
                cursor: no-drop;
                .icon {
                    fill: $light-grey;
                }
            }
        }
    }
</style>
