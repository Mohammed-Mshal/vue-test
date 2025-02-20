<script setup>
    import { onMounted, reactive, ref } from 'vue';
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
            
        } catch (error) {
            console.log(error);
        }    finally{
            state.isLoading=false
        }
    })
</script>
<template>
    <div class="products">
        <div class="container mx-auto flex justify-center flex-wrap gap-4 gap-y-8 px-4">
            <Product v-for="product in state.products" :key="product.id" :image="product.image" :title="product.image" :price="product.price" :description="product.description"  :category="product.category"/>
        </div>
    </div>
</template>