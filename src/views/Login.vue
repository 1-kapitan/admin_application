<template>
  <AuthWrapper>
    <div class="flex flex-col gap-2">
      <label class=""> User name: </label>
      <input type="text" placeholder="Username" required  />
    </div>

    <div class="flex flex-col gap-2">
      <label> Password: </label>
      <input type="password" placeholder="Password" required  />
    </div>

    <div class="flex justify-between">
      <router-link to="/dashboard" class="bg-primary p-2 w-[30%] text-white font-bold rounded-md uppercase">Log in</router-link>
      <!-- <router-link to="/reset-password" class="bg-transparent font-semibold text-primary capitalize">Forgot password?</router-link> -->
    </div>
    <!-- <small  class="text-[#555] mt-5 text-sm"
      >New on our platform?
      <router-link to="/register" class="bg-transparent font-semibold text-primary">Create an account</router-link></small
    > -->
  </AuthWrapper>
</template>

<script>
import AuthWrapper from '../utilities/AuthWrapper.vue';

export default {
  components: { AuthWrapper },

  methods: {
  }
};
</script>

