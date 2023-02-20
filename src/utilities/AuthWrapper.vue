<template >
    <div class="bg-white">

    <div class="container mx-auto mt-[calc(25%)] md:my-[calc(5%)]" >
    <div class=" mx-auto">

        <img class=" w-[25%] md:w-[10%] mx-auto" src="../assets/logo.png" alt="">
        <h1 class="text-4xl font-lucida">Includables</h1>
    </div>
       <div class="form-wrapper bg-secondary p-[40px] my-5 mx-auto w-[calc(90%)]  md:w-[calc(50%)] shadow shadow-primary">
        
           <form action="" class="flex flex-col gap-5">
            <slot></slot>
           </form>
        </div> 
    </div>
</div>

</template>


<script>
export default {
}
</script>


<style>
    label{
    color: #8B3DBB;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    width: fit-content;
}

input{
    padding: 10px 6px;
    box-sizing: border-box;
    border-bottom: 2px solid #8B3DBB;
    border-right: 2px solid #8B3DBB ;
    background: #DEDBE7;
    color: #555;
}

input:focus{
    outline: none;
} 

</style>