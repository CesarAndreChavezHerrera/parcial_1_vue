<template>
  <div id="app" style="background:black">
    <br>
    <h1 style="color:white">Bienvenidos a Cine LOS BARBAROS</h1>
    <br>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav align='center'>

        <!--Inclusion aqui de la vista para ser mostrada en el Navbar-->
        
        <b-nav-item to="/cartelera">Cartelera</b-nav-item>
        <b-nav-item to="/Comida">Comida</b-nav-item>
        <b-nav-item to="/horarios">Comida</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
