<template>
  <Header
    title="Sponsors"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <h2 class="text-center font-bold -mt-5">A Shoutout To Our 2022 Sponsors</h2>
    <p class="text-center px-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      egestas nunc ac volutpat efficitur. Integer scelerisque ipsum eros, sit
      amet auctor libero euismod at. Fusce facilisis eleifend laoreet. Cras
      imperdiet, purus eu lacinia pulvinar, velit purus vulputate eros, nec
      auctor mauris nunc at dolor. Quisque tristique purus in sem egestas
      rutrum. Donec commodo ipsum pulvinar turpis semper auctor. Curabitur sed.
    </p>
    <div class="flex space-x-10 mt-8">
      <div class="text-xl flex flex-col w-full">
        <div v-for="name in Sponsors" :key="name" class="flex">
          <div class="flex">
            <img src="@/assets/icons/star.svg" alt="" class="w-4 h-4" />
            <h3 class="text-sm text-center ml-2 text-accent">{{ name }}</h3>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div v-for="name in Sponsors" :key="name" class="flex">
          <div class="flex">
            <img src="@/assets/icons/star.svg" alt="" class="w-4 h-4" />
            <h3 class="text-sm text-center ml-2 text-accent">{{ name }}</h3>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div v-for="name in Sponsors" :key="name" class="flex">
          <div class="flex">
            <img src="@/assets/icons/star.svg" alt="" class="w-4 h-4" />
            <h3 class="text-sm text-center ml-2 text-accent">{{ name }}</h3>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div v-for="name in Sponsors" :key="name" class="flex">
          <div class="flex">
            <img src="@/assets/icons/star.svg" alt="" class="w-4 h-4" />
            <h3 class="text-sm text-center ml-2 text-accent">{{ name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const Sponsors = [
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
  "Sponsor Name",
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      Sponsors,
    };
  },
};
</script>
