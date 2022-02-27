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
        
        let lista = [""]

        
    
        if (typeof(this.normal) == "string"){
            
            //console.log("test1")
            lista.push(this.normal)
            lista.shift()
        }else{
            //console.log("test",this.normal,typeof(this.normal))
            lista = this.normal
        }
        //lista.push(this.normal)
        var lista_pedidos = []
        
        //console.log("1",lista,typeof(lista),lista.length)


        if (typeof(lista) != "undefined"){
            
            
            
            for(let i = 0; i < lista.length;i++){ 
                
                var a = lista[i]
                
                var b = a.split('-')
                
                lista_pedidos.push(b)
                
            }
        }
        //console.log("2",lista_pedidos,lista_pedidos.length)
        

        
        var total_pago_normal = 0
        var total_pago_especial = 0
        for(let i= 0; i < lista_pedidos.length; i ++){
            //console.log("3",lista_pedidos[i][0],lista_pedidos[i])
 
            var comida = Comida[lista_pedidos[i][0]].nombrecomida
            //console.log(comida)

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
        //console.log("funcia ")
        lista = [""]
        lista_pedidos = []
        if (typeof(this.especial) == "string"){
            
            //console.log("test1")
            lista.push(this.especial)
            lista.shift()
        }else{
            //console.log("test",this.especial,typeof(this.especial))
            lista = this.especial
            
        }

        if (typeof(lista) != "undefined"){
               
            for(let i = 0; i < lista.length;i++){ 
                
                var a = lista[i]
                
                var b = a.split('-')
                
                lista_pedidos.push(b)
                
            }
        }

        for(let i= 0; i < lista_pedidos.length; i ++){
            //console.log("3",lista_pedidos[i][0],lista_pedidos[i])
 
            var comida = Comida[lista_pedidos[i][0]].nombrecomida
            //console.log(comida)

            var tipo = "Especial"
            var precio = Comida[lista_pedidos[i][0]].Especial
            var cantidad = lista_pedidos[i][1]
            total_pago_especial = total_pago_especial + (parseFloat(precio)*parseFloat(cantidad))
            this.producto.push(
                {"cantidad":cantidad,
                "comida":comida,
                "tipo":tipo,
                "precio":precio})
        }
        



        //console.log(total_pago_normal + total_pago_especial, total_pago_normal , total_pago_especial)
        this.pago = total_pago_normal + total_pago_especial
        //this.producto.push({"cantidad":0,"comida":"hot dog","tipo":"normal","precio":100})
        //this.producto.push({"cantidad":1,"comida":"hot dog","tipo":"normal","precio":100})


    }

}
</script>