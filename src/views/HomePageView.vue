<template>
  <div class="home-page">
    <div class="typewriter">
      <span ref="typewriterText"></span>
      
    </div>
    <div class="home-page-paragraph">
      Welcome to the Flash Sale Generator! This tool was designed to empower 
      users with complete control over creating and customizing flash sale banners.
        This generator ensures 
       flexibility and ease of use, helping you craft banners that perfectly align with your 
       brand and promotions.
    </div>
    <div class="home-page-img-container">
      <img src="../assets/home-hero.jpg" alt="flash sale generator image">
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "Welcome to the flash sale generator ",
      index: 0, // Keeps track of the current character
    };
  },
  methods: {
    typeWriter() {
      const textElement = this.$refs.typewriterText;
      if (this.index < this.text.length) {
        textElement.textContent += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.typeWriter, 100); // Adjust typing speed here
      }
    },
  },
  mounted() {
    this.typeWriter(); // Start the typewriter effect when the component is mounted
  },
};
</script>

<style>
.home-page {
  width: 1200px;
  margin: 0 auto;
}
.typewriter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 48px;
  letter-spacing: 4px;
  font-weight: bold;
  color: #333;
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
}

.home-page-paragraph {
  margin-bottom: 20px;
  text-align: center;
}

.home-page-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.home-page-img-container img {
  width: 60%;
  height: auto;
  border-radius: 4px;
}
</style>
