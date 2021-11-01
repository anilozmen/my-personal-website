<template>
  <section class="about">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1>Hi!</h1>
					<p>My name is Anıl Özmen. I’m {{ age }} years old and I’m a Developer at <a :href="company.url" target="_blank">{{ company.name }}</a>. </p>
					<p>I live in Izmir, Turkey. I love to work on Web Projects. I like meeting new folks and working on different projects. I like learning and sharing new information and software languages. I constantly research, and develop myself.</p>
					<p> Mostly, I am developing applications using the PHP language's <a href="https://laravel.com/">Laravel Framework</a>. Check out my <a :href="'/' + cv">CV</a> for more information about me!</p>
				</div>
				<div class="col-md-4 d-none d-sm-block d-sm-none d-md-block">
					<div class="my-image">
						<img 
                            :src="require(`~/assets/images/${image}`)" 
                            class="img-fluid"
                        >
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
    computed: {
        age() {
            return this.$store.state.age;
        },
        image() {
            return this.$store.state.my_image;
        },
        company() {
            return this.$store.state.company;
        },
        cv() {
            return this.$store.state.cv;
        }
        
    }    
}
</script>
