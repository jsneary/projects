<script setup>
    import { ref } from 'vue'

    const text = ref({ 
        p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis. Nisl suscipit adipiscing bibendum est. Tellus orci ac auctor augue mauris augue. Aliquam ut porttitor leo a diam sollicitudin tempor. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Elementum facilisis leo vel fringilla est ullamcorper. Vitae semper quis lectus nulla. Nec dui nunc mattis enim ut tellus elementum. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Orci sagittis eu volutpat odio facilisis mauris. Purus ut faucibus pulvinar elementum integer enim neque. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ut pharetra sit amet aliquam. Aliquam ultrices sagittis orci a.",

        p2: "Aliquam sem fringilla ut morbi tincidunt. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Est ultricies integer quis auctor. Enim facilisis gravida neque convallis a cras semper auctor neque. Volutpat blandit aliquam etiam erat. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Est ante in nibh mauris. Viverra aliquet eget sit amet tellus.",

        p3: "Mauris a diam maecenas sed enim. Euismod elementum nisi quis eleifend quam. Imperdiet proin fermentum leo vel orci porta. Dolor purus non enim praesent elementum facilisis leo vel. Gravida arcu ac tortor dignissim. Eu consequat ac felis donec et odio pellentesque diam volutpat. At consectetur lorem donec massa. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Arcu non odio euismod lacinia at quis risus sed. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sed felis eget velit aliquet sagittis id. Ultricies leo integer malesuada nunc vel risus commodo. Feugiat nibh sed pulvinar proin. Auctor urna nunc id cursus metus aliquam eleifend mi. Sed lectus vestibulum mattis ullamcorper velit. Diam quis enim lobortis scelerisque fermentum dui. Morbi blandit cursus risus at ultrices mi tempus." 
    });

    const color = ref("color1");
    
    function changeText() {
        color.value = (color.value === "color1") ? "color2" : "color1";
    }

</script>

<template>

    <h1>Component 2</h1>

    <button @click="changeText()">Change Text</button>

    <p v-bind:class="color">
        {{ text.p1 }}
        <br><br>
        {{ text.p2 }}
        <br><br>
        {{ text.p3 }}
    </p>
</template>
<style>
    .color1 {
        color: black;
        line-height: 85%;
    }
    .color2 {
        color: orange;
        font-size: 100px;
        line-height: 200%;
    }
</style>

