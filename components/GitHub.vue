<template>
    <section class="github">
        <div class="container">
            <h1>GITHUB REPOSITORIES</h1>

            <div class="row spacer">
                <div class="col-md-4 spacer" v-for="repo in repositories" :key="repo.full_name">
                    <div class="card repo-card">
                        <div class="background-block">
                            <img 
                                src="~/assets/images/github.jpg"
                                :alt="repo.full_name" 
                                class="background"
                            />
                        </div>
                        <div class="profile-thumb-block">
                            <img 
                                :src="repo.avatar" 
                                :alt="repo.full_name" 
                                class="profile"
                            />
                        </div>
                        <div class="card-content">
                            <h2>
                                <small>
                                    <a 
                                        :href="`https://github.com/anilozmen/${repo.full_name}`" 
                                        target="_blank"
                                    >
                                        {{ repo.full_name }}
                                    </a>
                                </small>
                            </h2>
                            <div class="icon-block">
                                <GitHubButton
                                    :type="'fork'"
                                    :repository="repo.full_name"
                                    :href="`https://github.com/anilozmen/${repo.full_name}`" 
                                    data-icon="octicon-repo-forked" 
                                    :count="repo.stargazers_count" 
                                    :aria-label="`Fork ${repo.full_name} on GitHub`"
                                >
                                </GitHubButton>
                                <GitHubButton
                                    :repository="repo.full_name"
                                    :href="`https://github.com/anilozmen/${repo.full_name}`" 
                                    data-icon="octicon-star" 
                                    :count="repo.stargazers_count" 
                                    :aria-label="`Star ${repo.full_name} on GitHub`"
                                >
                                </GitHubButton>
                                <GitHubButton
                                :type="'watch'"
                                    :repository="repo.full_name"
                                    :href="`https://github.com/anilozmen/${repo.full_name}/subscription`" 
                                    data-icon="octicon-eye" 
                                    :aria-label="`Watch ${repo.full_name} on GitHub`"
                                >
                                </GitHubButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    computed: {
        repositories() {
            return this.$store.state.repositories;
        },
    }
}
</script>
