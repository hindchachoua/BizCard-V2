import { defineStore } from "pinia"
export const userAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        currentToken: JSON.parse(localStorage.getItem('currentToken'))|| '',
        errors: null
    }),
    actions: {
        seCurrentUser(user) {
            this.user = user
        },
        setCurrentToken(token) {
            this.currentToken = token
        },
        setErrors(errors) {
            this.errors = errors
        },
        clearStoreData() {
            localStorage.removeItem('currentToken')
            this.currentToken = ''
            this.user = null
        },
        clearErrors() {
            this.errors = null
        }
    }
})