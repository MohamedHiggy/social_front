<template>
	<div>
		<Cropper class="upload-example-cropper" :src="image" @change="onChange"/>
    <div class="button-wrapper">
        <span class="button" @click="$refs.file.click()">
          <input type="file" ref="file" @change="uploadImage($event)" accept="image/*">
          Upload image
        </span>
        <span class="button" @click="rotateImage">Rotate image</span>
    </div>
	</div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";

export default {
  name: "App",
  data() {
    return {
      result: null,
      image:
        "https://images.pexels.com/photos/1111534/pexels-photo-1111534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    };

  },
  methods: {
    onChange({coordinates, canvas}) {
			this.coordinates = coordinates
			// You able to do different manipulations at a canvas
			// but there we just get a cropped image
			this.result = canvas.toDataURL()
		},
    rotateImage() {
      var image = document.createElement("img");
      image.crossOrigin = "anonymous";
      image.src = this.image;
      image.onload = () => {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");

        if (image.width > image.height) {
          canvas.width = image.height;
          canvas.height = image.width;
          ctx.translate(image.height, image.width / image.height);
        } else {
          canvas.height = image.width;
          canvas.width = image.height;
          ctx.translate(image.height, image.width / image.height);
        }
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(image, 0, 0);
        this.image = canvas.toDataURL();
      };
    },
    uploadImage(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);

      }
    }
  },
  components: {
    Cropper
  }
};
</script>

<style lang="scss" scoped>

</style>
