<template>
    <div class="personal_container">
        <div class="personal_data">
            <div class="personal_data__avatar"
                 v-bind:style="{ background: 'url('+avatar+') no-repeat' }">
                <div class="online_icon_container" v-if="isOnlineFriend(user.id)">
                    <div class="online_icon"></div>
                </div>
            </div>
            <div class="personal_data__info">
                <div class="personal_title">
                    <p class="personal_title__name">{{user.surname+' '+user.name}}</p>
                    <div class="icons-container" @click="showUserOption"><span class="personal_title_section__icons"
                                                                               :class="{rotate:isOpenUserOption}"></span>
                    </div>
                    <div class="personal_title__options" :class="{is_active:isOpenUserOption}">
                        <ul class="personal_title__ul">
                            <li @click="showUserOption">Название пункта</li>
                            <li @click="showUserOption">Название пункта</li>
                            <li @click="showUserOption">Название пункта</li>
                        </ul>
                    </div>
                </div>
                <p class="personal_description" v-html="user.quote">
                </p>
            </div>

            <div class="personal_data_navigation">
                <ul class="personal_data_navigation__ul">
                    <li>
                        <router-link :to="{ name:'personworks' }">ПОРТФОЛИО</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'personlikes'}">СИМПАТИИ</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'personabout'}">О СЕБЕ</router-link>
                    </li>
                </ul>
                <div class="personal_data_invite_button personal_data_invite_button__container"
                     :class="{is_visible_flex:user.id != userAuth.id}">
                    <div class="btn_message" @click="show"><span></span></div>
                    <div class="btn_invite" v-if="isStatusDefault" @click="addToFriendList"><span
                        class="friend_invite"></span></div>
                    <div class="btn_friend_invited" @click="cancelRequestToFriendList"
                         :class="{is_visible_flex:isStatusNotAccepted}">Отменить заявку
                    </div>
                    <div class="btn_friend_invited"
                         :class="{is_visible_flex:user.friendRequest.status == user.statuses[2]}"
                         @click="openDeleteFromFriendList">У вас в друзьях
                        <div class="personal_title__options personal_title__options_friend_request"
                             @click="deleteFromFriendList" :class="{is_visible:isVisibleOptionDeleteFriendsList}">
                            <ul class="personal_title__ul">
                                <li>Удалить из друзей</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <transition>
            <router-view v-bind:is-auth="isAuth" v-bind:user="user" v-bind:user-auth="userAuth"></router-view>
        </transition>
        <div class="modal_container_option">
            <modal name="hello-world" @before-open="beforeOpenModal" :height="heightModal" :width="widthModal">
                <div class="modal_container">
                    <div class="modal_header">
                        <div class="modal_header__container">
                            <span>Новое сообщение</span>
                            <div class="close_container">
                                <span @click="hide" class="modal_close"></span>
                            </div>

                        </div>

                    </div>
                    <div class="modal_content">
                        <label>
                            <textarea class="modal_textarea" v-model="messageText"></textarea>
                        </label>
                    </div>
                    <div class="modal_button__container">
                        <button @click="sendMessage">Отправить</button>
                    </div>

                </div>
            </modal>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                user: [],
                avatar: '',
                isAuth: false,
                isOpenUserOption: false,
                isInvited: false,
                messageText: '',
                widthModal: 600,
                heightModal: 340,
                isAdded: false,
                isStatusDefault: false,
                isStatusNotAccepted: false,
                isStatusAccepted: false,
                isVisibleOptionDeleteFriendsList: false
            }
        },

        props: [
            'userAuth',
            'connectedUsers'
        ],

        created() {
            if (window.innerWidth <= 600) {
                this.widthModal = window.innerWidth - 10;
                this.heightModal = window.innerWidth - 100;
            }
        },

        mounted() {


            axios({
                method: 'post',
                url: window.location.origin + '/api/profile/' + this.$route.params['id'],
            }).then((response) => {
                this.user = response.data;
                this.avatar = "https://357319.selcdn.ru/artspeople/avatars/" + response.data.avatar;
                this.isAuth = response.data.isAuth;
                console.log(this.user.friendRequest);
                console.log(this.user.statuses[0]);
                this.user.friendRequest.status === this.user.statuses[0] ? this.isStatusDefault = true : this.isStatusDefault = false;
                this.user.friendRequest.status === this.user.statuses[1] ? this.isStatusNotAccepted = true : this.isStatusNotAccepted = false;
                this.user.friendRequest.status === this.user.statuses[2] ? this.isStatusAccepted = true : this.isStatusAccepted = false;
            });

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
            sendMessage: function () {
                axios({
                    method: 'post',
                    url: '/api/send-message',
                    params: {
                        user_id: this.user.id,
                        message: this.messageText,
                    }
                }).then((response) => {

                });
                this.$modal.hide('hello-world');
            },

            showUserOption: function () {
                this.isOpenUserOption === false ? this.isOpenUserOption = true : this.isOpenUserOption = false;
            },
            show() {
                this.$modal.show('hello-world');
            },
            hide() {
                this.$modal.hide('hello-world');
            },
            beforeOpenModal: function () {
            },
            addToFriendList: function () {
                axios({
                    method: 'post',
                    url: '/api/request-to-friend-list',
                    params: {
                        user: this.user.id,
                        status: this.user.statuses[1]
                    }
                }).then((response) => {
                    console.log(response);
                    if (response.data.status == 'success') {
                        this.isStatusDefault = false;
                        this.isStatusNotAccepted = true;
                    }
                });
            },
            deleteFromFriendList: function () {
                axios({
                    method: 'post',
                    url: '/api/request-to-friend-list',
                    params: {
                        user: this.user.id,
                        status: this.user.statuses[3]
                    }
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.user.friendRequest.status = this.user.statuses[4];
                        this.isStatusDefault = true;
                    }
                });
            },

            cancelRequestToFriendList: function () {
                axios({
                    method: 'post',
                    url: '/api/request-to-friend-list',
                    params: {
                        user: this.user.id,
                        status: this.user.statuses[0]
                    }
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.user.friendRequest.status = this.user.statuses[0];
                        this.isStatusDefault = true;
                        this.isStatusNotAccepted = false;
                    }
                });
            },
            openDeleteFromFriendList: function () {
                this.isVisibleOptionDeleteFriendsList === false ? this.isVisibleOptionDeleteFriendsList = true : this.isVisibleOptionDeleteFriendsList = false;
            },

            isOnlineFriend:function(id){
                let user = this.connectedUsers.find(x=>x.channel === Number(id));
                return !!user;
            },
        }
    }
</script>


