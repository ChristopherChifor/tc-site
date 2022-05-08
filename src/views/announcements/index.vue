<template>
  <Header
    title="Announcements"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div class="grid md:grid-cols-3 gap-12 p-20 w-full">
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
    <Container>
      <nav
        class="
          py-3
          flex
          items-center
          justify-between
          border-t border-gray-200
          mt-6
          w-full
        "
        aria-label="Pagination"
      >
        <div class="hidden sm:block">
          <p class="text-sm text-gray-700">
            Showing
            {{ " " }}
            <span class="font-medium">1</span>
            {{ " " }}
            to
            {{ " " }}
            <span class="font-medium">10</span>
            {{ " " }}
            of
            {{ " " }}
            <span class="font-medium">20</span>
            {{ " " }}
            results
          </p>
        </div>
        <div class="flex-1 flex justify-between sm:justify-end">
          <a
            href="#"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              btn-grey
            "
          >
            Previous
          </a>
          <a
            href="#"
            class="
              ml-3
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              btn-grey
            "
          >
            Next
          </a>
        </div>
      </nav>
    </Container>
  </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
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
    Container,
  },

  data() {
    return {
      announcements,
    };
  },
};
</script>
