<template lang="">
  <keep-alive>
    <div class="inputs_wrap mb-8">
      <label>Full Name</label> <br />
      <input type="text" v-model="formData.name" />
      <br /><br />

      <label>About You</label> <br />
      <textarea
        placeholder="Write something about you..."
        class="w-full"
        v-model="formData.address"></textarea>
      <br /><br />

      <label>Gender</label> <br />
      <label
        ><input
          type="radio"
          class="mr-1"
          v-model="formData.gender"
          value="Male" />Male</label
      >
      <label
        ><input
          type="radio"
          class="mr-1"
          v-model="formData.gender"
          value="Female" />Female</label
      >
      <label
        ><input
          type="radio"
          class="mr-1"
          v-model="formData.gender"
          value="Others" />Others</label
      >
      <br /><br />

      <label>Language</label> <br />
      <select v-model="formData.langues">
        <option value="">--select one--</option>
        <option value="Bangla">Bangla</option>
        <option value="English">English</option>
      </select>
      <br /><br />

      <label>Skills</label> <br />
      <label
        ><input
          type="checkbox"
          class="mr-1"
          value="HTML"
          v-model="formData.skills" />HTML</label
      >
      <label
        ><input
          type="checkbox"
          class="mr-1"
          value="CSS"
          v-model="formData.skills" />CSS</label
      >
      <label
        ><input
          type="checkbox"
          class="mr-1"
          value="JavaScript"
          v-model="formData.skills" />JavaScript</label
      >
      <label
        ><input
          type="checkbox"
          class="mr-1"
          value="PHP"
          v-model="formData.skills" />PHP</label
      >
      <label
        ><input
          type="checkbox"
          class="mr-1"
          value="Vue js"
          v-model="formData.skills" />Vue js</label
      >
      <br /><br />
    </div>
  </keep-alive>

  <hr />
  <div class="outputs_wrap">
    <ul>
      <li v-for="(value, key) in formData" :key="key">
        <strong>{{ key }}</strong
        >: {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        address: "",
        gender: "",
        langues: "",
        skills: [],
      },
    };
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  margin-bottom: 8px;
  margin-right: 10px;
}
input,
textarea,
select,
option {
  padding: 5px 10px;
  border: 1px solid;
}
</style>
