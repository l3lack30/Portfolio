<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Education from './views/Education.vue'
import Activity from './views/Activity.vue'
import Certificate from './views/Certificate.vue'
import Contact from './views/Contact.vue'
</script>

<template>
  <header>
    <nav class="t navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Activity">Activity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Certificate">Certificate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                My Project
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://l3lack30.github.io/lab2/">Profile</a></li>
                <li><a class="dropdown-item" href="https://l3lack30.github.io/lab-bootstrap/">Dashboard</a></li>
                <li><a class="dropdown-item" href="https://vue-from.netlify.app/">Form</a></li>
                <li><a class="dropdown-item" href="https://vueapihttp.netlify.app/">Api</a></li>
                <li><a class="dropdown-item" href="https://vuefirebasew.netlify.app/">Firebase</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <router-view v-slot="{ }">
    <component :is="HomeView " />
    <component :is="Education" />
    <component :is="Activity" />
    <component :is="Certificate" />
    <component :is="Contact" />
  </router-view>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-muted">@Sarayut Senarsa</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li><a href="https://twitter.com/l3lack215246603" target="_blank"><i class="bi bi-twitter m-1 text-dark"
              style="font-size: 25px;"></i></a></li>
        <li><a href="https://www.instagram.com/kxm_m.x/" target="_blank"><i class="bi bi-instagram m-1 text-dark"
              style="font-size: 25px;"></i></a></li>
        <li><a href="https://www.facebook.com/klm30r/" target="_blank"><i class="bi bi-facebook m-1 text-dark"
              style="font-size: 25px;"></i></a></li>
      </ul>
    </footer>
  </div>
</template>

<style>
.t {
  font-family: 'Kanit', sans-serif;
}</style>