<template>
    <b-container>
    <b-row>
        <b-col style="background:white;margin:10px">
            <h1>{{titulo}}</h1>
            <img height="400" width="275" :src="foto" alt="">
            <h2>Descripcion</h2>
            <p>{{descripcion}}</p>
        </b-col>
        
        <b-col style="background:white;margin:10px">
            
            <h2>Horarios</h2>
            <div>
                <h3> 2D </h3>
                <b-button variant="danger" v-on:click="asiento('8am','2D')" style="margin:5px">8 am</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('2am','2D')" style="margin:5px">2 pm</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('10am','2D')" style="margin:5px">10 pm</b-button>
                <br>
            </div>
            <br>
            <div>
                <h3> 3D </h3>
                <b-button variant="danger" v-on:click="asiento('8am','3D')" style="margin:5px">8 am</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('2pm','3D')" style="margin:5px">2 pm</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('10pm','3D')" style="margin:5px">10 pm</b-button>
                <br>
            </div>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>

import peliculas from '../assets/peliculas.json'


export default{
    name:"horarios",
    data(){
        return{
            titulo:peliculas[this.$route.query.sort].nombrepelicula,
            foto:peliculas[this.$route.query.sort].foto,
            descripcion:peliculas[this.$route.query.sort].descripcion,
            index:this.$route.query.sort,
            precio:[peliculas[this.$route.query.sort].precio2d,peliculas[this.$route.query.sort].precio3d]
        }
    },
    methods:{
        asiento(hora,tipo){
            var precio = 0
            if(tipo==="3D"){
                precio = this.precio[1]    
            }else{
                precio = this.precio[0]
            }
            this.$router.push({path:'Asiento',query:{sort:this.index,hora,tipo,precio}})
        }

    }
}
</script>
