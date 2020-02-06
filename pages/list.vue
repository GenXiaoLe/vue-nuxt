<template>
    <div>
        this is list page

        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'nuxt-list',
            }
        },
    }
</script>