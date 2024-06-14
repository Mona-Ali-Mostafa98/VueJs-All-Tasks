<template>
  <div class="container border-1">
    <div class="row justify-content-center align-items-center my-3">
      <div class="col-12 bg-info text-light">
        <HeaderComponent />
      </div>
    </div>

    <div class="row justify-content-around align-items-center">
      <div class="col-3">
        <NavbarComponent :updateTargetComponent="updateTab" />
      </div>

      <div class="col-8">
        <component :is="targetComponent" />
      </div>
    </div>

    <!--******************Footer component*********************-->
    <div class="row justify-content-center align-items-center m-4">
      <div class="col-12 bg-primary text-light">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import BodyComponent from "./components/BodyComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  },

  data() {
    return {
      targetComponent: "HomeComponent",
    };
  },

  methods: {
    updateTab(componentName) {
      this.targetComponent = componentName;
    },
  },
};
</script>

<style></style>
