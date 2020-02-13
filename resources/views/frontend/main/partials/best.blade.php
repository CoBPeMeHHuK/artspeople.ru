<div id="app">
    <div class="wrapper_tabs">
        <div class="right_column">
            <h1>Лучшее за неделю</h1>
            <p>Последние загруженные работы мастеров</p>
        </div>
        <div class="left_column">
            <ul>
                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 'all'}"
                    @click="selectTypeCategory('all')">
                    <div>Общее</div>
                </li>

                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 'tattoo'}"
                    @click="selectTypeCategory('tattoo')">
                    <div>Татуировка</div>
                </li>
                <li class="choice_category"
                    :class="{choice_category__active:selectedTypeCategory === 'photography'}"
                    @click="selectTypeCategory('photography')">
                    <div>Фотография</div>
                </li>
            </ul>
        </div>
    </div>

    <div class="personal_gallery">
            <div class="wrapper_tab_content">
            <div class="works_container">
                <div class="gallery_works">
                    <div class="grid gallery_work_wrapper" v-if="works.length > 0">
                        <div class="gallery_work grid-item" :key="workIndex" v-for="(work,workIndex) in works">
                            <div class="gallery_work__container">
                                <p class="work_gradient"></p>
                                <img v-bind:src="getImgSrc(work.image.src)" class="work" alt="image.png">
                                <div class="work_eye__icon work_icons person" @click="showGallery(workIndex)"></div>
                                <div class="work_like__container">
                                    <div class="work_like__container_relative">
                                        <div class="work_like__icon work_icons" :class="{blue:isLike(workIndex)}"></div>
                                        <div class="count_likes work_icons" v-if="work.likes.length > 0" :class="{blue:isLike(workIndex)}">@{{ work.likes.length }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profile_works_container__default" v-else>
                        <p>Извините, произошла техническая ошибка</p>
                    </div>
                </div>


                <div class="modal_container_gallery" v-if="works.length > 0">
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
                                        <a v-bind:href="'/profile/'+ works[selectImage].user.id">
                                        <div class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].avatar.src+') no-repeat' }"></div>
                                        </a>
                                        <div class="information__person_info">
                                            <div class="information__person_title">
                                                <a v-bind:href="'/profile/'+ works[selectImage].user.id">
                                                    <p class="information__person_name">
                                                        @{{ works[selectImage].user.surname +' '+works[selectImage].user.name }}
                                                    </p>
                                                    <p class="information__person_range">Генералисимус</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="information__work_container">
                                        <div class="information__work_title" v-html="works[selectImage].name"></div>
                                        <div class="information__work_description" v-html="works[selectImage].description"></div>
                                        <div class="information__work_publication"><i>@{{ works[selectImage].created_at}}</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="image_container image_container_mobile" v-else>
                            <div class="image_information__header_mobile">
                                <div class="information__title_container__mobile">
                                    <div class="information__title_container__mobile">
                                        <div class="information__person_avatar" v-bind:style="{ background: 'url('+selectelAvatarSrc+works[selectImage].avatar.src+') no-repeat' }"></div>
                                        <div class="information__person_info">
                                            <div class="information__person_title">
                                                    <p class="information__person_name">
                                                        @{{ works[selectImage].user.surname +' '+works[selectImage].user.name }}
                                                    </p>
                                                <p class="information__person_range">Генералисимус</p>
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
                                    <div class="information__work_container">
                                        <div class="information__work_title" v-html="works[selectImage].name"></div>
                                        <div class="information__work_description" v-html="works[selectImage].description"></div>
                                        <div class="information__work_publication"><i>@{{ works[selectImage].created_at}}</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </modal>
                </div>
            </div>
        </div>
    </div>
</div>
