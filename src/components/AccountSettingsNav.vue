<template>
    <ul class="flex mb-2 space-x-3 overflow-auto pb-5 font-mulish">
        <router-link
          to="/accounts/personal-information"
          class="p-2 w-[100%] lg:w-[unset]   font-bold text-xs lg:text-sm  uppercase rounded-lg"
          :class="{
            'bg-primary text-white': $route.path === '/accounts/personal-information',
            'bg-transparent hover:bg-[#f5f4f95e]  text-[#33303cad]': $route.path !== '/accounts/personal-information',
          }"
        >
          personal infomation
        </router-link>
        <router-link
          to="/accounts/change-password"
          class="p-2 w-[100%] lg:w-[unset]   font-bold text-xs lg:text-sm  uppercase rounded-lg "
          :class="{
            'bg-primary text-white': $route.path === '/accounts/change-password',
            'bg-transparent hover:bg-[#f5f4f95e] text-[#33303cad]': $route.path !== '/accounts/change-password',
          }"
        >
          change pasword 
        </router-link>

        <router-link
          to="/accounts/kyc-details"
          class="p-2 w-[100%] lg:w-[unset]   font-bold text-xs lg:text-sm  uppercase rounded-lg "
          :class="{
            'bg-primary text-white': $route.path === '/accounts/kyc-details',
            'bg-transparent hover:bg-[#f5f4f95e] text-[#33303cad]': $route.path !== '/accounts/kyc-details',
          }"
        >
          Kyc detials 
        </router-link> <router-link
          to="/accounts/wallet/transactions"
          class="p-2 w-[100%] lg:w-[unset]   font-bold text-xs lg:text-sm  uppercase rounded-lg "
          :class="{
            'bg-primary text-white': $route.path === '/accounts/wallet/transactions',
            'bg-transparent hover:bg-[#f5f4f95e] text-[#33303cad]': $route.path !== '/accounts/wallet/transactions',
          }"
        >
          wallet/<br class="lg:hidden">trasactions 
        </router-link> <router-link
          to="/accounts/card/transactions"
          class="p-2 w-[100%] lg:w-[unset]   font-bold text-xs lg:text-sm  uppercase rounded-lg "
          :class="{
            'bg-primary text-white': $route.path === '/accounts/card/transactions',
            'bg-transparent hover:bg-[#f5f4f95e] text-[#33303cad]': $route.path !== '/accounts/card/transactions',
          }"
        >
          card/<br class="lg:hidden">transactions
        </router-link>
    </ul>
</template>

<script>
export default {};
</script>

<style>
.active {
  background: #8b3dbb;
}
</style>
