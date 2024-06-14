<template>
  <div class="row mt-5 justify-content-center align-items-center">
    <div class="col-12 col-lg-8 mt-5">
      <div
        class="card shadow bg-body-tertiary rounded"
        v-if="!authenticationStore.isAuthenticated"
      >
        <form @submit.prevent="authenticationStore.login(email, password)">
          <div class="card-header">
            <h2 class="text-center">Login</h2>
          </div>
          <div class="card-body text-dark">
            <div class="col-12 mb-3">
              <label class="form-label" for="email"
                >Email: <span class="text-danger">*</span></label
              >
              <input
                v-model="email"
                class="form-control"
                name="email"
                placeholder="Enter Your Email"
                type="email"
              />
            </div>
            <div class="col-12 mb-3">
              <label class="form-label" for="password"
                >Password: <span class="text-danger">*</span></label
              >
              <input
                v-model="password"
                class="form-control"
                name="password"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <button id="submitBtn" class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="card shadow bg-body-tertiary rounded" v-else>
        <div class="card-header">
          <h2 class="text-center">Profile</h2>
        </div>
        <div class="card-body text-dark">
          <p>Welcome {{ authenticationStore.user.name }}</p>
          <p>Track : {{ authenticationStore.user.track }}</p>
          <p>Email: {{ authenticationStore.user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthenticationStore } from "@/stores/auth";

export default {
  name: "LoginComponent",
  data: () => ({
    authenticationStore: useAuthenticationStore(),
    email: "",
    password: "",
  }),
};
</script>

<style scoped></style>
