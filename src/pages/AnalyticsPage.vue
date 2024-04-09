<template>
   <section class="analitycs-wrapper">
        <div class="analitycs-wrapper__header">
            <img src="../assets/images/logo.svg" alt="logo">
            <button class="analitycs-wrapper__header-button action-button" @click.prevent="logOut">LogOut</button>
        </div>
   </section>
</template>
<script>
export default {
    name: 'AnalyticsPage',
    methods: {
        logOut() {
            localStorage.removeItem('leadhit-site-id')
            this.$router.push('/')
        }
    },
    mounted() {
        if(!localStorage.getItem('leadhit-site-id')) {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
.analitycs-wrapper{
    width: 100%;
    height: 100%;
    &__header{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 30px;
        img{
            height: 36px;
        }
        
    }
}
</style>