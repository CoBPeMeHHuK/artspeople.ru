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
                    <img :src="userAuthAvatar" :class="{is_active_preview:userAuthAvatar}">
                </div>
                <a class="btn" @click="toggleShow">Изменить аватар</a>
            </div>
            <div class="user_information__container">
                <div class="user_information__option">
                    <div class="user_information__option_container">
                        <div class="user_information__title">Имя</div>
                        <label for="user_name"></label><input type="text" name="name" id="user_name"
                                                              class="user_information__input form-control"
                                                              v-model="settingName" @change="nameChange">
                        <div v-if="isNameError" class="user_information__error">Поле не должно быть пустым</div>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Фамилия</div>
                        <label for="user_surname"></label><input type="text" name="surname" id="user_surname"
                                                                 class="user_information__input form-control"
                                                                 v-model="settingSurname" @change="surnameChange">
                        <div v-if="isSurnameError" class="user_information__error">Поле не должно быть пустым</div>
                    </div>
                </div>
                <div class="user_information__option">
                    <div class="user_information__option_container">
                        <div class="user_information__title">Дата рождения</div>
                        <datepicker   v-model="settingBirthday" :displayFormat="'DD-MM-YYYY'" :months="months" :weekdays="weekdays"
                                    class="user_information__input form-control__custom"></datepicker>
                        <div v-if="isDateError" class="user_information__error">Неверный формат даты</div>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Телефон</div>
                        <label for="user_phone"></label><input type="text" name="surname" id="user_phone"
                                                               class="user_information__input form-control"
                                                               v-model="settingPhone" @change="phoneChange">
                        <div v-if="isPhoneError" class="user_information__error">Неверный формат телефона</div>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Дополнительный телефон</div>
                        <label for="user_additional_phone"></label><input type="text" name="email"
                                                                          id="user_additional_phone"
                                                                          class="user_information__input form-control"
                                                                          v-model="settingAdditionalPhone" @change="additionalPhoneChange">
                        <div v-if="isAdditionalPhoneError" class="user_information__error">Неверный формат телефона</div>
                    </div>
                    <div class="user_information__option_container">
                        <div class="user_information__title">Персональный сайт</div>
                        <label for="user_site"></label><input type="text" name="email" id="user_site"
                                                              class="user_information__input form-control"
                                                              v-model="settingPersonalSite" @change="siteChange">
                        <div v-if="isSiteError" class="user_information__error">Неверный формат персонального сайта</div>
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
    import Datepicker from 'vue-date-pick';
    import {ru} from 'vuejs-datepicker/dist/locale';
    import 'vue-date-pick/dist/vueDatePick.css';

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
                status: 0,
                weekdays: [
                        'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
                ],
                months: [
                    'Январь', 'Февраль', 'Март', 'Апрель',
                    'Май', 'Июнь', 'Июль', 'Август',
                    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                isNameError:false,
                isSurnameError:false,
                isDateError:false,
                isPhoneError:false,
                isAdditionalPhoneError:false,
                isSiteError:false
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
                this.settingBirthday = response.data.birthday;
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

        watch:{
            userAuthAvatar:function(){
              return true;
            },

            settingBirthday:function(oldVal,newVal){
                (this.dateValidation(this.settingBirthday)) ? this.isDateError = false : this.isDateError = true;
            }
        },
        computed: {

        },

        methods: {
            toggleShow() {
                this.show = !this.show;
            },

            cropSuccess(imgDataUrl, field) {
                this.userAuthAvatar = imgDataUrl;
                this.$emit('avatar', [{
                    'avatar': imgDataUrl
                }]);
            },

            cropUploadSuccess(jsonData, field) {

            },

            cropUploadFail(status, field) {

            },

            saveSettings: function () {

                console.log('save');
                this.status = 0;

                let quote = this.settingQuote,
                    about = this.settingAbout,
                    name = this.settingName,
                    surname = this.settingSurname;

                let params = {
                    'name': name,
                    'surname': surname,
                    'birthday': Date.parse(this.settingBirthday) / 1000,
                    'phone': this.settingPhone,
                    'additional_phone': this.settingAdditionalPhone,
                    'site': this.settingPersonalSite,
                    'quote': quote,
                    'about': about
                };

                console.log(params);

                axios({
                    method: 'post',
                    url: '/api/change-settings',
                    params: params
                }).then((response) => {

                    if (response.data.status === 'success') this.status = 1;
                    if (response.data.status === 'error') this.status = 2;

                });
            },


            phoneValidation:function(phone){
                let regular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                return regular.test(phone);
            },

            dateValidation:function(date){
                let regular = /^[0-9-]+$/;
                return regular.test(date) && date.length === 10;
            },

            urlValidation:function(url){
                let regular = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                return regular.test(url);
            },

            nameChange:function(){
                this.settingName.length == "" ? this.isNameError = true : this.isNameError = false;
            },
            surnameChange:function(){
                this.settingSurname.length == ""? this.isSurnameError = true : this.isSurnameError = false;
            },

            phoneChange:function(){
                this.phoneValidation(this.settingPhone) ? this.isPhoneError = false : this.isPhoneError = true;
            },
            additionalPhoneChange:function(){
                this.phoneValidation(this.settingAdditionalPhone) ? this.isAdditionalPhoneError = false : this.isAdditionalPhoneError = true;
            },
            siteChange:function(){
                this.urlValidation(this.settingPersonalSite) ? this.isSiteError = false : this.isSiteError = true;
            }
        }
    }
</script>

<style>
    .user_information__input button.vdpClearInput{
        display:none;
    }

    .vdpComponent{
        width:100%;
        font-size:14px;
        font-family:'Circe';
        color: #555;
        margin-top: 5px;
    }

    .vdpCellContent{
        font-size: 12px;
    }

    .vdpInnerWrap{
        min-width:auto;
    }

    .vdpHeader{
        font-size: 12px;
    }

    .vdpTable thead{
        font-size:12px;
    }
</style>
