
<template>
    <div class="modal_container_gallery" :class="{auth:isAuth}" v-if="works.length > 0">
                <modal :height="'100%'" :width="'100%'" name="gallery">
                    <div class="image_container" v-if="clientWidth >= 992">
                        <div class="image_content">
                            <transition name="image" mode="out-in">
                                <img :key="selectImage"  class="image_item" :src="getUrlList[selectImage]">
                            </transition>
                            <a class="prev" @click="prev"><i class="fa fa-chevron-left"></i></a>
                            <a class="next" @click="next"><i class="fa fa-chevron-right"></i></a>
                        </div>

                        <div class="image_information">
                            <button type="button" @click="closeGallery" class="gallery_close close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="information_container">
                                <div class="information__title_container">
                                    <div v-if="typeWorks === 'works'" class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].avatar.src+') no-repeat' }"></div>
                                    <div v-else class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].work.avatar.src+') no-repeat' }"></div>
                                    <div class="information__person_info">
                                        <div class="information__person_title">
                                            <router-link :to="'/profile/'+works[selectImage].user.id" v-if="typeWorks === 'works'">
                                                <p class="information__person_name">
                                                    {{ works[selectImage].user.surname +' '+works[selectImage].user.name }}
                                                </p>
                                            </router-link>
                                            <router-link :to="'/profile/'+works[selectImage].work.user.id" v-else>
                                                <p class="information__person_name">
                                                    {{ works[selectImage].work.user.surname +' '+works[selectImage].work.user.name }}
                                                </p>
                                            </router-link>
                                            <p class="information__person_range">Новичок</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="information__work_container" v-if="typeWorks === 'works'">
                                    <div v-if="works[selectImage].title.length > 0" class="information__work_title" v-html="works[selectImage].title"></div>
                                    <div v-if="works[selectImage].description.length > 0" class="information__work_description" v-html="works[selectImage].description"></div>
                                    <div class="information__work_publication"><i>{{ works[selectImage].created}}</i></div>
                                </div>
                                <div class="information__work_container" v-else>
                                    <div v-if="works[selectImage].work.name.length > 0" class="information__work_title" v-html="works[selectImage].work.name"></div>
                                    <div v-if="works[selectImage].work.description.length > 0" class="information__work_description" v-html="works[selectImage].work.description"></div>
                                    <div class="information__work_publication"><i>{{ works[selectImage].work.created}}</i></div>
                                </div>
                            </div>
                            <div class="information_comments">
                                <div class="information_comments__container">
                                    <div class="information_comments__icon"></div>
                                    <div class="information_comments__message">Будьте первым, кто оставит<br> комментарий к этой работе</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="image_container image_container_mobile" v-else>
                        <div class="image_information__header_mobile">
                            <div class="information__title_container__mobile">
                                <div class="information__title_container__mobile">
                                    <div v-if="typeWorks==='works'" class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].avatar.src+') no-repeat' }"></div>
                                    <div v-else class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].work.avatar.src+') no-repeat' }"></div>
                                    <div class="information__person_info">
                                        <div class="information__person_title">
                                            <router-link :to="'/profile/'+works[selectImage].user.id" v-if="typeWorks === 'works'">
                                            <p class="information__person_name">
                                                {{ works[selectImage].user.surname +' '+works[selectImage].user.name }}
                                            </p>
                                            </router-link>
                                            <router-link :to="'/profile/'+works[selectImage].work.user.id" v-else>
                                                <p class="information__person_name">
                                                    {{ works[selectImage].work.user.surname +' '+works[selectImage].work.user.name }}
                                                </p>
                                            </router-link>
                                            <p class="information__person_range">Новичок</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" @click="closeGallery" class="gallery_close close close_mobile" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <div class="image_content">
                            <transition name="image" mode="out-in">
                                <img :key="selectImage"  class="image_item" :src="getUrlList[selectImage]">
                            </transition>
                            <a class="prev" @click="prev"><i class="fa fa-chevron-left"></i></a>
                            <a class="next" @click="next"><i class="fa fa-chevron-right"></i></a>
                        </div>

                        <div class="image_information">
                            <div class="information_container">
                                <div class="information__work_container" v-if="typeWorks === 'works'">
                                    <div v-if="works[selectImage].title.length > 0" class="information__work_title" v-html="works[selectImage].title"></div>
                                    <div v-if="works[selectImage].description.length > 0"  class="information__work_description" v-html="works[selectImage].description"></div>
                                    <div class="information__work_publication"><i>{{ works[selectImage].created}}</i></div>
                                </div>
                                <div class="information__work_container" v-else>
                                    <div v-if="works[selectImage].work.name.length > 0" class="information__work_title" v-html="works[selectImage].work.name"></div>
                                    <div v-if="works[selectImage].work.description.length > 0"  class="information__work_description" v-html="works[selectImage].work.description"></div>
                                    <div class="information__work_publication"><i>{{ works[selectImage].work.created}}</i></div>
                                </div>
                            </div>
                            <div class="information_comments">
                                <div class="information_comments__container">
                                    <div class="information_comments__icon"></div>
                                    <div class="information_comments__message">Будьте первым, кто оставит<br> комментарий к этой работе</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </modal>
            </div>
</template>
<script>
    export default {
        data: function () {
            return {
                selectelWorkSrc:'https://357319.selcdn.ru/artspeople/works/',
                selectelAvatarSrc:'https://357319.selcdn.ru/artspeople/avatars/',
                isInvited:false,
                clientWidth:0,
                urlList:[]
            }
        },

        props:[
            'isAuth',
            'works',
            'selectImage',
            'typeWorks'
        ],

        created(){

        },

        mounted() {
            this.clientWidth = document.documentElement.clientWidth;
        },

        beforeUpdate(){

        },

        updated(){

        },
        computed:{
            getUrlList:function(){
                this.urlList = [];
                Object.keys(this.works).forEach(function(id) {
                    this.typeWorks === 'works' ? this.urlList.push(this.selectelWorkSrc+this.works[id].src) : this.urlList.push(this.selectelWorkSrc+this.works[id].work.image.src);
                }.bind(this));
                return this.urlList;
            },
        },


        methods: {
            getImgSrc:function(source){
                return this.selectelWorkSrc+source;
            },
            prev(){
                let length = this.works.length;
                this.selectImage === 0 ? this.selectImage = length - 1  : this.selectImage--;
            },
            next(){
                let length = this.works.length;
                this.selectImage === length - 1 ? this.selectImage = 0 : this.selectImage++;

            },
            closeGallery:function(){
                this.$modal.hide('gallery');
            },
            showGallery:function(index){
                this.selectImage = index;
                this.$modal.show('gallery');
            },
        }
    }
</script>
