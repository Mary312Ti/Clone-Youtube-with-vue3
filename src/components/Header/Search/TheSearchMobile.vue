<template>
    <div>
        <TheSearch />
        <BaseTooltipe text="Voice search">
            <button class="ml-4 hidden sm:flex focus:outline-none">
                <BaseIcon name="microphone" strokeColor="none" fillColor="currentColor"></BaseIcon>
            </button>
        </BaseTooltipe>
    </div>
</template>

<script setup>
import TheSearch from './TheSearch.vue';
import BaseTooltipe from '../../Base/BaseTooltipe.vue';
import BaseIcon from '../../Base/BaseIcon.vue';

</script>