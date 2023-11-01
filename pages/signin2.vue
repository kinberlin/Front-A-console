<template>
    <div
        class=" flex h-screen w-screen bg-cover bg-center bg-contain bg-no-repeat justify-center items-center bg-orange-500">
        <!-- Full-screen Parent Div with Background Image -->
        <div class="relative bg-black bg-opacity-20 p-3 h-fit w-8/12 animate__bounceIn">
            <div class="relative ctn bg-cover h-auto bg-contain bg-center border p-3 w-full rounded-md">
                <div class=" relative absolute inset-0 flex items-center justify-center w-auto h-auto rounded-md p-10">

                    <!-- Centered Child Div -->
                    <div class="relative w-auto h-auto max-w-screen-sm bg-white p-4 rounded-md ">
                        <!-- Five Horizontal Sub-Divs -->
                        <div class="w-80 flex bg-white-100 mb-4">
                            <!-- Left Sub-Div with Text "New here" -->
                            <div class="w-1/2 flex items-center justify-center animate__lightSpeedInRight">
                                <div class="text-center">
                                    <p4 class=" font-bold title"> {{ isLogin ? "Nouveau Ici ? " : "Déja Inscrits ? "}}</p4>
                                </div>
                            </div>

                            <!-- Right Sub-Div with Button "Signin" -->
                            <div class="w-1/2 flex items-center justify-center">
                                <div>
                                    <button @click="toggleForm"
                                        class="bg-blue-500 rounded-md px-6 py-3 text-white font-semibold"> {{ isLogin ? "S'Inscrire" : "Se Connecter"}}</button>
                                </div>
                            </div>
                        </div>
                        <transition name="fade-in-right" mode="out-in">
                            <form :key="isLogin ? 'login' : 'register'" v-if="isLogin" @submit="login">
                                <!-- Login form content -->
                                <Login />
                            </form>

                            <form :key="isLogin ? 'login' : 'register'" v-else @submit="register">
                                <!-- Registration form content -->
                                <Register />
                            </form>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import bgi from "assets/images/login_design.jpg";
export default {

    data() {
        const { $anime } = useNuxtApp();
          onMounted(() => {    $anime({ targets: '.title', translateX: 250, duration: 8000 })  })
        return {
            isLogin: true,
            inputValue: '',
            image: { backgroundImage: `url(${bgi})` },
        };
    },
    
    methods: {
        toggleForm() {
            this.isLogin = !this.isLogin;
        },
        login(e) {
            e.preventDefault();
            // Implement your login logic here
        },
        register(e) {
            e.preventDefault();
            // Implement your registration logic here
        },
    },
};

</script>
<style >
.ctn {

    background-image: url("~/assets/images/login_design1.jpg");
}

.ctn2 {
    background-image: url("~/assets/images/login_bg.jpg");
}

.login-txt {
    font-family: 'Lato';
    font-style: normal;
    display: inline-block;
}
.fade-in-right-enter-active {
  animation: fadeInRight 0.5s;
}
.fade-in-right-leave-active {
  animation: fadeOut 0.5s;
}
</style>

