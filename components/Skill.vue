<template>
  <section class="skills">
    <div class="container">
      <h1>SKILLS</h1>
      <div class="row spacer d-flex flex-wrap align-items-center">
        <div class="col-md-3 col-sm-6 spacer text-center" v-for="skill in skills" :key="skill.name">
          <img :src="skill.image_url" class="img-fluid" :alt="skill.name">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
    computed: {
        skills() {
          return this.$store.state.skills;
        },
    }
}
</script>