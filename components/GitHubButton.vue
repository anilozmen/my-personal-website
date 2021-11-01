<template>
  <div class="star clearfix">
    <a :href="btnUrl" class="btn-icon" target="_blank">
      <template v-if="type === 'star'">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        <span>Star</span>
      </template>
      <template v-if="type === 'fork'">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <span>Fork</span>
      </template>
      <template v-if="type === 'watch'">
        <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
        <span>Watch</span>
      </template>
    </a>
    <a :href="textUrl" class="social-count" target="_blank" v-if="count !== undefined">
      <template>{{ count }}</template>
    </a>
  </div>
</template>

<script>

export default {
  name: 'GitHubButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'star',
      validator (value) {
        return ['star', 'fork', 'watch'].indexOf(value) !== -1
      }
    },
    repository: {
      type: String,
      required: true,
      validator (value) {
        return value.split('/').length === 2
      }
    },
    count: {
        type: Number,
        required: false
    }
  },
  computed: {
    textUrl () {
      if (!this.repository) {
        return null
      }
      return `https://github.com/${this.repository}`
    },
    btnUrl () {
      let endpoint = ''
      switch (this.type) {
        case 'fork':
          endpoint = '/fork'
          break
        case 'watch':
          endpoint = '/subscription'
          break
      }
      return this.textUrl ? `${this.textUrl}${endpoint}` : null
    }
  }
}
</script>

<style scoped>
  .clearfix {
    overflow: auto;
    _height: 1%;
  }
  .star {
    display: inline-block;
    box-sizing: border-box;
  }
  .star > a {
    float: left;
    padding: 3px 10px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline-width: 0;
    vertical-align: middle;
    user-select: none;
    white-space: nowrap;
    text-transform: none;
    border: 1px solid rgba(27,31,35,0.2);
    color: #24292e;
    -webkit-appearance: none;
  }
  .star .octicon {
    vertical-align: text-top;
  }
  .star .btn-icon {
    border-radius: 0.25em;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .star .btn-icon:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
  }
  .star a.social-count {
    background-color: #fff;
    border-left: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .star a.social-count:hover {
    color: #0366d6;
  }
</style>

