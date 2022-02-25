<template>
  <div>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2000"
        controls
        indicators
        background="#ababab"
        img-width="512"
        img-height="200"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <!-- Text slides with image -->
        <b-carousel-slide
            img-src="http://img.aullidos.com/imagenes/varios/mortal-kombat-banner-new.jfif"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/2518.jpg">
            <!-- <h1>Hello world!</h1> -->
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/57947.jpg"></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://4.bp.blogspot.com/-XpkIxkpInLQ/UYYvjreLWmI/AAAAAAAAheQ/4o4mxctm9kA/s1600/ManofSteel_banner.jpg"></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://i.pinimg.com/originals/42/85/db/4285db4dc6286a169a47e9be9d04e42b.jpg"></b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/24274.jpg"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
            <template #img>
            <img
                class="d-block img-fluid w-100"
                img-width="512"
                img-height="200"
                src="https://i.pinimg.com/originals/4b/5f/18/4b5f182cfb2c5cce106a65f236c99103.png"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
        </b-carousel-slide> -->
        </b-carousel>

        <!-- <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
        </p> -->
        <br>
        <br>
        <br>

          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col-sm-6" v-for="(item,index) in itemsp" v-bind:key="index">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal"><b>{{item.nombrepelicula}}</b></h4>
                        </div>
                        <div class="card-body">
                            <img src="" alt="">
                            <p class="card-text">
                                {{item.descripcion}}
                                <div class="from-group row">
                                    <div class="col-xs-2">
                                        <h2><b>2D </b>${{item.precio2d}}</h2>
                                        <h2><b>3D </b>${{item.precio3d}}</h2>
                                    </div>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li><input type="number" v-model.number="item.quantity"/></li>
                                    </ul>
                                       
                                    
                                    <a class="btn btn-primary" style="background:red" href="/horarios">Ver disponibilidad de horarios</a>
                                </div>
                            
                        </div>   
                    </div>   
                </div>
          </div> 
         <br>

    </div>

    
    
</template>



<script>

import peliculas from '../assets/peliculas.json'


  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        itemsp:peliculas
      }
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }, 
    }
  }
</script>