export const state = () => ({
    links: [
        {
            icon: ['fab', 'facebook-f'],
            url: 'https://www.facebook.com/anilozmen35',
            sort: 0,
        },
        {
            icon: ['fab', 'twitter'],
            url: 'https://twitter.com/Anilozmenn',
            sort: 1,
        },
        {
            icon: ['fab', 'instagram'],
            url: 'https://www.instagram.com/anilozmen/',
            sort: 2,
        },
        {
            icon: ['fab', 'github'],
            url: 'https://github.com/anilozmen',
            sort: 3,
        },
        {
            icon: ['fab', 'gitlab'],
            url: 'https://gitlab.com/anilozmen',
            sort: 4,
        },
        {
            icon: ['fab', 'linkedin-in'],
            url: 'https://www.linkedin.com/in/anil-ozmen/',
            sort: 5,
        },
        {
            icon: ['fab', 'stack-overflow'],
            url: 'https://stackoverflow.com/users/9110017/anıl-Özmen',
            sort: 6,
        },
        {
            icon: ['fab', 'medium-m'],
            url: 'https://medium.com/@anilozmen',
            sort: 7,
        },
    ],
    mobile_logo: 'me-mobile.png',
    my_image: 'me.jpg',
    cv: 'anil-ozmen.pdf',
    current_year: new Date().getFullYear(),
    age: new Date().getFullYear() - 1996,
    company: {
        name: 'Optimum7',
        url: 'https://www.optimum7.com/'
    },
    skills: [
      {
        'name': 'PHP',
        'image_url': 'https://www.php.net/images/logos/php-logo.svg'
      },
      {
        'name': 'Laravel',
        'image_url': 'https://laravel.com/img/logomark.min.svg'
      },
      {
        'name': 'Vue JS',
        'image_url': 'https://vuejs.org/images/logo.png'
      },
      {
        'name': 'Bootstrap',
        'image_url': 'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
      },
      {
        'name' : 'Redis',
        'image_url': require(`~/assets/images/redis.png`)
      },
      {
        'name': 'MySQL',
        'image_url': 'https://labs.mysql.com/common/logos/mysql-logo.svg?v2'
      },
      {
        'name': 'Git',
        'image_url': 'https://git-scm.com/images/logo@2x.png'
      },

    ],
    repositories: [],
    email: 'me@anilozmen.com'
});

export const getters = {
    sortedLinks: state => {
        if (!state.links.length) return [];
        let cloneItems = state.links.slice();
       return cloneItems.sort((a, b) => a.sort - b.sort);
      }
};

export const mutations = {
    updateRepositories: (state, data) => {
        state.repositories = data;
    }
}

export const actions = {
    async getRepositories(state) { 
        if (state.state.repositories.length) return;
        
      try {
        await this.$axios.$get('github/repos')
          .then(response => response)
          .then(data => {
              state.commit("updateRepositories", data.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };