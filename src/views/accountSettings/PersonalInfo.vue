<template>
  <div class="rounded-lg shadow-md py-2 bg-white font-mulish">
    <div class="m-5 space-y-6">
      <h1 class="text-left text-xl font-semibold">Personal Information</h1>
      <div class="flex items-center gap-5">
        <div>
          <img class="w-[100px]" src="../../assets/avatar-14.png" alt="" />
        </div>
        <div class="flex flex-col space-y-5">
          <div class="flex space-x-3 items-center uppercase">
            <div class="px-5 sm:px-3 py-2 uppercase rounded-lg bg-primary">
              <label for="input-file" class=" ">
                <span class="hidden sm:inline text-white text-base font-semibold"
                  >upload new photo</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  tag="i"
                  class="text-white sm:hidden v-icon notranslate v-theme--light v-icon--size-default d-sm-none iconify iconify--tabler"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      d="M7 18a4.6 4.4 0 0 1 0-9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
                    ></path>
                    <path d="m9 15l3-3l3 3m-3-3v9"></path>
                  </g>
                </svg>
                <input
                  class="hidden"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="input-file"
                  id="input-file"
                />
              </label>
            </div>

            <!-- <button
              class=" w-[50%] px-5 sm:px-3  uppercase rounded-lg bg-primary text-white font-semibold"
            >
             
            </button> -->

            <button
              class="px-5 sm:px-3 py-2 text-[#a8aaae] text-base uppercase rounded-lg bg-secondary"
            >
              <span class="hidden sm:inline">reset</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                tag="i"
                class="sm:hidden v-icon notranslate v-theme--light v-icon--size-default d-sm-none iconify iconify--tabler"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
                ></path>
              </svg>
            </button>
          </div>
          <span class="text-xs sm:text-sm">Allowed JPG, GIF or PNG. Max size of 800K</span>
        </div>
      </div>
    </div>
    <hr class="my-5 border rounded-lg" />

    <form class="flex flex-col space-y-5 w-[100%] p-5">
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="firstName" class="capitalize font-semibold text-xs">first Name </label>
          <input
            type="text"
            name="firstName"
            id=""
            value="john"
            class="border rounded-xl focus:border-primary"
          />
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="lastName" class="capitalize font-semibold text-xs">last Name </label>
          <input
            type="text"
            name="lastName"
            id=""
            value="Doe"
            class="border rounded-xl focus:border-primary"
          />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="email" class="capitalize font-semibold text-xs">email </label>
          <input
            type="text"
            name="email"
            id=""
            value="johnDoe@example.com"
            class="border rounded-xl focus:border-primary"
          />
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="organization" class="capitalize font-semibold text-xs">organiazation </label>
          <input
            type="text"
            name="organization"
            id=""
            value="Pixinvent"
            class="border rounded-xl focus:border-primary"
          />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="phoneNumber" class="capitalize font-semibold text-xs">phone number </label>
          <input
            type="text"
            name="phoneNumber"
            id=""
            value="+1 (917) 543-9876"
            class="border rounded-xl focus:border-primary"
          />
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="address" class="capitalize font-semibold text-xs">address </label>
          <input
            type="text"
            name="address"
            id=""
            value="123 Main St, New York, NY 10001"
            class="border rounded-xl focus:border-primary"
          />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="state" class="capitalize font-semibold text-xs">state</label>
          <input
            type="text"
            name="state"
            id=""
            value="New York"
            class="border rounded-xl focus:border-primary"
          />
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="zipCode" class="capitalize font-semibold text-xs">zip code </label>
          <input
            type="text"
            name="zipCode"
            id=""
            value="100011"
            class="border rounded-xl focus:border-primary"
          />
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="country" class="capitalize font-semibold text-xs">country </label>
          <select class="border rounded-xl focus:border-primary" name="country">
            <option value="">USA</option>
          </select>
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="language" class="capitalize font-semibold text-xs">language </label>
          <select class="border rounded-xl focus:border-primary" name="language">
            <option value="">English</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-between space-y-5 md:space-y-0 md:space-x-10">
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="timeZone" class="capitalize font-semibold text-xs">time Zone </label>
          <select class="border rounded-xl focus:border-primary" name="timeZone">
            <option value="">(GMT-11:00)</option>
          </select>
        </div>
        <div class="flex flex-col gap-1 w-[100%]">
          <label for="currency" class="capitalize font-semibold text-xs">currency </label>
          <select class="border rounded-xl focus:border-primary" name="currency">
            <option value="">USd</option>
            <option value="">USd</option>
          </select>
        </div>
      </div>
      <div class="flex space-x-5  pt-5">
        <button class="px-5 sm:px-3 py-2 uppercase text-white rounded-lg bg-primary">
          save changes
        </button>
        <button
          class="px-5 sm:px-3 py-2 text-[#a8aaae] text-base uppercase rounded-lg bg-secondary"
        >
          reset
        </button>
      </div>
    </form>
  </div>
  <div class="font-mulish rounded-lg shadow p-4 bg-white mt-5 text-left ">
    <h1 class="capitalize text-xl font-semibold"> delete account </h1>
    <div class="text-orange-400 p-2 bg-orange-100 my-4 ">
      <h4 class="text-xl font-semibold ">Are you sure you want to delete your account ?</h4>
      <span class="text-base font-normal ">Once you delete your account, there is no  going back. Please be certain.</span>
    </div>
    <div class="flex items-center space-x-3 my-5">
      <input class=" rounded" type="checkbox" name="check" id="">
      <span>I confrim my account deactivation </span>
    </div>
    <button disabled class="px-5 sm:px-3 disabled:opacity-40 py-2 uppercase text-white rounded-lg bg-red-700">
          deactivate account 
        </button>
  </div>
</template>

<script>
export default {};
</script>
