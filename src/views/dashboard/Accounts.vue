<template>
  <DashBoardWrapper>
    <div class="bg-white rounded-md shadow-md py-5">
      <div class="flex justify-between items-center px-3 md:px-7">
        <h1 class="font-bold text-[19px]">All Accounts</h1>
        <div class="flex space-x-4 font-semibold text-sm">
          <button class="flex items-center space-x-1">
            <img class="inline" src="../../assets/sort~icon.svg" alt="" />
            <span> Sort </span>
          </button>
          <button class="flex items-center space-x-1">
            <img class="inline" src="../../assets/filter~icon.svg" alt="" />
            <span> Filter </span>
          </button>
        </div>
      </div>

    <div class="relative overflow-auto ">
      <table class="w-full text-sm font-semibold text-[#252733] text-left  dark:text-gray-400">
        <thead
          class=" font-bold text-[#9FA2B4] capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-3 md:px-6 py-3">account details</th>
            <th scope="col" class="px-3 md:px-6 py-3">acount balace</th>
            <th scope="col" class="px-3 md:px-6 py-3">date joined</th>
            <th scope="col" class="px-3 md:px-6 py-3">alert</th>
            <th scope="col" class="px-3 md:px-6 py-3">
              <span class=" invisible">Edit</span>
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td
              scope="row"
              class="px-4 md:px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
            <router-link to="/accounts/personal-information"  class="flex space-x-4">
              <div class=" border-[3px] rounded-full border-primary">

                <img src="../../assets/avatar-1.png" class=" w-[40px] rounded-full" alt="">
              </div>
              <div class="text-left">
               <h6> Amina Aminu</h6>
               <small class="font-light">last seen 3 hours ago</small>

              </div>
            </router-link >
            </td>
            <td class="px-3 md:px-6 py-4">
              
              <div class="flex flex-col">
               <h6> 400</h6>
               <small class="font-light">recorded on 24.05.22</small>

              </div>

            </td>
            <td class=" px-3 md:px-6 py-4">
              <div class="flex flex-col">
               <h6 > Apr 26, 22</h6>
               <small class="font-light">6:30 PM</small>

              </div>
            </td>
            <td class="px-3 md:px-6 py-4">
              <img class="w-[25px]" src="../../assets/redflag.svg" alt="">
            </td>
            <td class="px-4 md:px-6 py-4 text-center">
              <button class="font-medium"
                > 
                <img  src="../../assets/options.svg" alt="">
                </button
              >
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td
              scope="row"
              class="px-4 md:px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
            <router-link to="/accounts/personal-information"  class="flex space-x-4">
              <div class=" border-[3px] rounded-full border-primary">

                <img src="../../assets/avatar-1.png" class=" w-[40px] rounded-full" alt="">
              </div>
              <div class="text-left">
               <h6> Amina Aminu</h6>
               <small class="font-light">last seen 3 hours ago</small>

              </div>
            </router-link >
            </td>
            <td class="px-3 md:px-6 py-4">
              
              <div class="flex flex-col">
               <h6> 400</h6>
               <small class="font-light">recorded on 24.05.22</small>

              </div>

            </td>
            <td class=" px-3 md:px-6 py-4">
              <div class="flex flex-col">
               <h6 > Apr 26, 22</h6>
               <small class="font-light">6:30 PM</small>

              </div>
            </td>
            <td class="px-3 md:px-6 py-4">
              <img class="w-[25px]" src="../../assets/redflag.svg" alt="">
            </td>
            <td class="px-4 md:px-6 py-4 text-center">
              <button class="font-medium"
                > 
                <img  src="../../assets/options.svg" alt="">
                </button
              >
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td
              scope="row"
              class="px-4 md:px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
            <router-link to="/accounts/personal-information"  class="flex space-x-4">
              <div class=" border-[3px] rounded-full border-primary">

                <img src="../../assets/avatar-1.png" class=" w-[40px] rounded-full" alt="">
              </div>
              <div class="text-left">
               <h6> Amina Aminu</h6>
               <small class="font-light">last seen 3 hours ago</small>

              </div>
            </router-link >
            </td>
            <td class="px-3 md:px-6 py-4">
              
              <div class="flex flex-col">
               <h6> 400</h6>
               <small class="font-light">recorded on 24.05.22</small>

              </div>

            </td>
            <td class=" px-3 md:px-6 py-4">
              <div class="flex flex-col">
               <h6 > Apr 26, 22</h6>
               <small class="font-light">6:30 PM</small>

              </div>
            </td>
            <td class="px-3 md:px-6 py-4">
              <img class="w-[25px]" src="../../assets/redflag.svg" alt="">
            </td>
            <td class="px-4 md:px-6 py-4 text-center">
              <button class="font-medium"
                > 
                <img  src="../../assets/options.svg" alt="">
                </button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </DashBoardWrapper>
</template>

<script>
import DashBoardWrapper from '../../utilities/DashboardWrapper.vue';
export default {
  components: {
    DashBoardWrapper,
  },
};
</script>
