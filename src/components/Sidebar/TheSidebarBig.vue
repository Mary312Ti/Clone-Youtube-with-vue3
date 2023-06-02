<template>
    <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed">
      <section class="py-2 border-b">
        <ul>
          <SidebarNavItem label="Home" icon="homeIcon" fill-color="currentColor" stroke-color="none" is-active/>
          <SidebarNavItem label="Shorts" icon="shortsIcon"/>
          <SidebarNavItem label="Subscriptions" icon="subscribeIcon"/>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <SidebarNavItem label="Library" icon="libraryIcon"/>
          <SidebarNavItem label="History" icon="historyIcon"/>
        </ul>
      </section>
      <section class="px-6 py-4 border-b leading-5">
        <span class="text-sm"
          >Sign in to like videos, comment, and subscribe</span
        >
        <!--Заменить кнопку входа-->
        <button
          class="text-blue-600 flex items-center border border-gray-300 rounded-3xl p-1 pr-3.5 px-2 mt-3"
        >
          <svg
            class="mr-2 w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Sign in
        </button>
      </section>
      <section class="py-2 border-b">
        <div class="px-6 pt-4 pb-1 text-base">
          Explore
        </div>
        <ul>
          <SidebarNavItem label="Trending" icon="trendingIcon"/>
          <SidebarNavItem label="Music" icon="musicIcon"/>
          <SidebarNavItem label="Movies" icon="moviesIcon"/>
          <SidebarNavItem label="Live" icon="liveIcon"/>
          <SidebarNavItem label="Gaming" icon="gamingIcon"/>
          <SidebarNavItem label="Sports" icon="sportsIcon"/>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <SidebarNavItem label="Trending" icon="trendingIcon"/>
        </ul>
      </section>
      <section class="py-2 border-b">
        <div class="px-6 pt-4 pb-1 text-base">
          More from YouTube
        </div>
        <ul>
          <li>
            <a
              href="#"
              class="rounded-3xl flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg class="mr-2 w-7 h-7" viewBox="0 0 24 24">
                <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
                <polygon
                  fill="#FFFFFF"
                  points="10,14.65 10,9.35 15,12 "
                ></polygon>
                <path
                  fill="#FFFFFF"
                  d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                ></path>
              </svg>
              <span>YouTube Music</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="rounded-3xl flex items-center px-6 py-2 text-sm hover:bg-gray-100"
            >
              <svg class="mr-2 w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#FF0000"
                  d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#000"
                  d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#000"
                  d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                  class="style-scope yt-icon"
                ></path>
                <path
                  fill="#FFF"
                  d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                ></path>
              </svg>
              <span>YouTube Kids</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="py-2 border-b">
        <ul>
          <SidebarNavItem label="Settings" icon="settingsIcon"/>
          <SidebarNavItem label="Report history" icon="historyIcon"/>
          <SidebarNavItem label="Help" icon="helpIcon"/>
          <SidebarNavItem label="Send Feedback" icon="feedbackIcon"/>
        </ul>
      </section>
      <section class="px-6 py-4 text-xs font-semobold space-y-4 text-gray-800">
        <div>
          <a href="#" class="mr-2">About</a>
          <a href="#" class="mr-2">Press</a>
          <a href="#" class="mr-2">Copyright</a>
          <a href="#" class="mr-2">Contact us</a>
          <a href="#" class="mr-2">Creators</a>
          <a href="#" class="mr-2">Advertise</a>
          <a href="#" class="mr-2">Developers</a>
        </div>
        <div>
          <a href="#" class="mr-2">Terms</a>
          <a href="#" class="mr-2">Privacy</a>
          <a href="#" class="mr-2">Policy & Safety</a>
          <a href="#" class="mr-2">How YouTube works</a>
          <a href="#" class="mr-2">Test new features</a>
        </div>
        <div class="text-gray-500">
          &copy;&nbsp;2023 Google LLC
        </div>
      </section>
    </aside>
</template>

<script setup>
import SidebarNavItem from './SidebarNavItem.vue';
</script>