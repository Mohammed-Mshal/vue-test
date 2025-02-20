<script setup>
    const links={
        mainLinks:[
        {
            innerText:'Home',
            link:'#',
        },
        {
            innerText:'About',
            link:'#',
        },
        {
            innerText:'Contact Us',
            link:'#',
        },
        {
            innerText:'FAQ',
            link:'#',
        },
        ],
        aboutUsLinks:[
        {
            innerText:'My Cv',
            link:'#',
        },
        {
            innerText:'Eduction',
            link:'#',
        },
        {
            innerText:'Experience',
            link:'#',
        },
        ],
        contactMeInfo:[
        {       
                innerText:'+963943698818',
                link:'tel:+963943698818',
                icon:'pi-phone'
            },
            {   
                innerText:'mohammedmshal02@gmail.com',
                link:'mailto:mohammedmshal02@gmail.com',
                icon:'pi-envelope'
                
            },
            {   
                innerText:'Syria, Damascus',
                link:'Syria, Damascus',
                icon:'pi-map-marker'
            }
       ]
    }
</script>

<template>
    <footer class="bg-[#131313]">
        <div class="container flex items-start justify-between px-4 py-12 mx-auto flex-wrap gap-8">
            <ul class="listLinks uppercase flex flex-col gap-4">
                <li v-for="mainLink in links.mainLinks" :key="mainLink.innerText">
                    <a :href="mainLink.link" class="hover:text-white py-2 transition-all duration-300">
                        {{mainLink.innerText}}
                    </a>
                </li>
            </ul>
            <div class="about-us flex flex-col gap-4"> 
                <h3 class="uppercase">
                    About us
                </h3>
                <ul class="listLinks flex flex-col gap-4">
                    <li v-for="mainLink in links.aboutUsLinks" :key="mainLink.innerText">
                        <a :href="mainLink.link" class="hover:text-white py-2 transition-all duration-300">
                            {{mainLink.innerText}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="contact-us flex flex-col gap-4">
                <h3 class="uppercase">
                    Contact With Me
               </h3>
               <ul>
                <li v-for="contactInfo in links.contactMeInfo" :key="contactInfo.innerText">
                    <a :href="contactInfo.link" class="hover:text-white py-2 transition-all duration-300 flex items-center gap-2">
                        <i :class="`pi ${contactInfo.icon }`"></i>
                        <span>
                            {{ contactInfo.innerText }}
                        </span>
                    </a>
                </li>
               </ul>
            </div>
        </div>
        <div class="p-4 mx-auto text-center bg-black">
            Made By Muhammed With All 💓
        </div>
    </footer>
</template> 

<style lang="css" scoped>

</style>