<template>
  <div id="app">
    <h2>{{ username }}'s VUE chat</h2>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="text" placeholder="Type a message..." />
      <button>Send</button>
    </form>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.createdAt.getHours() }}:{{ message.createdAt.getMinutes() }}
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["reactiveMap"],
  data() {
    return {
      username: null,
      messages: [],
      text: "",
      id: 1,
    };
  },
  mounted() {
    this.reactiveMap?.get("username").listen((username) => {
      this.username = username;
    });
  },
  methods: {
    onSubmit() {
      if (this.text.length > 0) {
        const newMessage = {
          id: this.id,
          author: this.name,
          text: this.text,
          createdAt: new Date(),
        };
        this.messages.push(newMessage);
        this.text = "";
        this.id = this.id + 1;
      }
    },
  },
};
</script>
