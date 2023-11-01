<template>
  <div class="w-80 flex min-h-30  mb-2 p-2">
    <div class="text-black">
      <h1 class="login-txt text-2xl font-bold animate__zoomInDown">Inscription</h1>
      <p class="text-gray-500 text-sm animate__backInUp">Remplissez les champs</p>
    </div>
  </div>
  <!--<div class="w-full min-h-30 mb-4">
    <p class="text-black text-sm">Full name</p>
    <div class="rounded-lg p-4 bg-white" :class="{ 'shadow-lg': isFocused_name }">
      <div class="flex items-center">
        <Icon name="fa6-regular:circle-user" color="blue" />
        <input type="text" placeholder="Enter your full name"
          class="flex-1 focus:outline-none border-transparent rounded-md py-2 px-4" @focus="applyShadow('name')"
          @blur="removeShadow('email')">
      </div>
    </div>
  </div>-->
  <div class="w-full min-h-30 mb-4 ">
    <p class="text-black text-sm">Email or username</p>
    <div class="rounded-lg p-4 bg-white" :class="{ 'shadow-lg': isFocused }">
      <div class="flex items-center">
        <Icon name="fa6-regular:envelope" color="blue" />
        <input type="email" placeholder="Enter your email"
          class="flex-1 focus:outline-none border-transparent rounded-md py-2 px-4" @focus="applyShadow('email')"
          @blur="removeShadow('email')">
      </div>
    </div>
  </div>
  <div class="w-full min-h-30 mb-4">
    <div class="w-full flex bg-white-100 mb-4">
      <!-- Left Sub-Div with Text "New here" -->
      <div class="w-1/2 flex items-right ">
        <div class="text-center">
          <p class="text-black text-sm">Password</p>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-white" :class="{ 'shadow-lg': isFocused_p }">
      <div class="flex items-center p-2">
        <Icon name="fe:lock" color="blue" />
        <input type="password" placeholder="Enter your password"
          class="flex-1 focus:shadow-none focus:outline-none border-transparent rounded-md py-2 px-4"
          @focus="applyShadow('pass')" @blur="removeShadow('pass')">
      </div>
    </div>
  </div>
  <div class="w-80 flex bg-white-100 mb-4">
    <!-- Left Sub-Div with Text "New here" -->
    <div class="w-1/2 flex items-center justify-center ">
      <div>
        <button type="submit" class="bg-blue-500 rounded-md px-6 py-3 text-white font-semibold">
          S'inscrire </button>
      </div>

    </div>

    <!-- Right Sub-Div with Button "Signin" -->
    <div class="w-1/2 flex items-center justify-center">

    </div>
  </div>
</template>

<script lang="ts">
import bgi from "assets/images/login_design.jpg";
export default {
  data() {
    return {
      isFocused: false,
      isFocused_p: false,
      isFocused_name: false,
      inputValue: '',
      image: { backgroundImage: `url(${bgi})` },
    };
  },
  methods: {
    applyShadow(txt: string) {
      if (txt == "email") {
        this.isFocused = true;
      }
      else if (txt == "pass") { this.isFocused_p = true; }
      else if (txt == "name") { this.isFocused_name = true; }

    },
    removeShadow(txt: string) {
      if (txt == "email") {
        this.isFocused = false;
      }
      else if (txt == "pass") { this.isFocused_p = false; }
      else if (txt == "name") { this.isFocused_name = false; }
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
</style>

