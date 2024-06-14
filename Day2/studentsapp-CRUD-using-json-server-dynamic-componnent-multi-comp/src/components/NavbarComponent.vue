<template>
  <ul class="list-group py-auto text-center">
    <li
      class="list-group-item"
      :class="{ active: activeComponent === 'HomeComponent' }"
    >
      <a
        class="text-dark fs-4"
        href="#"
        @click.prevent="setTargetComponent('HomeComponent')"
        >Home</a
      >
    </li>
    <li
      class="list-group-item"
      :class="{ active: activeComponent === 'BodyComponent' }"
    >
      <a
        class="text-dark fs-4"
        href="#"
        @click.prevent="setTargetComponent('BodyComponent')"
        >Students</a
      >
    </li>
    <li
      class="list-group-item"
      :class="{ active: activeComponent === 'AboutComponent' }"
    >
      <a
        class="text-dark fs-4"
        href="#"
        @click.prevent="setTargetComponent('AboutComponent')"
        >About</a
      >
    </li>
    <li
      class="list-group-item"
      :class="{ active: activeComponent === 'ContactComponent' }"
    >
      <a
        class="text-dark fs-4"
        href="#"
        @click.prevent="setTargetComponent('ContactComponent')"
        >Contact
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["updateTargetComponent"],

  data() {
    return {
      activeComponent: "HomeComponent",
    };
  },

  methods: {
    setTargetComponent(componentName) {
      this.updateTargetComponent(componentName);
      this.activeComponent = componentName;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
