<template>
    <div>
        <br>
        <h1 style="color:white">Escoga su asientos</h1>
        <br>
        <b-container>
            <b-row v-for="(x,index) in x" v-bind:key="index" style="margin:0px">
                <b-col v-for="(y,index) in y" v-bind:key="index">
                     <input class="form-check-input" type="checkbox" value="" v-on:click="llenar(x,y)">
                
                </b-col>
            </b-row>
            
        
        </b-container>
        <br>
        <b-button variant="danger" v-on:click="imprimir_ticket" style="margin:5px">Imprimir ticket</b-button>
        <br>
    </div>
</template>

<script>

export default {
    
    data(){
       return{
           tipo:this.$route.query.sort,
           hora:this.$route.query.hora,
           precio:this.$route.query.precio,

           x:[0,1,2,3,4,5,6,7,8,9],
           y:[0,1,2,3,4,5,6,7,8,9],
           asientos_ocupado:[]
       }
    },
    methods:{

        llenar(x,y){
           // console.log(this.tipo,this.hora)
            var entrada = ''+x+''+y
            var posision = this.asientos_ocupado.findIndex(dato => dato === entrada)
            if (posision == -1){
                this.asientos_ocupado.push(entrada)
            }else{
                this.asientos_ocupado.splice(posision,1)
            }               
        },
        imprimir_ticket(){
            if(this.asientos_ocupado.length > 0){
                
                this.$router.push({path:"/ticket",query:{entradas:this.asientos_ocupado,tipo:this.tipo,hora:this.hora,precio:this.precio}})
            }
        }
    }


}
</script>