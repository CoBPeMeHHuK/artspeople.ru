
<template>
    <div class="about_container">
        <div class="user_information__container_about" :class="{is_auth:isAuth}">
            <div class="user_information__option_about">
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Дата рождения</div>
                    <div class="user_information_description_about">{{ settingBirthday }}</div>
                </div>
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Телефон</div>
                    <div class="user_information_description_about">{{ settingPhone }}</div>
                </div>
            </div>
            <div class="user_information__option_about">
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Дополнительный телефон</div>
                    <div class="user_information_description_about">{{ settingAdditionalPhone }}</div>
                </div>
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Персональный сайт</div>
                    <div class="user_information_description_about"><a class="site_about" href="http://artspeople.ru">{{ settingPersonalSite }}</a></div>
                </div>
            </div>
            <div class="user_information__option_about">
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Цитата</div>
                    <div class="user_information_description_about" v-html="settingQuote"></div>
                </div>
                <div class="user_information__option_container_about">
                    <div class="user_information__title_about">Интересы и увлечения</div>
                    <div class="user_information_description_about" v-html="settingAbout"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                settingName:'',
                settingSurname:'',
                settingEmail:'',
                settingBirthday:'',
                settingPhone:'',
                settingAdditionalPhone:'',
                settingPersonalSite:'',
                settingQuote:'',
                settingAbout:'',
            }
        },

        props:[
            'isAuth'
        ],

        created(){

            console.log('about');
            axios({
                method: 'post',
                url:'/api/get-person-about/'+this.$route.params['id'],
            }).then((response) => {


                console.log(response.data);
                this.settingName = response.data.name;
                this.settingSurname = response.data.surname;
                this.settingBirthday = new Date(response.data.birthday * 1000).toISOString().slice(0,10);
                this.settingPhone = response.data.phone;
                this.settingAdditionalPhone = response.data.additional_phone;
                this.settingQuote = response.data.quote;
                this.settingPersonalSite = response.data.personal_site;
                this.settingAbout = response.data.about;

            });
        },

        mounted() {

        },

        beforeUpdate(){

        },


        updated(){

        },
        computed:{

        },

        methods: {

        }
    }
</script>
