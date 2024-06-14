import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore("authenticationStore", {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),

  actions: {
    async login(email, password) {
      try {
        let response = await fetch(
          `http://localhost:5000/students?email=${email}&password=${password}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        if (response.ok) {
          this.isAuthenticated = true;
          this.user = await response.json();
          console.log("Login successful:", this.user);
        } else {
          this.isAuthenticated = false; // Set isAuthenticated to false in case of login failure
          console.error("Login failed:", response.status, response.statusText);
        }
      } catch (error) {
        this.isAuthenticated = false; // Set isAuthenticated to false in case of login error
        console.error("Error during login:", error);
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.user = {};
    },
  },
});
