<template>
    <section class="authpage-wrapper">
        <!-- <h1 class="authpage-wrapper__title">LeadHit</h1> -->
        <img src="../assets/images/logo.svg" alt="logo">
        <form class="authpage-wrapper__form">
            <input type="text" :class="{ invalid: !inputValid }" class="authpage-wrapper__form-input"
                @input="isValid(inputId)" placeholder="id сайта - 24 знака" v-model="inputId" :maxlength="24">
            <span v-if="!inputValid">еще {{ 24 - inputId.length }} {{ declOfNum(24 - inputId.length, ['символ',
                'символа', 'символов']) }} </span>
            <button :disabled="!inputValid" class="authpage-wrapper__form-button action-button" type="submit"
                @click.prevent="onLogin">
                Войти
            </button>
        </form>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AuthPage',
    data() {
        return {
            inputId: '',
            inputValid: false
        }
    },
    computed: {
        ...mapGetters([
            'getIsAuth'
        ])
    },
    methods: {
        ...mapActions({
            getId: 'getId'
        }),
        isValid(text) {
            text.length < 24 ? this.inputValid = false : this.inputValid = true
            console.log(this.inputValid)
        },
        onLogin() {
            this.$store.commit('setInputId', this.inputId)
            this.inputValid ? console.log('login') : alert('login error')
            this.getId().then(() => {
                setTimeout(() => {
                    if (this.getIsAuth) {
                        this.$router.push('/analytics')
                    }
                }, 300)
            })
        },
        declOfNum(n, text_forms) {
            n = Math.abs(n) % 100;
            var n1 = n % 10;
            if (n > 10 && n < 20) { return text_forms[2]; }
            if (n1 > 1 && n1 < 5) { return text_forms[1]; }
            if (n1 == 1) { return text_forms[0]; }
            return text_forms[2];
        }
    }
}
</script>

<style lang="scss">
.authpage-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 16px;
    padding: 0px 16px;

    &__title {
        font-size: 36px;
    }

    &__form {
        display: flex;
        gap: 8px;
        width: 100%;
        max-width: 400px;
        position: relative;
        margin-top: 32px;

        &-input {
            height: 42px;
            max-width: 300px;
            width: 100%;
            border-radius: 8px;
            padding: 0px 15px;
            border: none;
            background: #e3e3e3;
            transition: all .3s ease-in-out;

            &:focus {
                outline: 1px solid #46966a;
                box-shadow: 5px 3px 2px 0px #46966a;

                &::placeholder {
                    transition: all .5s ease-in-out;
                    opacity: 0;
                }
            }

            &.invalid:focus {
                outline: 1px solid #96466b;
                box-shadow: 5px 3px 2px 0px #96466b;

                &::placeholder {
                    transition: all .5s ease-in-out;
                    opacity: 0;
                }
            }
        }

        &-button {
           

            &:disabled {
                opacity: .7;
                pointer-events: none;
            }
        }

        span {
            position: absolute;
            bottom: -24px;
        }
    }
}
</style>