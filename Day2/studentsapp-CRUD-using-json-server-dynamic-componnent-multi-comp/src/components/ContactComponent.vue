<template>
  <h2 class="text-center py-2">Contact Us</h2>
  <div class="card p-5 shadow bg-body-tertiary rounded">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="subject" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" class="form-control" rows="2"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped></style>
