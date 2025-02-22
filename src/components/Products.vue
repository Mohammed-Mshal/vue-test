<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { ContentLoader } from 'vue-content-loader'
    import Product from './Product.vue';
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
            state.isLoading=false
            
        } catch (error) {
            console.log(error);
            state.isLoading=false
        }
    })
</script>
<template>
    <div class="products">
        <div class="container mx-auto flex justify-center flex-wrap gap-4 gap-y-8 px-4" :v-show="!state.isLoading">
            <Product  v-for="product in state.products" :key="product.id" :image="product.image" :title="product.image" :price="product.price" :description="product.description"  :category="product.category"/>
        </div>
        <div class="container mx-auto px-4 line-clamp-1 flex justify-center flex-wrap gap-4" v-show="state.isLoading">
            <ContentLoader  primary-opacity=".2" class=" w-full flex-1 basis-xs">

            </ContentLoader>    
       </div>
    </div>
</template>