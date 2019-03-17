<template>
    <section class="container">
        <div>
            <logo />
            <h1 class="title">
                my.flerbo
            </h1>
            <h2 class="subtitle">
                make your laptop look good
            </h2>
            <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    class="button--green"
                >Documentation</a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                >GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    components: {
        Logo,
    },
};
</script>
