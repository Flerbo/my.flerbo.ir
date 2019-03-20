<template>
    <div class="container build">
        <div class="column full-height">
            <div class="preview-wrapper">
                preivewer
            </div>
            <div class="align-center" dir="ltr">
                controller
                <div class="row">
                    1
                </div>
                <div class="row">
                    {{ foo }}
                </div>
                <main-controller v-model="foo" />
            </div>
        </div>
    </div>
</template>
<script>
import MainController from '~/components/build/controllers/main';

export default {
    components: {
        MainController,
    },
    data: () => ({
        foo: '',
    }),
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
