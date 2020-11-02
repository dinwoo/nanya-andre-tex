<template lang="pug">
  #application
    h1 application
    p {{$route.params.material}}
    p {{ $t(`${$route.name}.${$route.params.material}.title`) }}
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
