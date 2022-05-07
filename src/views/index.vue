<template>
  <Header title="home" />

  <Container class="bg-accent-lightest">
    <div class="grid md:grid-cols-3 gap-12">
      <div v-for="item in items" :key="item.title" class="flex flex-col items-center">
        <img :src="item.img" alt="" class="mb-6 w-24" />
        <h3>{{ item.title }}</h3>
        <p class="text-center">{{ item.description }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Announcements</h2>
    </Container>

</template>

<script>
import Container from "../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const BASE_URL = "/teck-centennial-website/";
const items = [
  {
    title: "Library Card",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi ab quaerat optio corrupti non placeat incidunt deserunt illum, autem, ipsum officiis labore?",
    img: BASE_URL + "card.svg",
  },
  {
    title: "Library Card",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi ab quaerat optio corrupti non placeat incidunt deserunt illum, autem, ipsum officiis labore?",
    img: BASE_URL + "card.svg",
  },
  {
    title: "Library Card",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi ab quaerat optio corrupti non placeat incidunt deserunt illum, autem, ipsum officiis labore?",
    img: BASE_URL + "card.svg",
  },
];

export default {
  components: {
    Header,
    Container,
  },
  data() {
    return {
      items,
    };
  },
};
</script>
