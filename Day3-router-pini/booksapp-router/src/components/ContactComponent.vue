<template>
  <div class="row mt-5 justify-content-center align-items-center">
    <div class="col-12 col-lg-8 mt-5">
      <div class="card shadow bg-body-tertiary rounded">
        <div class="card-header">
          <h2 class="text-center">Contact Us</h2>
        </div>
        <div class="card-body">
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
            <button type="submit" class="btn btn-primary text-center">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped></style>
