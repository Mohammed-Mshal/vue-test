<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
// import { Icon } from '@iconify/vue'

    const accordionItems = [
  {
    value: 'item-1',
    title: 'item 1',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, minima et aliquam facilis ea delectus consectetur ipsa mollitia dolor recusandae reiciendis sint ipsam at molestias corrupti praesentium minus temporibus sunt!',
  },
  {
    value: 'item-2',
    title: 'item 2',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, minima et aliquam facilis ea delectus consectetur ipsa mollitia dolor recusandae reiciendis sint ipsam at molestias corrupti praesentium minus temporibus sunt!',
  },
  {
    value: 'item-3',
    title: 'item 3',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, minima et aliquam facilis ea delectus consectetur ipsa mollitia dolor recusandae reiciendis sint ipsam at molestias corrupti praesentium minus temporibus sunt!',
  },
]
</script>
<template>
    <div class="faq py-10 mt-20">
        <div class="container mx-auto p-4">
            <h2 class="lg:text-6xl md:text-5xl sm:text-4xl text-3xl mb-8">
                FAQ's
            </h2>
            <div class="list-faqs">
                 <AccordionRoot
                    class="AccordionRoot"
                    default-value="'item-1'"
                    type="single"
                    :collapsible="true"
                >
                <template
                    v-for="item in accordionItems"
                    :key="item.value"
                    >
                        <AccordionItem class="AccordionItem bg-[#FFFFFF2f] mb-4 rounded-xl hover:shadow-lg shadow-[#FFFFFF2f] transition-all duration-500" :value="item.value">
                            <AccordionHeader class="AccordionHeader">
                                <AccordionTrigger class="AccordionTrigger border-none shadow-none text-white lg:text-2xl md:text-xl text-lg cursor-pointer">
                                    <span>{{ item.title }}</span>
                                    <Icon
                                    icon="radix-icons:chevron-down"
                                    class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                    aria-label="Expand/Collapse"
                                    />
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent class="AccordionContent">
                                <div class="AccordionContentText text-white text-opacity-80">
                                    {{ item.content }}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </template>
                </AccordionRoot>
            </div>
        </div>
    </div>
</template>

<style>
    @import '@radix-ui/colors/black-alpha.css';
    @import '@radix-ui/colors/mauve.css';
    @import '@radix-ui/colors/grass.css';
    .AccordionRoot {
    border-radius: 6px;
    }

    .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
    }

    .AccordionItem:first-child {
    margin-top: 0;
    }

    .AccordionItem:focus-within {
    position: relative;
    z-index: 1;
    }

    .AccordionHeader {
    display: flex;
    }

    .AccordionTrigger {
    font-family: inherit;
    background-color: transparent;
    padding: 0 20px;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    }
    .AccordionContent {
    overflow: hidden;
    font-size: 15px;
    color: var(--mauve-11);
    }
    .AccordionContent[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    .AccordionContent[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }

    .AccordionContentText {
    padding: 15px 20px;
    }

    .AccordionChevron {
    color: var(--grass-10);
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    .AccordionTrigger[data-state='open'] > .AccordionChevron {
    transform: rotate(180deg);
    }

    @keyframes slideDown {
    from {
        height: 0;
    }
    to {
        height: var(--radix-accordion-content-height);
    }
    }

    @keyframes slideUp {
    from {
        height: var(--radix-accordion-content-height);
    }
    to {
        height: 0;
    }
    }
</style>