<script setup>
    import {Swiper,SwiperSlide} from 'swiper/vue';
    import { EffectFade,Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';
    
    const listSlide=[
        {
            image:'/src/assets/imgs/slide1.jpg',
            title:'title 1'
        },
        {
            image:'/src/assets/imgs/slide2.jpg',
            title:'title 2'
        }
    ]
</script>
<template>
    <div class="popular-product my-10">
        <div class="container mx-auto p-4 flex flex-col gap-8">
            <h3 class="text-white text-4xl font-extrabold">
                Popular Product
            </h3>
            <swiper
                    :modules="[EffectFade,Pagination]"
                     effect="fade"
                    :slides-per-view="1"
                    :space-between="50"
                    :pagination="{clickable:true}" 
                    class="max-w-full w-full"
                    autoplay="true"
                    center-insufficient-slides="true"
                    loop="true"

            >
                <swiper-slide v-for="(slide,index) in listSlide" :key="index" class="max-h-[400px] w-full overflow-hidden rounded-2xl ">
                    <img :src="slide.image" :alt="slide.image" class="w-full h-full object-cover">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style lang="css">
    .popular-product .swiper-pagination-bullet{
        background: white !important;
        opacity: .3 !important;
        width: 16px;
        height: 16px;
        
    }
    .popular-product .swiper-pagination-bullet-active{
        background: white !important;
        opacity: 1 !important;
        
    }
</style>