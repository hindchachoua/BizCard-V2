<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Vue & Laravel login</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-if="!store.user" class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"> <i class="bi bi-house"></i> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login"> <i class="bi bi-person-fill-up"></i> Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register"> <i class="bi bi-person-add"></i> Register</router-link>
        </li>
      </ul>

      <ul v-if="store.user" class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"> <i class="bi bi-house"></i> Home</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/Cards"> <i class="bi bi-card-list"></i> Cards</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profil"> <i class="bi bi-person-check-fill"></i> {{ store.user?.name || '' }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/#" @click="logoutUser"> <i class="bi bi-person-down"></i> Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { userAuthStore } from '@/stores/userAuthStore'
import {getConfig} from '../helpers/config.js'
import { useToast } from 'vue-toastification'
import router from '@/router'

const store = userAuthStore()
const toast = useToast()
const fetchCurrentlyLoggedInUser = async() => {
  try {
        const response = await axios.get('http://127.0.0.1:8000/api/user', getConfig(store.currentToken) )
              store.setCurrentUser(response.data.user)
             
    }catch (error) {
      if(error?.response?.status === 401) {
        store.clearStoredData()
      }
      console.log(error)
    }
}

const logoutUser = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/logout', null, getConfig(store.currentToken));
        store.clearStoredData();
        toast.success(response.data.message, {
            timeout: 3000
        });
        router.push('/login');
    } catch (error) {
        console.log(error);
    }
};


onMounted(() => {
  console.log(store.currentToken)
  if(store.currentToken)  fetchCurrentlyLoggedInUser()
})
</script>

<style>
</style>
