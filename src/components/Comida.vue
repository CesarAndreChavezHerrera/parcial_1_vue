<template>
    <div>
        
            
       <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col-sm-6" v-for="(item,index) in items" v-bind:key="index">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal" ><b>{{item.nombrecomida}}</b></h4>
                        </div>
                        <div class="card-body">
                            <img height="300" width="275" :src="item.foto" alt="">
                            <br>
                            <p class="card-text">
                                
                                {{item.descripcion}}
                                <div class="from-group row">
                                    <div class="col-xs-2">
                                        <h2><b>Normal </b>${{item.Normal}}</h2>
                                        <h2><b>Especial </b>${{item.Especial}}</h2>
                                    </div>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li><input type="number"   v-model="cantidad_pedido[index]"/></li>
                                    </ul>
                                       
                                    <button class="btn btn-primary" type="button" style="background:blue" v-on:click="comprar_normal(index)">Normal</button>
                                    
                                    <button class="btn btn-primary" type="button" style="background:blue" v-on:click="comprar_especial(index)" >Especial</button>
                                    
                                </div>
                            
                        </div>   
                    </div>   
                </div>
          </div> 
         <br>
<button class="btn btn-primary" type="button" style="background:blue" v-on:click="imprimit_ticket">Imprimir Ticket</button>
    </div>     
            
            
</template>

<script>
import Comida from '../assets/comida.json'

export default {
    data(){
        return{
            items:Comida,
            lista_compra_normal:[],
            lista_compra_especial:[],
            cantidad_pedido:[0,0,0,0,0,0]
        }
    },
    methods:{
        
        comprar_normal(index){
            var comprar = ""+index+"-"+Math.abs(this.cantidad_pedido[index])
            this.lista_compra_normal.push(comprar)
            alert("se a añadido a su carrito de compra")
        },
        comprar_especial(index){
            var comprar = ""+index+"-"+Math.abs(this.cantidad_pedido[index])
            this.lista_compra_especial.push(comprar)
            alert("se a añadido a su carrito de compra")
            
        },
        imprimit_ticket(){
            this.$router.push({path:'TicketComida',query:{
                especial:this.lista_compra_especial,
                normal:this.lista_compra_normal
                }})
        }

    }

}
</script>


