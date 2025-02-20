<script setup>
    import {Swiper,SwiperSlide} from 'swiper/vue';
    import { EffectFade,Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';
    import { onMounted, reactive, ref } from 'vue';
    const state=reactive({
        products:[],
        isLoading:true
    })
    onMounted(async()=>{
        try {
            const res=await fetch('https://fakestoreapi.com/products',{
            method:'GET'
            })
            state.products=await res.json()
            
        } catch (error) {
            console.log(error);
        }    finally{
            state.isLoading=false
        }
    })
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
                <swiper-slide v-for="(slide,index) in state.products" :key="index" class="max-h-[400px] w-full overflow-hidden rounded-2xl bg-white">
                    <img :src="slide.image" :alt="slide.image" class="w-auto h-full object-contain mx-auto">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style lang="css">
    .popular-product .swiper-pagination-bullet{
        background: #EFEFEF !important;
        opacity: .3 !important;
        width: 16px;
        height: 16px;
        
    }
    .popular-product .swiper-pagination-bullet-active{
        background: #EFEFEF!important;
        opacity: 1 !important;
        
    }
</style>