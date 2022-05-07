<template>
  <Header title="eResources" />

  <Container>
    <div class="text-center flex flex-col items-center">
      <h2 class="mb-3">Online eResources</h2>
      <p class="max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores nihil
        cupiditate maxime, at sunt.
      </p>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <div class="h-36 w-full bg-blue-500"></div>
        <h3 class="text-lg mb-1">{{ item.title }}</h3>
        <p class="text-sm">
          {{ item.description }}
        </p>
      </div>
    </div>
  </Container>
  <Container class="bg-accent-lightest"> </Container>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const items = [
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
  {
    title: "Read or Listen with Libby",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
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
