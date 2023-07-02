<template>
    <div class="flex justify-center items-center h-screen">
        <form action="" class="border-solid border-[1px] flex flex-col max-w-md rounded-lg py-8 px-8">
            <fieldset class="flex flex-col text-center">
                <legend class="font-semibold text-xl">Sign up <span class="block text-sm font-normal py-2"> to continue to
                        clone youTube</span></legend>
                <input type="text" placeholder="Email or phone"
                    class="placeholder:text-gray-500 px-4 py-2 my-4 border-solid border-[1px] rounded-lg">
                <input :type="showPassword ? 'text' : 'password'" placeholder="Password"
                    class="placeholder:text-gray-500 px-4 py-2 my-4 border-solid border-[1px] rounded-lg">
                <label for="showCheckbox" class="text-left pb-3 flex items-center gap-2">
                    <input type="checkbox" id="showCheckbox" v-model="showPassword" class="transform scale-125">
                    Show password</label>
                <div class="flex justify-between items-center">
                    <RouterLink to="/signin" class="text-blue-500">Sign in</RouterLink>
                    <button type="submit" class="bg-blue-500 rounded-lg text-white px-[8px] py-1 font-semibold">Create</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPassword = ref(false)
</script>