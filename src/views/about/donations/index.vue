<template>
  <Header
    title="Donations"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <Container>
    <h2>What Do You Need To Know?</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro enim
      laborum nam velit blanditiis.
    </p>
    <ArrowList
      :items="[content[0], content[1], content[0], content[1]]"
      class="mb-6"
    />

    <h2>What Do We Accept?</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh egestas at
      nunc, sed. Justo venenatis, lorem enim at ut egestas:
    </p>
    <Container>
      <div class="flex flex-wrap justify-between md: gap-10">
        <div
          v-for="donation in donations"
          :key="donation"
          class="flex flex-col items-center justify-center flex-shrink-0"
        >
          <img
            src="@/assets/images/staff-lady.png"
            alt="Staff member"
            class="w-16 h-16 mb-4 rounded-full object-cover"
          />
          <h3 class="text-xl w- text-center text-accent">{{ donation }}</h3>
        </div>
      </div>
    </Container>
  </Container>
</template>

<script>
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
import { ArrowRightIcon } from "@heroicons/vue/solid";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];

const donations = ["Books", "DVDs", "CDs", "Magazines"];

export default {
  components: {
    Header,
    Container,
    ArrowList,
    ArrowRightIcon,
  },
  data() {
    return {
      content,
      donations,
    };
  },
};
</script>
