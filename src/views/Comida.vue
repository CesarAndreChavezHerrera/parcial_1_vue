<template>
  <div >
    <comida/>
  </div>
</template>

<script>
// @ is an alias to /src
import comida from '../components/Comida.vue'

export default {
  name: 'Comida',
  components: {
    comida

  }
}
</script>