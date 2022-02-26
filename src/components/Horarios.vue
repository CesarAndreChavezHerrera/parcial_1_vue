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
                <b-button variant="danger" v-on:click="asiento('8am')" style="margin:5px">8 am</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('2am')" style="margin:5px">2 pm</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('10am')" style="margin:5px">10 pm</b-button>
                <br>
            </div>
            <br>
            <div>
                <h3> 3D </h3>
                <b-button variant="danger" v-on:click="asiento('8am')" style="margin:5px">8 am</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('2pm')" style="margin:5px">2 pm</b-button>
                <br>
                <b-button variant="danger" v-on:click="asiento('10pm')" style="margin:5px">10 pm</b-button>
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
            index:this.$route.query.sort
        }
    },
    methods:{
        asiento(hora){
            this.$router.push({path:'Asiento',query:{sort:this.index,hora}})
        }

    }
}
</script>
