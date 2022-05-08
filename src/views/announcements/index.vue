<template>
  <Header
    title="Announcements"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div class="grid md:grid-cols-3 gap-12 p-20">
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
import Header from "@/components/base/Header";

const BASE_URL = "/teck-centennial-website/";
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
  },

  data() {
    return {
      announcements,
    };
  },
};
</script>
