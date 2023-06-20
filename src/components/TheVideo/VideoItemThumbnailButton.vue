<template>
    <span :class="computedClasses">
        <BaseIcon :name="name" fill-color="currentColor" stroke-color="none" class="w-5 h-5" @mouseover="hover = true" @mouseout="hover = false"/> <!--historyIcon-->
        <span v-show="hover" 
            :class="badgeClasses">
            <span class="my-1.5 mx-3">
                <!--Watch later--> {{ label }}
            </span>
        </span>
    </span>
</template>

<script setup>
import BaseIcon from '../Base/BaseIcon.vue';
import { ref, computed } from 'vue';

const props = defineProps({
    name: {type: String},
    label: {type: String}
})

const hover = ref(false);

const computedClasses = computed(() => {
    return [
        hover.value ? 'rounded-r-md' : 'rounded-md',
        'opacity-0',
        'group-hover:opacity-100',
        'bg-opacity-60',
        'absolute',
        'top-0',
        'right-0',
        'bg-black',
        'text-white',
        'm-1',
        'p-1',
    ];
});

const badgeClasses = computed(() => {
    return [
        hover.value ? 'w-28' : 'w-0',
        'absolute',
        'transition-width',
        'bg-black',
        'bg-opacity-60',
        'whitespase-nowrap',
        'top-0',
        'right-full',
        'overflow-hidden',
        'text-xs',
        'delay-100',
        'font-semibold',
        'rounded-l-md',
        // 'w-28',
        'px-1.5',
        'py-1.5'

    ]
})



</script>