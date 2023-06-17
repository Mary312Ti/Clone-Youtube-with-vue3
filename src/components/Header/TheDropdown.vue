<template>
    <div 
        class="z-50 visible absolute top-9 -right-full sm:right-0 bg-white w-56 rounded-md">
        <section class="py-2 border-b">
            <ul>
                <dropdownList name="dataIcon" label="Your data in youtube">
                </dropdownList>
            </ul>
        </section>
        <section class="py-2 border-b">
            <ul>
                <dropdownList name="moonIcon" label="Apperance" :show-arrow="true"></dropdownList>
                <dropdownList name="languageIcon" label="Language" :show-arrow="true"></dropdownList>
                <dropdownList name="locationIcon" label="Location" :show-arrow="true"></dropdownList>
                <dropdownList name="keyboardIcon" label="Keyboard shortcuts" fill-color="currentColor" stroke-color="none">
                </dropdownList>
            </ul>
        </section>
        <section class="border-b">
            <ul>
                <dropdownList name="settingsIcon" label="Settings" fill-color="currentColor" stroke-color="none">
                </dropdownList>
            </ul>
            <section class="py-2 border border-t">
                <ul>
                    <dropdownList name="helpIcon" label="Help" fill-color="currentColor" stroke-color="none"></dropdownList>
                    <dropdownList name="feedbackIcon" label="Send feedback" fill-color="currentColor" stroke-color="none">
                    </dropdownList>
                </ul>
            </section>
        </section>
    </div>
</template>

<script setup>
import dropdownList from './dropdownList.vue';
import { reactive } from 'vue';



</script>