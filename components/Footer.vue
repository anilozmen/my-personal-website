<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="ln"></div>
        </div>
      </div>
      <div class="row spacer">
        <div class="col-md-4">
          <p class="copy">Copyright &copy; 2016-{{ year }} Anıl Özmen</p>
        </div>
        <div class="col-md-4">
          <h1>WHO AM I ?</h1>
          <p>My name is Anıl. I'm {{ age }} years old and I'm a Developer.</p>
          <a :href="`/${cv}`">DOWNLOAD RESUME</a>

        </div>

        <div class="col-md-4">
          <h1>WORK WITH ME</h1>
          <p>For work inquiries send me an email.</p>
          <div class="email">
            <a :href="`mailto:${email}`" class="footer-mail">{{ email }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    computed: {
        cv() {
          return this.$store.state.cv;
        },
        year() {
            return this.$store.state.current_year;
        },
        age() {
            return this.$store.state.age;
        },
        email() {
            return this.$store.state.email;
        }
    }
}
</script>