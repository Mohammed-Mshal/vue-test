<script setup>
    const props=defineProps({
        image:{
            default:'',
            type:String
        },
        title:{
            default:'',
            type:String
        },
        description:{
            default:'',
            type:String
        },
        price:{
            default:'',
            type:Number
        },
        category:{
            default:'',
            type:String
        }
    })
    
</script>
<template>
    <div class="product  w-full flex-1 flex flex-col gap-4 group cursor-pointer basis-xs">
        <div class="header-product w-full h-48 bg-white rounded-2xl overflow-hidden">
            <img :src="props.image" :alt="props.id" class="h-full w-full object-contain group-hover:scale-110 transition-all duration-500">
        </div>
        <div class="body-product flex-1 flex flex-col">
            <h3 class="title-product">
                <!-- {{ props.title }} -->
            </h3>
            <h5 class="date-product text-2xl mb-2 text-white capitalize">
                {{ props.category }}
            </h5>
            <div class="description-product line-clamp-3">
                {{ props.description }}
            </div>
            <div class="price-product mt-auto text-2xl text-green-600">
                ${{ props.price }}
            </div>
        </div>
    </div>
</template>