<template>
  <div class="w-full h-screen bg-img flex justify-center items-center relative">
    <div class="w-full h-full relative overflow-hidden">
      <img
        src="https://images.expothemes.com/macos-monterey/images/macos-monterey-windows-theme-5-hd.jpg"
        class="absolute w-full h-full blur-sm kenburns-top"
        alt=""
      />
      <img src="../imgs/fun-3d-cartoon-illustration-indian-doctor-removebg-preview.png" class="absolute -right-[50%]" :class="{suc:succeceful}" alt="">

      <div
        class="md:w-1/3 bg-slate-200 rounded-md border-2 absolute left-1/3 bottom-1/3 p-6"
      >
        <div
          class="absolute top-[-70px] right-[35.33%] z-50 bg-[#cea3d1] rounded-full overflow-hidden"
        >
          <img
            src="../imgs/9306595-removebg-preview.png"
            class="w-32 relative -bottom-4"
            alt=""
            v-if="filled"
            :class="{ heartbeat: filled }"
          />
          <img
            src="../imgs/9306605-removebg-preview.png"
            class="w-32 relative -bottom-4"
            alt=""
            v-if="succeceful"
            :class="{ bounce: filled }"
          />
          <img
            src="../imgs/9306608-removebg-preview.png"
            class="w-32 relative -bottom-4"
            alt=""
            v-if="element"
          />
          <img
            src="../imgs/9306593-removebg-preview.png"
            class="w-32 relative -bottom-4"
            alt=""
            v-if="login"
            :class="{ vibrate: login }"
          />
        </div>

        <form action="" class=" ">
          <div class="flex flex-col gap-5 mt-14">
            <div
              class="flex rounded-md p-2 bg-slate-300 duration-500 focus-within:bg-[#cea3d1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 px-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                class="bg-transparent border-l-2 border-slate-500 focus:border-pink-900 outline-none px-2 w-full"
                v-model="email"
                @input="changeVatar"
                @blur="validateEmail"
              />
            </div>
            <div
              class="flex in rounded-md p-2 bg-slate-300 duration-500 focus-within:bg-[#cea3d1]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 px-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                type="password"
                class="bg-transparent border-l-2 border-slate-500 outline-none px-2 focus:border-pink-900 w-full"
                v-model="password"
                @input="changeVatar"
              />
            </div>
            <span class="text-xs text-red-600" :class="{check:validcheck}">{{msg}}</span>
          </div>
        </form>
        <div class="flex justify-center items-center p-2 mt-4">
          <button
            type="submit"
            class="bg-[#cea3d1] text-[#630aa0] duration-700 px-8 py-2 rounded-lg hover:bg-[#630aa0] hover:text-white"
            @click="succsuf"
          >
            Login
          </button>
        </div>
        <div class="">
        
        </div>
  
      </div>
    </div>
    <div
      class="absolute p-2 bottom-1/4 rounded-lg duration-500 hover:bg-[#630aa0]"
    >
      <router-link class="flex gap-1 text-white" to="/"
        >Forgot you password
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const password = ref("");
const msg = ref("");
const validcheck = ref(false);
const login = ref(true);
const element = ref();
const succeceful = ref(false);
const filled = ref();

const email = ref("");

function succsuf() {
  axios
    .post("https://reqres.in/api/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
       
      console.log(response);
      email.value = "";
      password.value = "";
      // window.location = "../src/pages/hello.vue";
      msg.value = `successful`;
      login.value = false;
      succeceful.value = true;
      filled.value = false;

      validcheck.value = true;
      // alert({
      //   Email: email.value,
      //   password: password.value,
      // });
    
    })
    .catch((e) => {
      msg.value = e.response.data.error + " * ";
     
      login.value = false;
      succeceful.value = false;
      filled.value = true;
      validcheck.value = false;
    });
}
const changeVatar = () => {
  if (email.value) {
    login.value = true;
    succeceful.value = false;
    filled.value = false;
    msg.value = "";
  }
};




</script>

// "email": "eve.holt@reqres.in", "password": "cityslicka"
<style scoped>
.check {
  color: green;
}
.vibrate {
  -webkit-animation: vibrate-1 0.3s linear infinite both;
  animation: vibrate-1 0.3s linear infinite both;
}
/* ----------------------------------------------
 * Generated by Animista on 2024-1-13 21:45:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation vibrate-1
 * ----------------------------------------
 */
@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}


.suc{
  position: absolute;
  right: 0 ;
  transition:.5s;
}

.heartbeat {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-1-13 21:56:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.bounce {
  -webkit-animation: bounce-in-top 1.1s both;
  animation: bounce-in-top 1.1s both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-1-13 21:59:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-in-top
 * ----------------------------------------
 */
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}


.kenburns-top {
	-webkit-animation: kenburns-top 5s ease-out both;
	        animation: kenburns-top 5s ease-out both;
}


/* ----------------------------------------------
 * Generated by Animista on 2024-1-14 18:53:14
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation kenburns-top
 * ----------------------------------------
 */
 @-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}

</style>
