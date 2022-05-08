<template>
  <Header title='about/staff' />
  
  <Container>
    <h2 class="text-center font-bold">Staff Members</h2>
    <div class="flex flex-wrap justify-evenly">
      <div
        v-for="name in staffNames"
        :key="name"
        class="flex flex-col items-center justify-center flex-shrink-0"
      >
        <img src="@/assets/images/staff-lady.png" alt="Staff member" class="w-16 h-16 mb-4 rounded-full object-cover" />
        <h3 class="text-xl w- text-center text-accent">{{ name }}</h3>
        <p class = "text-center -mt-6 ">Position title</p>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-lightest">
    <h2 class="text-center font-bold">Library Board Members</h2>
    <div class="flex flex-wrap justify-evenly">
      <div
        v-for="name in boardNames"
        :key="name"
        class="flex flex-col items-center justify-center flex-shrink-0"
      >
        <img src="@/assets/images/staff-lady.png" alt="Staff member" class="w-16 h-16 mb-4 rounded-full object-cover" />
        <h3 class="text-xl w- text-center text-accent">{{ name }}</h3>
        <p class = "text-center -mt-6 t">Position title</p>
      </div>
    </div>
  </Container>
  
</template>

<script>
import Container from '../../../components/layouts/Container.vue'
import Header from "@/components/base/Header";

const staffNames = [
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
  "Staff name",
];

const boardNames = [
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
  "Board Title",
]
    

export default {
  components: {
    Header, Container
  },
  data() {
    return {
      staffNames,
      boardNames
    };
  },
};
</script>
