<template>
    <div class="setting_container">
        <div class="setting_content">

            <div class="avatar_container" v-show="isVisibleImage">
                <my-upload v-show="show" field="img"
                           @crop-success="cropSuccess"
                           @crop-upload-success="cropUploadSuccess"
                           @crop-upload-fail="cropUploadFail"
                           v-model="show"
                           :width="300"
                           :height="300"
                           url="/api/change-avatar"
                           :params="params"
                           :headers="headers"
                           :no-square="true"
                           lang-type="ru"
                           img-format="png"></my-upload>
                <div class="img_container">
                    <img :src="userAuthAvatar">
                </div>
                <a class="btn" @click="toggleShow">Изменить аватар</a>
            </div>
            <div class="user_information__container">
                <div class="user_information__option">
                    <div class="user_information__option_container">
                        <div class="user_information__title">Имя</div>
                        <label for="user_name"></label><input type="text" name="name" id="user_name"
                                                              class="user_information__input form-control"
                                                              v-model="settingName">
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Фамилия</div>
                        <label for="user_surname"></label><input type="text" name="surname" id="user_surname"
                                                                 class="user_information__input form-control"
                                                                 v-model="settingSurname">
                    </div>
                </div>
                <div class="user_information__option">
                    <div class="user_information__option_container">
                        <div class="user_information__title">Дата рождения</div>
                        <datepicker v-model="settingBirthday" :language="lang"
                                    class="user_information__input form-control__custom"></datepicker>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Телефон</div>
                        <label for="user_phone"></label><input type="text" name="surname" id="user_phone"
                                                               class="user_information__input form-control"
                                                               v-model="settingPhone">
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Дополнительный телефон</div>
                        <label for="user_additional_phone"></label><input type="text" name="email"
                                                                          id="user_additional_phone"
                                                                          class="user_information__input form-control"
                                                                          v-model="settingAdditionalPhone">
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Персональный сайт</div>
                        <label for="user_site"></label><input type="text" name="email" id="user_site"
                                                              class="user_information__input form-control"
                                                              v-model="settingPersonalSite">
                    </div>
                </div>
                <div class="user_information__option">
                    <div class="user_information__option_container">
                        <div class="user_information__title">Цитата</div>
                        <label for="user_quote"></label><textarea name="quote" id="user_quote"
                                                                  class="user_information__input form-control"
                                                                  v-model="settingQuote"></textarea>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Интересы и увлечения</div>
                        <label for="user_about"></label><textarea name="about" id="user_about"
                                                                  class="user_information__input form-control"
                                                                  v-model="settingAbout"></textarea>
                    </div>
                </div>
            </div>
            <div class="status_updated success" v-show="status===1">
                <div>Изменения успешно сохранены.</div>
            </div>
            <div class="status_updated error" v-show="status===2">
                <div>Изменения не были сохранены.</div>
            </div>
            <div class="user_information__btn">
                <button class="btn btn-primary" @click="saveSettings">Сохранить</button>
            </div>

        </div>
    </div>
</template>
<script>
    import myUpload from 'vue-image-crop-upload';
    import Datepicker from 'vuejs-datepicker';
    import {ru} from 'vuejs-datepicker/dist/locale'

    export default {
        data: function () {
            return {
                params: {
                    name: 'file'
                },
                headers: {
                    smail: '*_~',
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                },
                isLeftChat: true,
                isRightChat: true,
                isVisibleImage: false,
                show: false,
                settingName: '',
                settingSurname: '',
                settingEmail: '',
                settingBirthday: '',
                settingPhone: '',
                settingAdditionalPhone: '',
                settingPersonalSite: '',
                settingQuote: '',
                settingAbout: '',
                lang: ru,
                status: 0
            }
        },

        props: [
            'userAuthAvatar'
        ],
        components: {
            'my-upload': myUpload,
            'datepicker': Datepicker
        },

        created() {
            axios({
                method: 'post',
                url: window.location.origin + '/api/get-settings',
            }).then((response) => {

                this.settingName = response.data.name;
                this.settingSurname = response.data.surname;
                // this.settingEmail = response.data.email;
                this.settingBirthday = new Date(response.data.birthday * 1000);
                this.settingPhone = response.data.phone;
                this.settingAdditionalPhone = response.data.additional_phone;
                this.settingQuote = response.data.quote;
                this.settingPersonalSite = response.data.personal_site;
                this.settingAbout = response.data.about;

            });
        },

        mounted() {


            this.isVisibleImage = true;

            this.$emit('preloader', [{
                'isPreloader': false
            }]);
        },

        beforeUpdate() {

        },

        updated() {

        },
        computed: {},

        methods: {
            toggleShow() {
                this.show = !this.show;
            },
            /**
             * crop success
             *
             * [param] imgDataUrl
             * [param] field
             */
            cropSuccess(imgDataUrl, field) {
                this.userAuthAvatar = imgDataUrl;
                this.$emit('avatar', [{
                    'avatar': imgDataUrl
                }]);
            },
            /**
             * upload success
             *
             * [param] jsonData  server api return data, already json encode
             * [param] field
             */
            cropUploadSuccess(jsonData, field) {
                console.log('-------- upload success --------');
                console.log(jsonData);
                console.log('field: ' + field);
            },
            /**
             * upload fail
             *
             * [param] status    server api return error status, like 500
             * [param] field
             */
            cropUploadFail(status, field) {
                console.log('-------- upload fail --------');
                console.log(status);
                console.log('field: ' + field);
            },

            saveSettings: function () {
                this.status = 0;
                axios({
                    method: 'post',
                    url: window.location.origin + '/api/change-settings',
                    params: {
                        'name': this.settingName,
                        'surname': this.settingSurname,
                        // 'email': this.settingEmail,
                        'birthday': Date.parse(this.settingBirthday) / 1000,
                        'phone': this.settingPhone,
                        'additional_phone': this.settingAdditionalPhone,
                        'site': this.settingPersonalSite,
                        'quote': this.settingQuote,
                        'about': this.settingAbout
                    }
                }).then((response) => {

                    if (response.data.status === 'success') this.status = 1;
                    if (response.data.status === 'error') this.status = 2;

                });
            }
        }
    }
</script>
