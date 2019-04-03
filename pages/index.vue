<template>
    <section class="container">
        <intro />
        <how />
    </section>
</template>
<script>
import Intro from '~/components/index/intro';
import How from '~/components/index/how';

export default {
    components: {
        Intro,
        How,
    },
};
</script>
<style lang="postcss" scoped>
    @import '../assets/styles/vars/all.css';
</style>
