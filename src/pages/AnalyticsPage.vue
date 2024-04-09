<template>
   <section class="analitycs-wrapper">
        <div class="analitycs-wrapper__header">
            <img src="../assets/images/logo.svg" alt="logo">
            <button class="analitycs-wrapper__header-button action-button" @click.prevent="logOut">LogOut</button>
        </div>
        <h1 class="analitycs-wrapper__title">
            Аналитика
        </h1>
        <ChartComponent />
   </section>
</template>
<script>
import ChartComponent from '@/components/ChartComponent.vue'
export default {
    name: 'AnalyticsPage',
    components: {
        ChartComponent
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
    &__header{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 30px;
        img{
            height: 36px;
        }
        
    }
    &__title{
        margin-top: 32px;
        font-size: 48px;
    }
}
</style>