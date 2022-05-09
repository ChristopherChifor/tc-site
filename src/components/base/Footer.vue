<template>
  <footer class="bg-accent text-white" aria-labelledby="footer-heading">
    <div class="todo">MAKE ALL TEXT WHITE and figure out the bottom color</div>
    <h2 class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-4 gap-24">
        <div>
          <h3 class="mb-3 footer-heading text-white">Hours Of Operation</h3>
          <div class="space-y-1">
            <div>
              <p class="text-white"><b>Sunday:</b> Closed</p>
              <p class="text-white"><b>Monday:</b> Closed</p>
              <p class="text-white"><b>Tuesday:</b> 9:00am - 6:00pm</p>
              <p class="text-white"><b>Wednesday:</b> 9:00am - 7:00pm</p>
              <p class="text-white"><b>Thursday:</b> 9:00am - 6:00pm</p>
              <p class="text-white"><b>Friday:</b> 9:00am - 6:00pm</p>
              <p class="text-white"><b>Saturday:</b> 9:00am - 2:00pm</p>
            </div>
            <!-- <router-link
              v-for="route in navigation"
              :key="route.label"
              class="
                block
                with-underline
                w-max
                transition
                hover:text-accent
                capitalize
              "
              :to="route.path"
              >{{ route.label }}</router-link
            > -->
          </div>
        </div>
        <div class="grid max-h-5">
          <div class="todo">
            figure out why grid doesnt work/ is this implementation okay?
          </div>
          <h3 class="footer-heading">Quick Links</h3>
          <div class="space-y-1">
            <a href="#">Announcements</a> <br />
            <a href="#">Online Catalouge</a> <br />
            <a href="#">eResources</a> <br />
            <a href="#">Library Card</a> <br />
            <a href="#">Donations</a> <br />
          </div>
        </div>
        <div class="text-white">
          <h3 class="mb-3 footer-heading text-white">Contact Us</h3>
          <div class="space-y-1">
            <p>Teck Centennial Public Library</p>
            <p>10 Kirkland St E</p>
            <p>Kirkland Lake, ON. P2N 1P1</p>
            <a href="#">library@tkl.ca</a> <br />
            <a href="#">705-567-7966</a>
            <p>705-567-7966</p>
            <!-- <router-link
              v-for="route in navigation"
              :key="route.label"
              class="
                block
                with-underline
                w-max
                transition
                hover:text-accent
                capitalize
              "
              :to="route.path"
              >{{ route.label }}</router-link
            > -->
          </div>
        </div>
        <div>
          <h3 class="mb-3 footer-heading">Social Media</h3>
          <div class="grid grid-row-1 grid-flow-col">
            <a href="#">
              <img src="/icons/facebook.svg" alt="" />
            </a>
            <a href="#"> <img src="/icons/instagram.svg" alt="" /> </a>
            <a href="#">
              <img src="/icons/twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          mt-8
          pt-8
          border-t border-gray-200
          md:flex md:items-center md:justify-between
          bg-accent-dark
          w-full
        "
      >
        <p class="text-base text-white">
          Teck Centennial Public Library &copy; 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
