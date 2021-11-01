<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <h1 class="text d-none d-sm-block">Anıl Özmen</h1>
                    <div class="mobile-logo d-block d-sm-none mx-auto d-block">
                        <img 
                            class="img-fluid"
                            src="~/assets/images/me-mobile.png"  
                            alt="Anıl Özmen"
                        />
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="social-media">
                        <a 
                          v-for="link in links"
                          :key="link.url" 
                          :href="link.url" 
                          target="_blank"
                        >
                            <font-awesome-icon :icon="link.icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    computed: {
        links() {
            return this.$store.getters.sortedLinks;
        },
    }
}
</script>
