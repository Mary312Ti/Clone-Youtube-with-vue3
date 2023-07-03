<template>
    <div :class="mainClasses" class="px-4">
        <div class="flex flex-col xl:flex-row py-6">
            <img src="/lorem-img1.jpg" alt="" class="xl:max-w-sm max-w-sm max-h-60 " />
            <div class="xl:pl-6 max-w-md mt-3 xl:mt-0 flex flex-col justify-between items-start">
                <div>
                    <span class="text-semibold text-black text-sm">
                        Video Title
                    </span>
                    <div class="text-xs mt-1 xl:my-4">438,648 views &middot; 4 months ago</div>
                    <div class="text-sm text-gray-800 hidden xl:block">
                        Welcome to our entertaining YouTube channel dedicated to the most
                        adorable creatures on the internet - our beloved little feline
                        friends! Here at our channel, we celebrate all things cat-related
                        and bring you the most hilarious, heartwarming and awe-inspiring
                        videos of our whiskered companions. Whether you're a
                        self-confessed cat aficionado or simply love seeing cute and funny
                        animal moments, our channel has it all. From mischievous kittens
                        getting up to all sorts of antics, to brave cats taking on big
                        dogs and heartwarming moments of cats and their adorable kittens,
                        there's never a dull moment on our channel. So sit back, relax and
                        prepare to be entertained by the cutest and funniest cats on the
                        internet. Don't forget to hit that subscribe button and turn on
                        notifications so you never miss a single video!
                    </div>
                    <a href="" class="uppercase font-semibold text-xs hover:text-black text-gray-600 hidden xl:inline">Read
                        more</a>
                </div>
            </div>
        </div>
        <!-- section1-head -->
        <div class="border-t border-gray-300 pt-5">
            <div class="flex items-center">
                <a href="" class="font-semibold text-gray-800 mr-6 text-sm">Popular videos</a>
                <a href="" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="none" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                    <span class="ml-2 font-semibold text-xs hover:text-black text-gray-600">
                        Play all
                    </span>
                </a>
            </div>
            <!--section1-main-->
            <div class="pt-4 relative">
                <a href=""
                    class="bg-white rounded-full shadow-xl w-9 h-9 absolute top-24 lg:top-16 left-2 lg:-left-5 z-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                <a href=""
                    class="bg-white rounded-full shadow-xl w-9 h-9 absolute top-24 lg:top-16 right-2 lg:-right-5 z-10 flex justify-center items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg></a>
                <div class="flex gap-2">
                    <a href="#" class="mb-7 group">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <!-- section2-head -->
        <div class="border-t border-gray-300 pt-5">
            <div class="flex items-center">
                <a href="" class="font-semibold text-gray-800 mr-6 text-sm">Videos</a>
                <a href="" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="none" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>

                    <span class="ml-2 font-semibold text-xs hover:text-black text-gray-600">
                        Play all
                    </span>
                </a>
            </div>
            <!--section2-main-->
            <div class="pt-4 relative">
                <a href=""
                    class="bg-white rounded-full shadow-xl w-9 h-9 absolute top-24 lg:top-16 left-2 lg:-left-5 z-10 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                <a href=""
                    class="bg-white rounded-full shadow-xl w-9 h-9 absolute top-24 lg:top-16 right-2 lg:-right-5 z-10 flex justify-center items-center"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg></a>
                <div class="flex gap-2">
                    <a href="#" class="mb-7 group ">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="#" class="mb-7 group hidden lg:inline">
                        <div class="relative">
                            <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-md m-1 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>
                            </span>
                            <span
                                class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
                        </div>
                        <div class="flex items-start mt-3">
                            <div class="text-sm">
                                <span class="font-semibold text-gray-800">Video title</span>
                                <div class="text-gray-600 mt-1 flex items-center"></div>
                                <div class="text-gray-600 mt-1.5">
                                    1K views &middot; 1 day ago
                                </div>
                            </div>
                            <button class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <!--section3-->
        <div class="border-t border-gray-300 pt-4 pb-10">
            <a href="#" class="font-semibold text-lg">Featured channels</a>
            <div class="mt-6 flex">
                <div class="flex items-center w-full">
                    <a href="#" class="w-full flex flex-col items-center ml-14 mr-14">
                        <img src="http://placekitten.com/100/100" alt="" class="rounded-full">
                        <span class="font-semibold mb-4 mt-2">
                            Channel-name
                        </span>
                        <span class="text-gray-600 text-xs pb-4">
                            30.1K subscribers
                        </span>
                        <button class="bg-gray-200 py-1 px-2 text-xs font-semibold rounded-xl focus:outline-none">
                            Subscribe
                        </button>
                    </a>
                    <a href="#" class="w-full flex flex-col items-center ml-14 mr-14 hidden lg:inline">
                        <img src="http://placekitten.com/100/100" alt="" class="rounded-full">
                        <span class="font-semibold mb-4 mt-2">
                            Channel-name
                        </span>
                        <span class="text-gray-600 text-xs pb-4">
                            30.1K subscribers
                        </span>
                        <button class="bg-gray-200 py-1 px-2 text-xs font-semibold rounded-xl focus:outline-none">
                            Subscribe
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const mainClasses = computed(() => {
    return {
        'ml-64': props.sidebarState === 'normal',
        'ml-24': props.sidebarState === 'compact'
    }
});

const props = defineProps({
    sidebarState: String,
});

</script>