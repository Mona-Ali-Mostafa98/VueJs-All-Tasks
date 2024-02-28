<script>
export default {
  name: "AddNewStudent",
};
</script>

<template>
  <!-- Button trigger modal -->
  <div class="col-12">
    <button
      class="btn btn-primary m-3 py-2 fs-3 text-center"
      data-bs-target="#studentModal"
      data-bs-toggle="modal"
      type="button"
    >
      Add Student
    </button>
  </div>
  <!-- Modal -->
  <div
    id="studentModal"
    aria-hidden="true"
    aria-labelledby="studentModalLabel"
    class="modal fade text-start"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="studentModalLabel" class="modal-title">Add Student</h5>
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
                v-model="student.name"
                :class="
                  student.name.length < 3
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                "
                placeholder="Enter name"
                type="text"
              />
              <div v-if="student.name.length < 3" class="invalid-feedback">
                please enter student name.....
              </div>
            </div>

            <div class="col-12 mb-3">
              <label class="form-label"
                >Track: <span class="text-danger">*</span></label
              >
              <div v-for="track in studentTrackS" class="form-check">
                <input
                  id="track"
                  v-model="student.track"
                  :value="track"
                  class="form-check-input me-2"
                  name="track"
                  required
                  type="radio"
                />
                <label class="form-check-label" for="track">{{ track }}</label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" data-bs-dismiss="modal" type="button">
            Reset
          </button>
          <button
            id="submitBtn"
            :disabled="student.name.length < 3 || !student.track"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            type="button"
            @click="addStudent"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
