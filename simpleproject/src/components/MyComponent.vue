<template>
    <h3>{{boodschapBinnenComponent}}</h3>

</template>

<script>

    export default{
        name:'MyComponent',
        data:function(){
            return{
                boodschapBinnenComponent: "Dit is een tekst van in de component."
            }
        }
    }

</script>


<style scoped>
/* scoped, deze opmaak bestaat enkel binnen deze file */
    h3{
        margin: 20px;
        background-color: red;
    } 

</style>