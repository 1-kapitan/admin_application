<template>
   
  <div v-if="$route.name !== 'login'" class="sm:ml-64 px-3 pt-3 backdrop-blur-[1.5px] fixed top-0  left-0 right-0 z-10">
    <div class="flex justify-between items-baseline shadow-lg p-3 bg-white rounded-md mb-5">
      <div class="flex space-x-4">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <button class="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light iconify iconify--tabler"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-v-0b8aa405=""
            style="font-size: 24px; height: 24px; width: 24px"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="10" cy="10" r="7"></circle>
              <path d="m21 21l-6-6"></path>
            </g>
          </svg>
          <span class="hidden md:inline font-semibold text-slate-500"> Search</span>
        </button>
      </div>
      <div class="space-x-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light iconify iconify--tabler"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="font-size: 24px; height: 24px; width: 24px"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
            ></path>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light iconify iconify--tabler"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="font-size: 24px; height: 24px; width: 24px"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect width="6" height="6" x="4" y="4" rx="1"></rect>
              <rect width="6" height="6" x="14" y="4" rx="1"></rect>
              <rect width="6" height="6" x="4" y="14" rx="1"></rect>
              <path d="M14 17h6m-3-3v6"></path>
            </g>
          </svg>
        </button>

        <button
          type="button"
          class="relative inline-flex items-center p-1 text-sm font-medium text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            tag="i"
            class="v-icon notranslate v-theme--light iconify iconify--tabler"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="font-size: 24px; height: 24px; width: 24px"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1"
            ></path>
          </svg>
          <span class="sr-only">Notifications</span>
          <div
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
          >
            20
          </div>
        </button>

        <button class="">
          <img class="w-[40px] rounded-full" src="../assets/avatar-1.png" alt="avatar" />
        </button>
      </div>
    </div>
  </div>

  <aside
    v-if="$route.name !== 'login'"
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full py-4 overflow-y-auto bg-primary dark:bg-gray-800">
      <a href="https://flowbite.com/" class="flex items-center px-5 mb-5">
        <img
          src="../assets/Includables_White_2.png"
          class="w-[calc(25%)] mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-secondary dark:text-white"
          >Includables</span
        >
      </a>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <ul class="space-y-2 font-mulish font-normal">
        <li
          v-bind:class="{ active: $route.path === '/dashboard' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link
            to="/dashboard"
            class="transition duration-75 hover:border-l-[3px] hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
          >
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-opacity="0.4" clip-path="url(#clip0_3918_8299)">
                  <path
                    d="M15.5232 8.94116H8.54406L13.192 13.5891C13.3696 13.7667 13.662 13.7812 13.8446 13.6091C14.9829 12.5367 15.7658 11.0912 15.9955 9.46616C16.0349 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8152 3.52176 12.0076 0.714119 8.49406 0.471767C8.22582 0.453237 7.99994 0.679413 7.99994 0.948236V7.5294H14.5814C14.8502 7.5294 15.0761 7.30352 15.0576 7.03528ZM6.58818 8.94116V1.96206C6.58818 1.68118 6.34141 1.45029 6.06347 1.48971C2.55847 1.985 -0.120646 5.04705 0.00405986 8.71675C0.132295 12.4856 3.3773 15.5761 7.14788 15.5288C8.63024 15.5103 9.99994 15.0326 11.1261 14.2338C11.3585 14.0691 11.3738 13.727 11.1723 13.5256L6.58818 8.94116Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3918_8299">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="ml-3">Dashboard</span>
            </span>
          </router-link>
        </li>
        <li
          v-bind:class="{ active: $route.path === '/accounts' || $route.path === '/accounts/personal-information' }"
          class="transition duration-75 hover:border-l-[3px] hover:bg-[#9FA2B4] group hover:bg-opacity-20 w-full"
        >
          <router-link to="/accounts">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              <g  fill-opacity="0.4">

                <path
                
                d="M2.4 7.20039C3.2825 7.20039 4 6.48289 4 5.60039C4 4.71789 3.2825 4.00039 2.4 4.00039C1.5175 4.00039 0.8 4.71789 0.8 5.60039C0.8 6.48289 1.5175 7.20039 2.4 7.20039ZM13.6 7.20039C14.4825 7.20039 15.2 6.48289 15.2 5.60039C15.2 4.71789 14.4825 4.00039 13.6 4.00039C12.7175 4.00039 12 4.71789 12 5.60039C12 6.48289 12.7175 7.20039 13.6 7.20039ZM14.4 8.00039H12.8C12.36 8.00039 11.9625 8.17789 11.6725 8.46539C12.68 9.01789 13.395 10.0154 13.55 11.2004H15.2C15.6425 11.2004 16 10.8429 16 10.4004V9.60039C16 8.71789 15.2825 8.00039 14.4 8.00039ZM8 8.00039C9.5475 8.00039 10.8 6.74789 10.8 5.20039C10.8 3.65289 9.5475 2.40039 8 2.40039C6.4525 2.40039 5.2 3.65289 5.2 5.20039C5.2 6.74789 6.4525 8.00039 8 8.00039ZM9.92 8.80039H9.7125C9.1925 9.05039 8.615 9.20039 8 9.20039C7.385 9.20039 6.81 9.05039 6.2875 8.80039H6.08C4.49 8.80039 3.2 10.0904 3.2 11.6804V12.4004C3.2 13.0629 3.7375 13.6004 4.4 13.6004H11.6C12.2625 13.6004 12.8 13.0629 12.8 12.4004V11.6804C12.8 10.0904 11.51 8.80039 9.92 8.80039ZM4.3275 8.46539C4.0375 8.17789 3.64 8.00039 3.2 8.00039H1.6C0.7175 8.00039 0 8.71789 0 9.60039V10.4004C0 10.8429 0.3575 11.2004 0.8 11.2004H2.4475C2.605 10.0154 3.32 9.01789 4.3275 8.46539Z"
                fill="currentColor"
                />
              </g>
              </svg>

              <span class="ml-3">Accounts</span>
            </span>
          </router-link>
        </li>
        <li
          v-bind:class="{ active: $route.path === '/transactions' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/transactions">
            <span
              href="#"
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                tag="i"
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                data-v-19546c97=""
              >
              <g fill-opacity="0.4">

                <path
                
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2"
                  ></path>
                </g>
              </svg>
              <!-- <img src="../assets/tickets.png" alt="" /> -->
              <span class="ml-3">Transactions</span>
            </span>
          </router-link>
        </li>

        <li
          v-bind:class="{ active: $route.path === '/tribes' }"
          class="transition duration-75 hover:border-l-[3px] hover:bg-[#9FA2B4] group hover:bg-opacity-20 w-full"
        >
          <router-link to="/tribes">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-opacity="0.4" clip-path="url(#clip0_3918_8310)">
                  <path
                  fill="currentColor"
                 
                    d="M5.50187 14.1985C5.50219 14.395 5.56031 14.5875 5.66937 14.7513L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7513C10.44 14.5875 10.4982 14.3952 10.4984 14.1985L10.4997 13H5.50031L5.50187 14.1985ZM2.5 5.50003C2.5 6.88659 3.01406 8.15159 3.86125 9.11815C4.3775 9.70721 5.185 10.9378 5.49281 11.976C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.976C10.815 10.9378 11.6225 9.70721 12.1388 9.11815C12.9859 8.15159 13.5 6.88659 13.5 5.50003C13.5 2.45659 11.0284 -0.00934836 7.98281 2.66431e-05C4.795 0.00971414 2.5 2.59284 2.5 5.50003ZM8 3.00003C6.62156 3.00003 5.5 4.12159 5.5 5.50003C5.5 5.77628 5.27625 6.00003 5 6.00003C4.72375 6.00003 4.5 5.77628 4.5 5.50003C4.5 3.57003 6.07 2.00003 8 2.00003C8.27625 2.00003 8.5 2.22378 8.5 2.50003C8.5 2.77628 8.27625 3.00003 8 3.00003Z"
                  
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3918_8310">
                    <rect width="16" height="16" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>

              <span class="ml-3">Tribes</span>
            </span>
          </router-link>
        </li>
        
        <li
          v-bind:class="{ active: $route.path === '/cards' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/cards">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              <g  fill-opacity="0.4">

                <path
                d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"
                fill="currentColor"
                />
              </g>
              </svg>

              <span class="ml-3">Cards</span>
            </span>
          </router-link>
        </li>
        <li
          v-bind:class="{ active: $route.path === '/wallets' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/wallets">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              <g fill-opacity="0.4">

                <path
                
                d="M15 11.25V0.75C15 0.334375 14.6656 0 14.25 0H4C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H14.25C14.6656 16 15 15.6656 15 15.25V14.75C15 14.5156 14.8906 14.3031 14.7219 14.1656C14.5906 13.6844 14.5906 12.3125 14.7219 11.8313C14.8906 11.6969 15 11.4844 15 11.25ZM5 4.1875C5 4.08437 5.08437 4 5.1875 4H11.8125C11.9156 4 12 4.08437 12 4.1875V4.8125C12 4.91563 11.9156 5 11.8125 5H5.1875C5.08437 5 5 4.91563 5 4.8125V4.1875ZM5 6.1875C5 6.08437 5.08437 6 5.1875 6H11.8125C11.9156 6 12 6.08437 12 6.1875V6.8125C12 6.91563 11.9156 7 11.8125 7H5.1875C5.08437 7 5 6.91563 5 6.8125V6.1875ZM12.9187 14H4C3.44688 14 3 13.5531 3 13C3 12.45 3.45 12 4 12H12.9187C12.8594 12.5344 12.8594 13.4656 12.9187 14Z"
                fill="currentColor"
                />
              </g>
              </svg>

              <span class="ml-3">Wallets</span>
            </span>
          </router-link>
        </li>
        
        <li
          v-bind:class="{ active: $route.path === '/learning-center' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/learning-center">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              <g fill-opacity="0.4">

                <path
                
                d="M15 11.25V0.75C15 0.334375 14.6656 0 14.25 0H4C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H14.25C14.6656 16 15 15.6656 15 15.25V14.75C15 14.5156 14.8906 14.3031 14.7219 14.1656C14.5906 13.6844 14.5906 12.3125 14.7219 11.8313C14.8906 11.6969 15 11.4844 15 11.25ZM5 4.1875C5 4.08437 5.08437 4 5.1875 4H11.8125C11.9156 4 12 4.08437 12 4.1875V4.8125C12 4.91563 11.9156 5 11.8125 5H5.1875C5.08437 5 5 4.91563 5 4.8125V4.1875ZM5 6.1875C5 6.08437 5.08437 6 5.1875 6H11.8125C11.9156 6 12 6.08437 12 6.1875V6.8125C12 6.91563 11.9156 7 11.8125 7H5.1875C5.08437 7 5 6.91563 5 6.8125V6.1875ZM12.9187 14H4C3.44688 14 3 13.5531 3 13C3 12.45 3.45 12 4 12H12.9187C12.8594 12.5344 12.8594 13.4656 12.9187 14Z"
                fill="currentColor"
                />
              </g>
              </svg>

              <span class="ml-3">Learning Center</span>
            </span>
          </router-link>
        </li>
      </ul>
      <hr class=" my-5 opacity-30 w-[calc(85%)] border rounded-lg " />
      <ul>
       
        <li
          v-bind:class="{ active: $route.path === '/reports' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/reports">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-opacity="0.4" clip-path="url(#clip0_3918_8330)">
                  <path
                    
                    d="M5.03506 11.3324C4.7635 11.0609 4.90506 11.1374 4.25006 10.9621C3.95287 10.8824 3.69162 10.7293 3.45537 10.5459L2.03756 14.0221C1.90037 14.3587 2.15662 14.7243 2.51975 14.7106L4.16631 14.6478L5.29881 15.844C5.54881 16.1078 5.98756 16.0256 6.12475 15.689L7.75131 11.7009C7.41256 11.8896 7.03662 12.0003 6.64787 12.0003C6.0385 12.0003 5.466 11.7631 5.03506 11.3324ZM13.9626 14.0221L12.5447 10.5459C12.3085 10.7296 12.0472 10.8824 11.7501 10.9621C11.0916 11.1384 11.236 11.0615 10.9651 11.3324C10.5341 11.7631 9.96131 12.0003 9.35194 12.0003C8.96319 12.0003 8.58725 11.8893 8.2485 11.7009L9.87506 15.689C10.0122 16.0256 10.4513 16.1078 10.701 15.844L11.8338 14.6478L13.4804 14.7106C13.8435 14.7243 14.0997 14.3584 13.9626 14.0221ZM10.2188 10.6253C10.6963 10.1393 10.751 10.1812 11.431 9.99588C11.8651 9.87744 12.2044 9.53213 12.3207 9.09025C12.5544 8.20275 12.4938 8.30994 13.1316 7.66056C13.4494 7.33713 13.5735 6.86556 13.4572 6.42369C13.2238 5.53681 13.2235 5.66056 13.4572 4.77275C13.5735 4.33088 13.4494 3.85931 13.1316 3.53588C12.4938 2.8865 12.5544 2.99338 12.3207 2.10619C12.2044 1.66431 11.8651 1.319 11.431 1.20056C10.5597 0.962752 10.6647 1.02494 10.0263 0.375252C9.7085 0.0518145 9.24506 -0.074748 8.811 0.0436895C7.94006 0.281189 8.06162 0.281502 7.18912 0.0436895C6.75506 -0.074748 6.29162 0.051502 5.97381 0.375252C5.336 1.02463 5.441 0.962752 4.56944 1.20056C4.13537 1.319 3.796 1.66431 3.67975 2.10619C3.44631 2.99338 3.50662 2.8865 2.86881 3.53588C2.551 3.85931 2.42662 4.33088 2.54319 4.77275C2.77662 5.659 2.77694 5.53525 2.54319 6.42338C2.42694 6.86525 2.551 7.33681 2.86881 7.66056C3.50662 8.30994 3.446 8.20275 3.67975 9.09025C3.796 9.53213 4.13537 9.87744 4.56944 9.99588C5.26881 10.1865 5.321 10.1565 5.78131 10.6253C6.19475 11.0462 6.83881 11.1215 7.33569 10.8071C7.53438 10.681 7.76487 10.614 8.00022 10.614C8.23557 10.614 8.46606 10.681 8.66475 10.8071C9.16131 11.1215 9.80537 11.0462 10.2188 10.6253ZM5.05194 5.499C5.05194 3.84181 6.37194 2.49838 8.00006 2.49838C9.62819 2.49838 10.9482 3.84181 10.9482 5.499C10.9482 7.15619 9.62819 8.49963 8.00006 8.49963C6.37194 8.49963 5.05194 7.15619 5.05194 5.499Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3918_8330">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span class="ml-3">Reports</span>
            </span>
          </router-link>
        </li>
        <li
          v-bind:class="{ active: $route.path === '/settings' }"
          class="transition duration-75 hover:border-l-[3px] group hover:bg-[#9FA2B4] hover:bg-opacity-20 w-full"
        >
          <router-link to="/settings">
            <span
              class="flex items-center transition duration-75 px-5 py-3.5 text-base font-normal text-navlinks hover:text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-navlinks transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-opacity="0.4" clip-path="url(#clip0_3918_8326)">
                  <path
                    
                    d="M15.2313 9.86546L13.9 9.09671C14.0344 8.37171 14.0344 7.62796 13.9 6.90296L15.2313 6.13421C15.3844 6.04671 15.4531 5.86546 15.4031 5.69671C15.0563 4.58421 14.4656 3.57796 13.6938 2.74046C13.575 2.61233 13.3813 2.58108 13.2313 2.66858L11.9 3.43733C11.3406 2.95608 10.6969 2.58421 10 2.34046V0.806084C10 0.631084 9.87814 0.477959 9.70627 0.440459C8.55939 0.184209 7.38439 0.196709 6.29377 0.440459C6.12189 0.477959 6.00002 0.631084 6.00002 0.806084V2.34358C5.30627 2.59046 4.66252 2.96233 4.10002 3.44046L2.77189 2.67171C2.61877 2.58421 2.42814 2.61233 2.30939 2.74358C1.53752 3.57796 0.946895 4.58421 0.60002 5.69983C0.546895 5.86858 0.61877 6.04983 0.771895 6.13733L2.10314 6.90608C1.96877 7.63108 1.96877 8.37483 2.10314 9.09983L0.771895 9.86858C0.61877 9.95608 0.55002 10.1373 0.60002 10.3061C0.946895 11.4186 1.53752 12.4248 2.30939 13.2623C2.42814 13.3905 2.62189 13.4217 2.77189 13.3342L4.10314 12.5655C4.66252 13.0467 5.30627 13.4186 6.00314 13.6623V15.1998C6.00314 15.3748 6.12502 15.528 6.29689 15.5655C7.44377 15.8217 8.61877 15.8092 9.70939 15.5655C9.88127 15.528 10.0031 15.3748 10.0031 15.1998V13.6623C10.6969 13.4155 11.3406 13.0436 11.9031 12.5655L13.2344 13.3342C13.3875 13.4217 13.5781 13.3936 13.6969 13.2623C14.4688 12.428 15.0594 11.4217 15.4063 10.3061C15.4531 10.1342 15.3844 9.95296 15.2313 9.86546ZM8.00002 10.4998C6.62189 10.4998 5.50002 9.37796 5.50002 7.99983C5.50002 6.62171 6.62189 5.49983 8.00002 5.49983C9.37814 5.49983 10.5 6.62171 10.5 7.99983C10.5 9.37796 9.37814 10.4998 8.00002 10.4998Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3918_8326">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span class="ml-3">Settings</span>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.active{
  border-left: 3px solid white;
  background: #9fa2b42d;
}

.active span {
  color: #fff
} 

.active g {
  fill-opacity: 1;
}

/* svg  g:hover{
  fill-opacity: 1;
} */
</style>