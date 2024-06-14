<template>
  <div class="row justify-content-center align-items-center">
    <!-- Button trigger modal -->
    <div class="col-auto">
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
                  <label class="form-check-label" for="track">{{
                    track
                  }}</label>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label class="form-label" for="email"
                  >Email: <span class="text-danger">*</span></label
                >
                <input
                  id="email"
                  type="email"
                  v-model="student.email"
                  :class="
                    student.email.length < 5
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  "
                  placeholder="Enter email mona@gmail.com"
                />
                <div v-if="student.email.length < 5" class="invalid-feedback">
                  please enter student email at least 5.....
                </div>
              </div>

              <div class="col-12 mb-3">
                <label class="form-label" for="password"
                  >Password: <span class="text-danger">*</span></label
                >
                <input
                  id="password"
                  v-model="student.password"
                  :class="
                    student.password.length < 5
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  "
                  placeholder="Enter password mona@gmail.com"
                  type="text"
                />
                <div
                  v-if="student.password.length < 5"
                  class="invalid-feedback"
                >
                  please enter student password at least 5.....
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-warning"
              data-bs-dismiss="modal"
              type="button"
            >
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
  </div>

  <div>
    <table class="table table-bordered table-striped table-hover text-center">
      <thead>
        <tr class="text-center py-2 bg-light">
          <th colspan="5">
            <h4>Students</h4>
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">email</th>
          <th scope="col">Track</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.track }}</td>
          <td>
            <div class="row justify-content-evenly align-items-center">
              <button
                class="btn btn-success p-2 col-3"
                data-bs-target="#showStudentModal"
                data-bs-toggle="modal"
                type="button"
                @click="showStudent(student.id)"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
              <button
                class="btn btn-warning p-2 col-3"
                data-bs-target="#updatedStudentModal"
                data-bs-toggle="modal"
                type="button"
                @click="fillDataOfStudent(student.id)"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                class="btn btn-danger p-2 col-3"
                @click="deleteStudent(student.id)"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="text-center py-2 bg-light">
          <th colspan="5">
            <h4>Number Of Students = {{ students.length }}</h4>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- Modal for displaying student details -->
  <div
    id="showStudentModal"
    aria-hidden="true"
    aria-labelledby="showStudentModalLabel"
    class="modal fade text-start"
    role="dialog"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 id="showStudentModalLabel" class="modal-title">
            Student #{{ selectedStudent.id }} Details
          </h5>
          <button
            aria-label="Close"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body fs-3">
          <p>
            <strong class="text-primary">Name:</strong>
            {{ selectedStudent.name }}
          </p>
          <p>
            <strong class="text-primary">Track:</strong>
            {{ selectedStudent.track }}
          </p>
          <p>
            <strong class="text-primary">Email:</strong>
            {{ selectedStudent.email }}
          </p>
          <p>
            <strong class="text-primary">Password:</strong>
            {{ selectedStudent.email }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Update Student Modal -->
  <div
    id="updatedStudentModal"
    aria-hidden="true"
    aria-labelledby="updatedStudentModalLabel"
    class="modal fade text-start"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="updatedStudentModalLabel" class="modal-title">
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
                v-model="updatedStudent.name"
                :class="
                  updatedStudent.name.length < 3
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                "
                placeholder="Enter name"
                type="text"
              />
              <div
                v-if="updatedStudent.name.length < 3"
                class="invalid-feedback"
              >
                please enter updatedStudent name.....
              </div>
            </div>

            <div class="col-12 mb-3">
              <label class="form-label"
                >Track: <span class="text-danger">*</span></label
              >
              <div v-for="track in studentTrackS" class="form-check">
                <input
                  id="track"
                  v-model="updatedStudent.track"
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
            :disabled="updatedStudent.name.length < 3 || !updatedStudent.track"
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

<script>
export default {
  name: "BodyComponent",
  data() {
    return {
      students: [],
      student: {
        id: null,
        name: "",
        track: "",
        email: "",
        password: "",
      },
      studentTrackS: ["OS", "PD", "AI"],
      selectedStudent: {},
      updatedStudent: {
        id: "",
        name: "",
        track: "",
        email: "",
        password: "",
      },
    };
  },

  async created() {
    let allStudents = await fetch("http://localhost:5000/students");
    this.students = await allStudents.json();
  },

  methods: {
    async addStudent() {
      this.student.id = `${this.students.length + 1}`;
      const response = await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.student),
      });
      const newAddedStudent = await response.json();
      this.students.push(newAddedStudent);

      this.student = {
        id: null,
        name: "",
        track: "",
        email: "",
        password: "",
      };
    },

    async deleteStudent(studentId) {
      await fetch(`http://localhost:5000/students/${studentId}`, {
        method: "DELETE",
      });

      this.students = this.students.filter(
        (student) => student.id != studentId
      );
    },

    async showStudent(studentId) {
      let response = await fetch(
        `http://localhost:5000/students/${studentId}`,
        {
          method: "GET",
        }
      );
      this.selectedStudent = await response.json();
    },

    async fillDataOfStudent(studentId) {
      let response = await fetch(
        `http://localhost:5000/students/${studentId}`,
        {
          method: "GET",
        }
      );

      this.updatedStudent = await response.json();
      console.log(this.updatedStudent);
    },

    async saveUpdatedStudent() {
      console.log(this.updatedStudent.id);
      let response = await fetch(
        `http://localhost:5000/students/${this.updatedStudent.id}`,
        {
          method: "PUT", // or "PATCH" depending on your API design
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.updatedStudent),
        }
      );

      // Update local state if the request was successful
      const updatedStudent = await response.json();
      const index = this.students.findIndex(
        (student) => student.id === this.updatedStudent.id
      );

      if (index !== -1) {
        this.students[index] = updatedStudent;
      }

      this.updatedStudent = {
        id: "",
        name: "",
        track: "",
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style></style>
