<template>
    <div>
        <h1>Ticket de comida </h1>
        <h3>{{peridos_especial}}</h3>
        <h3>{{peridos_normal}}</h3>
         <b-container v-for="(item,index) in producto" v-bind:key="index" style="margin:0px">

            <b-row>
                <b-col>{{item.cantidad}}</b-col>
                <b-col>{{item.comida}}</b-col>
                <b-col>{{item.tipo}}</b-col>
                <b-col>{{item.precio}}</b-col>
            </b-row>
            
        
        </b-container>
        <h2>total a pagar es de: {{pago}}</h2>
    </div>
</template>

<script>
import Comida from '../assets/comida.json'

export default{
    name:'ticker_comida',
    data(){
        return{
            normal:this.$route.query.normal,
            especial:this.$route.query.especial,
            producto:[],
            peridos_normal:"",
            peridos_especial:"",
            pago:""

        }
    },
    created(){
        
        let lista = [" "]

        
        if (typeof(this.normal) == String){
            lista.push(this.normal)
        }else{
            lista = this.normal
        }
        
        var lista_pedidos = []
        
        if (lista.length > 0){
            for(let i = 0; i < lista.length;i++){ 
                var a = lista[i]
                var b = a.split('-')
                lista_pedidos.push(b) 
            }
        }
        

        var total_pago_normal = 0
        for(let i= 0; i < lista_pedidos.length; i ++){
            var comida = Comida[lista_pedidos[i][0]].nombrecomida
            var tipo = "Normal"
            var precio = Comida[lista_pedidos[i][0]].Normal
            var cantidad = lista_pedidos[i][1]
            total_pago_normal = total_pago_normal + (parseFloat(precio)*parseFloat(cantidad))
            this.producto.push(
                {"cantidad":cantidad,
                "comida":comida,
                "tipo":tipo,
                "precio":precio})
        }

        lista = [" "]
        if (typeof(this.especial) == String){
            lista.push(this.especial)
        }else{
            lista = this.especial
        }
        lista_pedidos = []
        if (lista.length > 0){
            for(let i = 0; i < lista.length;i++){ 
                var a = lista[i]
                var b = a.split('-')
                lista_pedidos.push(b) 
            }
        }
        var total_pago_especial = 0
        for(let i= 0; i < lista_pedidos.length; i ++){
            var comida = Comida[lista_pedidos[i][0]].nombrecomida
            var tipo = "especial"
            var precio = Comida[lista_pedidos[i][0]].Especial
            var cantidad = lista_pedidos[i][1]
            total_pago_especial = total_pago_especial + (parseFloat(precio)*parseFloat(cantidad))
            this.producto.push(
                {"cantidad":cantidad,
                "comida":comida,
                "tipo":tipo,
                "precio":precio})
        }
        console.log(total_pago_normal + total_pago_especial, total_pago_normal , total_pago_especial)
        this.pago = total_pago_normal + total_pago_especial
        //this.producto.push({"cantidad":0,"comida":"hot dog","tipo":"normal","precio":100})
        //this.producto.push({"cantidad":1,"comida":"hot dog","tipo":"normal","precio":100})


    }

}
</script>
