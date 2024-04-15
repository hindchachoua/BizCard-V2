import { defineStore } from "pinia";

export const userAuthStore = defineStore('auth', {
    state: () => {
        // Get the stored data from localStorage
        const currentTokenData = localStorage.getItem('currentToken');
        // Directly assign the token as a string
        const currentToken = currentTokenData || '';
    
        // Return the state object
        return {
            user: null,
            currentToken: currentToken,
            errors: null
        };
    },
    actions: {
        
        setCurrentUser(user) {
            this.user = user;
        },
        setCurrentToken(token) {
            localStorage.setItem('currentToken', token);
            this.currentToken = token;
        },
        setErrors(errors) {
            this.errors = errors;
        },
        clearStoreData() {
            localStorage.removeItem('currentToken');
            this.currentToken = '';
            this.user = null;
        },
        clearErrors() {
            this.errors = null;
        }
    }
});
