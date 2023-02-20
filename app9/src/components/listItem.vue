<script async setup>
    import {ref, onMounted} from 'vue';
    const props = defineProps({
        file: String
    })

    const sound = ref(null);
    const title = ref("title");
    const duration = ref("0:00");
    
    let metaData = await getJson(props.file);

    async function getJson(filePath){
        let json = {};
        let reply = await fetch(filePath)
        if (reply.status == 200) {
            json = await reply.json();
        }
        return json;
    }
    onMounted(() => {
        sound.value.src = new URL(metaData.path, import.meta.url);
        title.value = metaData.title;
        duration.value = metaData.duration;
    })

</script>

<template>
    <div> {{ title }} ({{ duration }})</div>
    <audio ref="sound" controls></audio>
</template>

<style>
    div {
        margin-bottom: 5px;
        margin-top: 25px;
    }
</style>