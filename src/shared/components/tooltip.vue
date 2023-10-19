<template>
  <button @click="handleClick">
      <div class="circle">
        <div class="question-mark">?</div>
      </div>
    </button>
  <a11y-modal :show-modal="ShowModal">
    <template v-slot:modal-text>
      <div>
        <h2>{{ ModalBody }}</h2>
        <button @click="closeModal">Close</button>
      </div>
    </template>
  </a11y-modal>
</template>

<script>
import data from "@/data.json"; 
import a11yModal from "../../shared/components/a11y-modal.vue";

export default {
  components: {
    a11yModal,
  },
  props: {
    pageId: {
      type: String,
      required: true,
    },
   
  },
  data() {
    return {
      ShowModal: false,
      ModalBody: "",
    };
  },
  computed: {
   
  },
  methods: {
    handleClick() {
      const pageData = data[this.pageId];
      if (pageData) {
        this.ModalBody = pageData.content;
        this.ShowModal = true;
      } else {
        this.ModalBody = `<h3>Data not found for ${this.pageId}</h3>`;
        this.ShowModal = true;
      }
    },
    closeModal() {
      this.ShowModal = false;
    },
  },
};
</script>

<style>

button{
  border: none;
}
.question-mark {
  font-size: 12px;
}
.circle {
  width: 13px; /* Adjust the size as needed */
  height: 13px;
  background-color: transparent; /* Transparent background for hollow circle */
  border: 2px solid #007bff; /* Blue border */
  border-radius: 50%; /* Makes it a circle */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #007bff; /* Blue text color */
  font-size: 24px; /* Adjust the font size as needed */
}

</style>