<template>
  <!-- <Header title="Teck Centennial Public Library" /> -->
  <HeroImageOverlay>
    <h1>Teck Centennial Public Library</h1>
  </HeroImageOverlay>

  <Container class="bg-accent-lightest">
    <div class="grid md:grid-cols-3 gap-12">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center"
      >
        <img :src="item.img" alt="" class="mb-6 w-24" />
        <h3>{{ item.title }}</h3>
        <p class="text-center">{{ item.description }}</p>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Announcements</h2>
    <p class="mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie
      congue sit consectetur metus consectetur.
    </p>
    <div class="grid md:grid-cols-3 gap-12">
      <div
        v-for="announcement in announcements"
        :key="announcement.title"
        class="flex flex-col"
      >
        <img :src="announcement.img" alt="" class="mb-6 rounded-xl" />
        <h4>{{ announcement.title }}</h4>
        <p>{{ announcement.description }}</p>
        <p class="mt-2 font-bold text-black">{{ announcement.author }}</p>
        <p>{{ announcement.date }}</p>
      </div>
    </div>
  </Container>
</template>

<script>
import HeroImageOverlay from "../components/layouts/hero/HeroImageOverlay.vue";
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
    title: "Donations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi ab quaerat optio corrupti non placeat incidunt deserunt illum, autem, ipsum officiis labore?",
    img: BASE_URL + "icons/Donations.svg",
  },
  {
    title: "eResources",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi ab quaerat optio corrupti non placeat incidunt deserunt illum, autem, ipsum officiis labore?",
    img: "/icons/eResources.svg",
  },
];

const announcements = [
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: BASE_URL + "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: BASE_URL + "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
  {
    title: "New Library Announcement",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    img: "/images/woman-laptop.png",
    author: "Cindy Centennial",
    date: "Apr 7, 2022",
  },
];

export default {
  components: {
    Header,
    Container,
    HeroImageOverlay,
  },
  data() {
    return {
      items,
      announcements,
    };
  },
};
</script>
