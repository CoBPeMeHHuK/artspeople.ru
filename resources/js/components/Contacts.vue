
<template>
    <div class="personal_container">

    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                user:[],
                avatar:'',
                subcategories:[],
                isAuth:false,
            }
        },

        props:[
        ],

        created(){

        },

        mounted() {

            this.$emit('preloader', [{
                'isPreloader':false
            }]);

        },

        updated(){

        },
        computed:{

        },

        methods: {

        }
    }
</script>
