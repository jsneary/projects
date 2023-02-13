<script setup>
    //datdWmyjbsAW9pC0H6R3NH6Ysz5638gJ29hBUKY6EdFIlYiM6E4QzV2Y
    import { reactive } from 'vue'
    import { watchEffect } from 'vue'
    import { createClient } from 'pexels'

    const client = createClient('datdWmyjbsAW9pC0H6R3NH6Ysz5638gJ29hBUKY6EdFIlYiM6E4QzV2Y');
    let curImg = 0;

    //let imgs = [];

    let imgs = [
        {
        alt: "Grayscale photo of house on grass field",
        photographer: "Suzy Hazelwood",
        photographer_url: "https://www.pexels.com/@suzyhazelwood/",
        url: "suzy.jpg"
        }, 
        {
        alt: "Gray concrete house surrounded by trees",
        photographer: "Wayne Evans",
        photographer_url: "https://www.pexels.com/@wayne-evans-62382/",
        url: "wayne.jpg" 
        },
        {
        alt: "White and brown 2 story house near tree",
        photographer: "Mike B",
        photographer_url: "https://www.pexels.com/@mikebirdy/",
        url: "mike.jpg" 
        }
    ];

    //imgs[0] = img;

    console.log(imgs[0].alt)

    




    const pics = reactive({
        media: {}
    })

    const pic = reactive({
        name: "",
        photographer: "",
        photographer_url: "",
        url: ""
    })

    async function getPics() {
        //let result = await client.collections.all({per_page: 1});
        //const id = result.collections[0].id
        //result = await client.collections.media({ id, type: 'photos', per_page: 6 })
        //pics.media = result.media;
    }

    async function loadImage() {
        let index = curImg;
        
        //pic.name = pics.media[index].alt;
        pic.name = imgs[index].alt;
        //pic.photographer = pics.media[index].photographer;
        pic.photographer = imgs[index].photographer;
        //pic.photographer_url = pics.media[index].photographer_url;
        pic.photographer_url = imgs[index].photographer_url;
        //pic.url = pics.media[index].src.tiny;
        pic.url = imgs[index].url;

    }

    getPics();

    watchEffect(() => {
        console.log("test")

        if (imgs.length > 0){
            loadImage();
        }
        /*if (pics.media.length > 0) {
            loadImage();
        }*/
    })


    const loadNext = function() {
        if (curImg < 2) {
            curImg++;
        }
        let left = document.getElementById("left");
        left.disabled = false;
        let right = document.getElementById("right");
        if (curImg == 2) {
            right.disabled = true;
        } 
        
        loadImage();
    }

    const loadPrev = function() {
        if (curImg > 0) {
            curImg--;
        }
        let left = document.getElementById("left");
        
        let right = document.getElementById("right");
        right.disabled = false;
        if (curImg == 0) {
            left.disabled = true;
        } 
        
        loadImage();
    }

    
</script>

<template>
    
    <div id="slides">
        
        <button type="button" id="left" @click="loadPrev" disabled>&#10094;</button>
        <img :src="pic.url">
        <button type="button" id="right" @click="loadNext">&#10095;</button>
        
    </div>
    <br>
    <div id="text">
        <p>
            {{ pic.name }}
        </p>
        <p>
            <a v-bind:href="pic.photographer_url" target="_blank">{{ pic.photographer }}</a>
        </p>
</div>
</template>

<style>
    #slides {
        text-align: center;
    }
    #text {
        text-align: center;
    }
    img {
        width: 50%;
        height: auto;
    }
    h1 {
        text-align: center;
    }
</style>