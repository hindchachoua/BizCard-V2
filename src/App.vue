<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView></RouterView>
  <header>
    <nav class=" navbar-light bg-light">
        <div class="container">

          <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink class="nav-link active " aria-current="page" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About Us</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Cards">haja</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Cards">Login</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Cards">Sign Up</RouterLink>
      </li>
    </ul>      
    </div>
  </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
<!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink> class="navbar-brand" to="#">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink> class="nav-link active" aria-current="page" to="#">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink> class="nav-link" to="#">Link</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink> class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </RouterLink>
          <ul class="dropdown-menu">
            <li><RouterLink> class="dropdown-item" to="#">Action</RouterLink></li>
            <li><RouterLink> class="dropdown-item" to="#">Another action</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink> class="dropdown-item" to="#">Something else here</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item">
          <RouterLink> class="nav-link disabled" aria-disabled="true">Disabled</RouterLink>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> -->