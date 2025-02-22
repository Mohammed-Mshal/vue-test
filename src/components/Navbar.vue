<script setup>
    import logo from '@/assets/imgs/logo.png'
    import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
    let listLinks=[
        {
            innerText:'Home',
            href:'/'
        },
        // {
        //     innerText:'About',
        //     href:'/about'
        // },
        {
            innerText:'FAQ',
            href:'/faq'
        },
    ]
    let menuStatus=ref(false)
    let menu=computed(()=>{
        return menuStatus.value
    })
    let toggleMenu=()=>{
        menuStatus.value=!menuStatus.value
    }
</script>
<template>
    <nav class="fixed top-0 left-0 w-screen flex justify-center z-20 backdrop-blur-2xl">
       <div class="container flex items-center justify-between p-4 mx-auto">
            <div class="logo h-16 z-10">
                <img :src="logo" alt="logo" class="h-full">
            </div>
            <ul :class="`listLinks flex items-center gap-8 absolute top-0 left-0 h-dvh w-screen flex-col justify-center lg:flex-row lg:w-fit lg:h-fit lg:static lg:opacity-100  transition-all duration-500 bg-black lg:bg-transparent backdrop-blur-xl ${menu?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} lg:pointer-events-auto`">
                <li v-for="link in listLinks" :key="link.href">
                    <RouterLink :to="link.href" class="hover:text-[#00a15e] text-[#00dc82] transition-all duration-500 font-bold">
                        {{ link.innerText }}
                    </RouterLink>
                </li>
            </ul>
            <div class="flex gap-4 z-10 pe-4">
                <button class="w-20 py-1 px-2 border border-[#00dc82] rounded-lg cursor-pointer hover:text-white transition-all duration-500">
                    Login
                </button>
                <button class="w-20 py-1 px-2 border border-[#00dc82] rounded-lg cursor-pointer hover:text-white transition-all duration-500">
                    Register
                </button>
                <button class="cursor-pointer text-lg lg:hidden flex items-center hover:text-white duration-500" @:click="toggleMenu">
                    <i :class="`pi ${menu?'pi-times':'pi-bars'} pi-cog`"></i>
                </button>
            </div>
       </div>
    </nav>
</template>

<style>

</style>