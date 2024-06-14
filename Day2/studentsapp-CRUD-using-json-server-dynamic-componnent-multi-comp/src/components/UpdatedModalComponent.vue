<script>
export default {
  name: "UpdatedModalComponent",
};
</script>

<template>
  <div
    id="updateStudentModal"
    aria-hidden="true"
    aria-labelledby="updateStudentModalLabel"
    class="modal fade text-start"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="updateStudentModalLabel" class="modal-title">
            Update Student
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <form class="col-12 mt-4">
            <div class="col-12 mb-3">
              <label class="form-label" for="Title"
                >Name: <span class="text-danger">*</span></label
              >
              <input
                id="name"
                v-model="updateStudent.name"
                :class="
                  updateStudent.name.length < 3
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                "
                placeholder="Enter name"
                type="text"
              />
              <div
                v-if="updateStudent.name.length < 3"
                class="invalid-feedback"
              >
                please enter updateStudent name.....
              </div>
            </div>

            <div class="col-12 mb-3">
              <label class="form-label"
                >Track: <span class="text-danger">*</span></label
              >
              <div v-for="track in studentTrackS" class="form-check">
                <input
                  id="track"
                  v-model="updateStudent.track"
                  :value="track"
                  class="form-check-input me-2"
                  name="track"
                  required
                  type="radio"
                />
                <label class="form-check-label" for="track">{{ track }}</label>
              </div>
            </div>
            <div class="col-12 mb-3">
              <label class="form-label" for="email"
                >Email: <span class="text-danger">*</span></label
              >
              <input
                id="email"
                type="email"
                v-model="updatedStudent.email"
                :class="
                  updatedStudent.email.length < 5
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                "
                placeholder="Enter email"
              />
              <div
                v-if="updatedStudent.email.length < 5"
                class="invalid-feedback"
              >
                please enter updatedStudent email.....
              </div>
            </div>

            <div class="col-12 mb-3">
              <label class="form-label" for="password"
                >Password: <span class="text-danger">*</span></label
              >
              <input
                id="password"
                v-model="updatedStudent.password"
                :class="
                  updatedStudent.password.length < 3
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                "
                placeholder="Enter password"
                type="text"
              />
              <div
                v-if="updatedStudent.password.length < 3"
                class="invalid-feedback"
              >
                please enter updatedStudent password.....
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" data-bs-dismiss="modal" type="button">
            Close
          </button>
          <button
            id="submitBtn"
            :disabled="updateStudent.name.length < 3 || !updateStudent.track"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            type="button"
            @click="saveUpdatedStudent"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
