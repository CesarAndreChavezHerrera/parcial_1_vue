<template>
    <div style="background:white">
        <h1>TICKET</h1>
        <h2>{{tipo}}</h2>
        <p>Sus asiento son: {{entradas}}</p>
        <p>Sus precio unitario: {{precio_unitario}}</p>
        <p>Hora de la funcion: {{hora}}</p>
        <p>Total a pagar: {{precio_total}}</p>
        <br>
        <p>Por favor tome le foto y muestreselo en caja</p>
        <b-button variant="danger" v-on:click="ir_comida" style="margin:5px">¿Quieres comprar comida?</b-button>
    </div>    
</template>

<script>
    
    export default{
        name:"ticket",
        data(){
            return{
                entradas:this.$route.query.entradas,
                hora:this.$route.query.hora,
                precio_unitario:this.$route.query.precio,
                precio_total:"",
                tipo:this.$route.query.tipo
                
            }
        },
        created(){
            if (this.tipo == 1){
                this.tipo = "3D"
            }else{
                this.tipo = "2D"
            }
            var entrada = this.entradas
            this.entradas = entrada.join()
            this.precio_total = entrada.length * parseFloat(this.precio_unitario)
        },
        methods:{
            ir_comida(){
                this.$router.push({path:"Comida"})       
            }
        }

    }

</script>