<template>
<DashBoardWrapper>

    <div class="rounded-lg py-4 w-full">

        <div class="flex overflow-auto w-[100%] space-x-10 p-3"> 
            <button class="p-3 text-primary bg-white flex flex-col rounded-md w-[100%] items-center"><span class="">
                Icon</span> <span class="font-bold">Total Users</span> <span>4</span> </button>
            <button class="p-3 text-primary bg-white flex flex-col rounded-md w-[100%] items-center"><span class="">
                Icon</span> <span class="font-bold">Total Transactions</span> <span>4</span> </button>
            <button class="p-3 text-primary bg-white flex flex-col rounded-md w-[100%] items-center"><span class="">
                Icon</span> <span class="font-bold">Total Tribes</span> <span>4</span> </button>
            <button class="p-3 text-primary bg-white flex flex-col rounded-md w-[100%] items-center"><span class="">
                Icon</span> <span class="font-bold">Total Cards Created</span> <span>4</span> </button>
        </div>

        <div class="bg-white flex overflow-auto w-[100%] space-x-10 p-3 rounded-md">
            <div class="flex float-left w-[100%] border-double border-primary text-primary">
                <h1> the card Contents will go here</h1>
            </div>
            <div class="block float-right">
                <button class="py-2 my-5 text-primary bg-white rounded-md w-[100%] items-center border-solid border-2 border-primary">
                    Cards</button>
                <button class="py-2 my-5 text-primary bg-white rounded-md w-[100%] items-center border-solid border-2 border-primary">
                    Bills/Airtime</button>
                <button class="py-2 my-5 text-primary bg-white rounded-md w-[100%] items-center border-solid border-2 border-primary">
                    Transfers</button>
            </div>
        </div>
    </div>
</DashBoardWrapper>
</template>

<script>
import DashBoardWrapper from '../../utilities/DashboardWrapper.vue';
export default {
    components: { DashBoardWrapper }
}
</script>