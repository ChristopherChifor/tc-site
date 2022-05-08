<template>
  <Header
    title="After School Program"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <Split
      title="Upcoming Program"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      date="April 7, 2022"
      flip
    >
      <img
        class="object-cover h-48 w-20"
        src="@/assets/images/woman-and-kid.png"
        alt="woman headphones"
      />
    </Split>

    <!-- Split -->
    <Split
      title="Upcoming Program"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl viverra feugiat elit sit lectus sed cras urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      date="April 7, 2022"
      flip
    >
      <img
        class="object-cover h-48 w-20"
        src="@/assets/images/woman-and-kid.png"
        alt="group reading"
      />
    </Split>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Split,
    Container,
  },
};
</script>
