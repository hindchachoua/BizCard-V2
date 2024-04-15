<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-md-6 mx-auto">
                <validation-errors :errors="store.errors"></validation-errors>
                <div class="card">
                    <div class="card-header bg-white">
                    <h5 class="text-center mt-2">Login</h5>

                    </div>
                    <div class="card-body">
                    <form @submit.prevent="loginUser">
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
        email: '',
        password: '',
    },
})

const loginUser = async () => {
    store.clearErrors();
    data.loading = true;

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', data.user);
        data.loading = false;

        if (response.status === 200) {
            // Successful login
            store.setCurrentToken(response.data.token);
            store.setCurrentUser(response.data.user);
            toast.success(response.data.message, {
                timeout: 3000
            });
            router.push({ name: 'home' });
        } else {
            // Handle errors
            if (response.data.error) {
                toast.error(response.data.error, {
                    timeout: 3000
                });
            } else if (response.data.errors) {
                // Display validation errors if present
                store.setErrors(response.data.errors);
            }
        }
    } catch (error) {
        data.loading = false;

        // Handle different error scenarios
        if (error?.response?.status === 422) {
            store.setErrors(error.response.data.errors);
        } else if (error?.response?.status === 401) {
            // Invalid credentials
            toast.error('Invalid credentials. Please check your email and password.', {
                timeout: 3000
            });
        } else {
            // General error handling
            console.error(error);
            toast.error('An error occurred while logging in. Please try again.', {
                timeout: 3000
            });
        }
    }
};


</script>

<style>
</style>