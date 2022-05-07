<template>
  <Header
    title="Library Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />
  <Container>
    <div>
      <h2 class="mb-6">Get a Library Card</h2>
      <h3 class="mb-2 text-2xl">Who Can Get A Library Card?</h3>
      <ArrowList :items="content" class="mb-6" />
      <h3 class="mb-2 text-2xl">How Much Does It Cost To Obtain A Library Card?</h3>
      <ArrowList :items="[content[0], content[1]]" class="mb-6" />
      <h3 class="mb-2 text-2xl">How Do I Obtain A Library Card?</h3>
      <ArrowList
        :items="[content[0], content[1], content[0], content[1]]"
        class="mb-6"
      />
      <Table> </Table>
      <h3 class="mb-2 text-2xl">Visitor Cards</h3>
      <ArrowList :items="[content[0], content[1]]" class="mb-6" />
      <h3 class="mb-2 text-2xl">Online Library Card</h3>
    </div>
  </Container>
</template>

<script>
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];

export default {
  components: {
    Header,
    Container,
    ArrowList,
  },
  data() {
    return {
      content,
    };
  },
};
</script>
