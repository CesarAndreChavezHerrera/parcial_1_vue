<template>
    <div>
        
            
       <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col-sm-6" v-for="(item,index) in items" v-bind:key="index">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal"><b>{{item.nombrecomida}}</b></h4>
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
                                        <li><input type="number" v-model.number="item.quantity"/></li>
                                    </ul>
                                       
                                    <button class="btn btn-primary" type="button" style="background:blue">Normal</button>
                                    
                                    <button class="btn btn-primary" type="button" style="background:blue">Especial</button>
                                    
                                </div>
                            
                        </div>   
                    </div>   
                </div>
          </div> 
         <br>
<button class="btn btn-primary" type="button" style="background:blue">Imprimir Ticket</button>
    </div>     
            
            
</template>

<script>
import Comida from '../assets/comida.json'

export default ({
    data(){
        return{
            items:Comida
        }
    }
})
</script>


