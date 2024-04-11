<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Cards</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">{{ error[0] }}">
                    </li>
                </ul>
                <div class="mb-3">
                    <label for="title">Title</label>
                    <input type="text" v-model="model.card.title" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="description">Description</label>
                    <input type="text" v-model="model.card.description" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="phonenumber">Phone</label>
                    <input type="text" v-model="model.card.phonenumber" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="text" v-model="model.card.email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="website">Website</label>
                    <input type="text" v-model="model.card.website" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="address">Adress</label>
                    <input type="text" v-model="model.card.address" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveCard" class="btn btn-primary">Save</button>
                </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'cardCreate',
    data() {
        return {
            errorList: {},
            model: {
                card: {
                    title: '',
                    description: '',
                    phonenumber: '',
                    email: '',
                    website: '',
                    address: ''
                }

            }
        }
    },
    methods: {
        saveCard() {
    var $mythis = this;
    axios.post('http://127.0.0.1:8000/api/cards/add', this.model.card)
        .then(res => {
            console.log(res);
            alert(res.data.message);

            this.model.card = {
                title: '',
                description: '',
                phonenumber: '',
                email: '',
                website: '',
                address: ''
            };
        })
        .catch(function (error) {
            console.error("Error:", error);

            if (error.response) {
                console.log("Error response:", error.response);
                if (error.response.status == 422) {
                    $mythis.errorList = error.response.data.errors;
                }
            } else if (error.request) {
                console.error("Error request:", error.request);
            } else {
                console.error('Error', error.message);
            }
        });
}
 
    },
}
</script>