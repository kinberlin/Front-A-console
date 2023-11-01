<template>
    <!--<div class="h-screen bg-gray-200 w-full flex items-center justify-center">
         Left Div 
        <div class="w-1/2 h-full bg-orange-500 relative">
            <div class="w-3/4 h-3/4 bg-red-500 absolute top-1/2 right-0 transform -translate-y-1/2">
                <img src="~/assets/images/cloud.png" alt="Orange Image" class="w-full h-full object-cover" />
            </div>
        </div>

         Right Div 
        <div class="w-1/2 h-full bg-blue-300 relative">
            <div class="w-3/4 h-3/4 absolute bg-gray-500 top-1/2 left-0 transform -translate-y-1/2">
                <img src="~/assets/images/svu.webp" alt="Blue Image" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>-->
    <div class="relative h-screen bg-cover bg-center bg-contain bg-no-repeat ctn2">
        <!-- Full-screen Parent Div with Background Image -->
        <div class="relative h-screen bg-contain bg-no-repeat bg-center ctn">
            <div class="absolute inset-0 flex items-center justify-center">
                <!-- Centered Child Div -->
                <div class="w-auto h-auto max-w-screen-sm bg-white p-4">
                    <!-- Five Horizontal Sub-Divs -->
                    <div class="w-80 flex bg-white-100 mb-4">
                        <!-- Left Sub-Div with Text "New here" -->
                        <div class="w-1/2 flex items-center justify-center ">
                            <div class="text-center">
                                <p4 class=" font-bold">Nouveau Ici ?</p4>
                            </div>
                        </div>

                        <!-- Right Sub-Div with Button "Signin" -->
                        <div class="w-1/2 flex items-center justify-center">
                            <div>
                                <button
                                    class="bg-blue-500 rounded-full px-6 py-3 text-white font-semibold">S'Inscrire</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-80 flex min-h-30  mb-2 p-2">
                        <div class="text-black">
                            <h1 class="text-2xl font-bold">Log In Now</h1>
                            <p class="text-gray-500 text-sm">Enter your details</p>
                        </div>
                    </div>
                    <div class="w-full min-h-30 mb-4 p-2">
                        <p class="text-black font-bold text-sm">Email or username</p>
                        <div class="rounded-lg shadow-lg p-4 bg-white">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                                <input type="email" placeholder="Enter your email"
                                    class="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        </div>
                    </div>
                    <div class="w-full min-h-30 mb-4 p-2">
                        <div class="w-full flex bg-white-100 mb-4">
                        <!-- Left Sub-Div with Text "New here" -->
                        <div class="w-1/2 flex items-right ">
                            <div class="text-center">
                                <p class="text-black font-bold text-sm">Password</p>
                            </div>
                        </div>

                        <!-- Right Sub-Div with Button "Signin" -->
                        <div class="w-1/2 flex items-left">
                            <div>
                                <p class="text-blue-600 text-sm font-semibold">Forgot Password ?</p>
                            </div>
                        </div>
                        </div>
                        <div class="rounded-lg shadow-lg p-4 bg-white">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"></path>
                                </svg>
                                <input type="password" placeholder="Enter your password"
                                    class="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                        </div>
                    </div>
                    <div class="w-80 flex bg-white-100 mb-4">
                        <!-- Left Sub-Div with Text "New here" -->
                        <div class="w-1/2 flex items-center justify-center ">
                            <div>
                                <button
                                    class="bg-blue-500 rounded-full px-6 py-3 text-white font-semibold">Se Connecter</button>
                            </div>
                            
                        </div>

                        <!-- Right Sub-Div with Button "Signin" -->
                        <div class="w-1/2 flex items-center justify-center">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import bgi from "assets/images/login_design.jpg";
export default {
    data() {
        return {
            image: { backgroundImage: `url(${bgi})` },
        };
    }
};
</script>
<style scoped>
.ctn {
    background-image: url("~/assets/images/login_design.jpg");
}

.ctn2 {
    background-image: url("~/assets/images/login_bg.jpg");
}
</style>

