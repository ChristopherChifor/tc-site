<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-8 gap-y-12 lg:grid-cols-2">
      <section :class="flip && `lg:order-1`" class="lg:py-12">
        <h2 :class="dark && 'text-white'">{{ title }}</h2>
        <p :class="dark && 'text-white'">
          <span v-html="date"></span>
        </p>
        <p :class="dark && 'text-white'">
          <span class="mt-12" v-html="description"></span>
        </p>
        <Button :class="button && `mt-8 btn-light rounded-lg`">Learn More</Button>
        <slot name="extra-content"></slot>
      </section>
      <section>
        <div
          class="split-img-wrapper w-full h-full rounded-2xl overflow-hidden"
        >
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Button from "../base/Button.vue";
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container, Button },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      default: "January 1, 2020",
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
