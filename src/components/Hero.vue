<script setup>
    const props=defineProps({
        heroTitle:{
            required:false
        },
        heroText:{
            required:false
        },
        linkButton:{
            required:false
        }
    })
    import HeroImage from '@/assets/imgs/Hero.png'
</script>
<template>
    <div class="hero lg:mt-40 mt-20 ">
        <div class="container flex items-center justify-between p-4 mx-auto flex-col-reverse lg:flex-row">
        <div class="content  flex flex-col gap-4 lg:max-w-lg max-w-full">
            <h1 class="title text-6xl text-white font-bold">
                {{ heroTitle }}
            </h1>
            <p class="text-lg">
                {{ heroText }}
            </p>
            <a 
            class="text-xl rounded-md border border-[#FFFFFF8f] py-2 px-4 flex items-center justify-center cursor-pointer hover:text-black hover:bg-white transition-all duration-500 max-w-fit" :href="linkButton">
                Read More
            </a>
        </div>
        <div class="image-hero max-w-lg">
            <img :src="HeroImage" alt="Hero">
        </div>
        </div>
    </div>
</template>

<style scoped>
</style>