<template>
    <div>
    </div>
</template>

<script>
import { get } from '@/libs/axios-cfg'
export default {
    created () {
        this.getToken()
    },
    methods: {
        async getToken () {
            let temp = window.location.search
            let res = await get('/openLogin' + temp, {})
            if (res.status === 200000) {
                sessionStorage.setItem('X-Auth-Token', res.data.token);
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('userId', res.data.user.id);
                sessionStorage.setItem('appId', res.data.user.appId);
                sessionStorage.setItem('schoolId', res.data.user.schoolId);
                sessionStorage.setItem('logo', res.data.user.logo);
                sessionStorage.setItem('background', res.data.user.background);
                sessionStorage.setItem('userPhoto', res.data.user.userPhoto);
                sessionStorage.setItem('name', res.data.user.name);
                sessionStorage.setItem('phone', res.data.user.phone);
                sessionStorage.setItem('email', res.data.user.email);
              localStorage.setItem("userInfo", JSON.stringify(res.data.user));
                this.$store.commit('setToken', res.data.token);
                const route = {
                    name: 'home'
                }
                this.$router.push(route)
            }
        }
    }
}
</script>

<style scoped>

</style>
