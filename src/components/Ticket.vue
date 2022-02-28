<template>
   
   <div>
        <b-card class="text-center">
            <div class="bg-secondary text-light">
                <br>
                <h1>TICKET</h1>
                <h2><b>{{tipo}}</b></h2>
                <br>
                <h4>Sus asiento son: {{entradas}}</h4>
                <h4>Sus precio unitario: ${{precio_unitario}}</h4>
                <h4>Hora de la funcion: {{hora}}</h4>
                <br>
                <h2>Total a pagar: ${{precio_total}}</h2>
                <br>
                <p>Por favor tome le foto y muestreselo en caja</p>
                <br>

            <!--  This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
            <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
            gray <samp>&lt;div&gt;</samp>. -->
            </div>
        </b-card>
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

<style>
.color{
    color:black;
    text-size-adjust: 20px;
}

</style>