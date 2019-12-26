
<template>
    <div class="personal_gallery">
        <div class="works_container">
            <div class="gallery_works">
                <div class="grid gallery_work_wrapper is_auth">
                    <div class="gallery_work grid-item" :key="workIndex" v-for="(work,workIndex) in works">
                        <div class="gallery_work__container">
                            <p class="work_gradient"></p>
                            <img  class="work" v-bind:src="getImgSrc(work.src)" alt="image.png">
                            <div class="work_eye__icon work_icons person" @click="showGallery(workIndex)"></div>
                            <div class="work_like__icon work_icons"></div>
                            <div class="count_likes work_icons">7</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal_container_gallery">
                <modal :height="'100%'" :width="'100%'" name="gallery">
                    <div class="image_container">
                        <div class="image_content">
                            <transition name="image" mode="out-in">
                                <img :key="selectImage"  class="image_item" :src="getUrlList[selectImage]">
                            </transition>
                            <a class="prev" @click="prev"></a>
                            <a class="next" @click="next"></a>
                        </div>

                        <div class="image_information">
                            <button type="button" @click="closeGallery" class="gallery_close close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="information_container">
                                <div class="information__title_container">
                                    <div class="information__person_avatar" ></div>
                                    <div class="information__person_info">
                                        <div class="information__person_title">
                                            <p class="information__person_name">{{ user.surname +' '+user.name }}</p>
                                            <p class="information__person_range">Генералисимус</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="information__navigation">
                                    <div class="information__button_container">
                                        <div class="btn_like" ><span class="like_work"></span></div>
                                        <div class="btn_invite" v-if="!isInvited" @click="isInvited=true"><span class="friend_invite"></span></div>
                                        <div class="btn_invite" v-if="isInvited" @click="isInvited=false"><span class="friend_invited"></span></div>
                                    </div>
                                </div>

                                <div class="information__work_container">
                                    <div class="information__work_title" v-html="works[selectImage].title"></div>
                                    <div class="information__work_description" v-html="works[selectImage].description"></div>
                                    <div class="information__work_publication"><i>{{ works[selectImage].created}}</i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </modal>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                works: [],
                selectelUrl:'https://357319.selcdn.ru/artspeople/works/',
                selectImage:0,
                isInvited:false,
            }
        },

        props:[
            'isAuth',
            'user'
        ],

        created(){

        },

        mounted() {
            axios({
                method: 'post',
                url:window.location.origin+'/api/profile/'+this.$route.params['id']+'/works',
            }).then((response) => {
                this.works = response.data;
            });
        },

        beforeUpdate(){

        },


        updated(){
            let grid = $('.grid').imagesLoaded().progress( function() {

                if(window.innerWidth > 1400){
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 18,
                    });
                } else if(window.innerWidth > 1200){
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 15,
                    });
                } else {
                    grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: 12,
                    });
                }
            });
        },
        computed:{
            getUrlList:function(){
                this.urlList = [];
                Object.keys(this.works).forEach(function(id) {
                    this.urlList.push(this.selectelUrl+this.works[id].src)
                }.bind(this));
                return this.urlList;
            }
        },

        methods: {
            getImgSrc:function(source){
                return this.selectelUrl+source;
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
