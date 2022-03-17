<script setup></script>

<template>
  <div class="col-start-1 col-end-3">
    <aside class="w-64" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-[#3F83F8] text-white rounded-r-lg dark:bg-gray-800"
      >
        <!-- --------------------------------------------------------------- HOME ICON TOP ---------------------------------------------------------------- -->
        <router-link to="/" class="flex pl-2.5 mb-5">
          <svg
            class="mr-3 h-9"
            viewBox="0 0 52 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
              fill="#76A9FA"
            />
            <path
              d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
              fill="#A4CAFE"
            />
            <path
              d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
              fill="#1C64F2"
            />
          </svg>
          <span
            class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >Web-Design</span
          >
        </router-link>

        <!--------------------------------------------------------------- LIST OF ELEMENTS DASHBOARD -------------------------------------->
        <ul class="space-y-2">
          <!-- USERS -->
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-white hover:text-blue-500"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
              <span class="ml-3">Departments</span>
            </router-link>
          </li>
          <!-- END USERS -->

          <!-- DEPARTMENTS -->
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-white hover:text-blue-500"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="ml-3">Users</span>
            </router-link>
          </li>
          <!-- END DEPARTMENTS -->
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <!-- ABOUT -->
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-white hover:text-blue-500"
            >
              <svg
                class="w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="ml-3">About us</span>
            </router-link>
          </li>
          <!-- END ABOUT -->

          <!-- HELP -->
          <li>
            <router-link
              to="/about"
              class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-white hover:text-blue-500"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="ml-3">Help</span>
            </router-link>
          </li>
          <!-- END HELP -->
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
#navbar {
  background-color: blueviolet;
  color: white;
}
</style>
