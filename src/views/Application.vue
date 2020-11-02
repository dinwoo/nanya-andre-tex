<template lang="pug">
  #application
    h1 application
    p {{$route.params.material}}
    p {{ $t(`${$route.name}.${$route.params.material}.title`) }}
    .test(
      v-for="(item,index) in $t(`${$route.name}.${$route.params.material}.content`)" :key="index"
    )
      p {{item.name}}
      img(:src="compileFilePath(`${$route.params.material}/${item.link}`)")
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
