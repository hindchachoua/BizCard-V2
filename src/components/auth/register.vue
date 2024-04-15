<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-md-6 mx-auto">
                <validation-errors :errors="store.errors"></validation-errors>
                <div class="card">
                    <div class="card-header bg-white">
                    <h5 class="text-center mt-2">Register</h5>

                    </div>
                    <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                            <label for="name">Name*</label>
                            <input type="text" v-model="data.user.name"
                             class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address*</label>
                            <input type="email" v-model="data.user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password*</label>
                            <input type="password" v-model="data.user.password" class="form-control" id="password" placeholder="Password">
                        </div>
                        <Spinner v-if="data.loading" />
                        <button v-else type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import {userAuthStore} from "../../stores/userAuthStore.js";
import axios from "axios";
import { useToast } from "vue-toastification";
import router from "../../router";
import ValidationErrors from "../custom/ValidationError.vue"
import Spinner from "../layouts/Spinner.vue"
    const store = userAuthStore();
    const toast = useToast()

    const data = reactive({
    loading: false,
    user: {
        name: '',
        email: '',
        password: '',
    },
})

const registerUser = async () => {
    store.clearErrors();
    data.loading = true;

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', data.user);
        data.loading = false;

        toast.success(response.data.message, {
            timeout: 3000
        });

        router.push({ name: 'login' });
    } catch (error) {
        data.loading = false;

        if (error?.response?.status === 422) {
            store.setErrors(error.response.data.errors);
        }
        console.log(error);
    }
};

</script>

<style>
</style>