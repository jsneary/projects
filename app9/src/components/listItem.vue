<script async setup>
    import {ref, onMounted} from 'vue'; 

    const props = defineProps({
        file: String
    })

    const sound = ref(null);
    const title = ref("title");
    const duration = ref("0:00");

    console.log(props.file)
    

    onMounted(() => {
        sound.value.src = new URL(props.file.path, import.meta.url);
        //sound.value.src = props.file.path
        title.value = props.file.title;
        duration.value = props.file.duration;
    })

</script>

<template>
    <div id="item">
        <div> {{ title }} ({{ duration }})</div>
        <audio ref="sound" controls></audio>
    </div>
</template>

<style>
    div {
        margin-bottom: 5px;
        margin-top: 25px;
    }
</style>