<template>
    <div class="chat_container">
        <div class="chat_content">
            <div v-if="isLeftChat" class="chat_content_left">
                <div class="chat_header_left">
                    <div class="chat_header__searcher">
                        <div class="searcher__icon"></div>
                        <input type="text" placeholder="Search" class="searcher__input">
                    </div>
                </div>
                <div class="chat_content_left__persons" v-if="users.length > 0">
                    <div class="chat_content_left__person" v-for="user in users" v-on:click="selectChatUser(user.id)"
                         :class="{active:userSelect===user.id}">
                        <div class="chat_content_left__left_info">
                            <div class="personal_chat_left_person__avatar"
                                 v-bind:style="{background: 'url('+selectelAvatarSrc+ user.avatar.src+') no-repeat' }">
                                <div class="personal_chat_left_person__container" v-if="isOnlineFriend(user.id)">
                                    <div class="personal_chat_left_person__online_icon"></div>
                                </div>
                            </div>
                            <div class="personal_chat_left_person__title_container">
                                <div class="personal_chat_left_person__name">{{ user.name+ ' ' +user.surname }}</div>
                                <div class="personal_chat_left_person__last_message"
                                     v-if="user.last_messages_from !== null">{{ user.last_messages_from.message |
                                    truncate(32, '...') }}
                                </div>
                                <div class="personal_chat_left_person__last_message"
                                     v-if="user.last_messages_to !== null">{{ user.last_messages_to.message |
                                    truncate(32, '...') }}
                                </div>
                            </div>
                        </div>
                        <div class="personal_chat_left_person__right_container" v-if="user.last_messages_from !== null">
                            <div class="personal_chat_left_person__date"
                                 v-if="user.last_messages_from.updated_at !== null">{{
                                user.last_messages_from.updated_at | moment("H : mm")}}
                            </div>
                            <div class="personal_chat_left_person__date" v-else>{{ user.last_messages_from.created_at |
                                moment("H : mm")}}
                            </div>
                            <div class="count_message__chat"
                                 v-if="user.last_messages_from.count_of_unread > 0 && user.last_messages_from.last_user_changes_id !== userAuth.id">
                                {{ user.last_messages_from.count_of_unread}}
                            </div>
                        </div>
                        <div class="personal_chat_left_person__right_container" v-if="user.last_messages_to !== null">
                            <div class="personal_chat_left_person__date"
                                 v-if="user.last_messages_to.updated_at !== null">{{ user.last_messages_to.updated_at |
                                moment("H : mm")}}
                            </div>
                            <div class="personal_chat_left_person__date" v-else>{{ user.last_messages_to.updated_at |
                                moment("H : mm")}}
                            </div>
                            <div class="count_message__chat"
                                 v-if="user.last_messages_to.count_of_unread > 0 && user.last_messages_to.last_user_changes_id !== userAuth.id">
                                {{ user.last_messages_to.count_of_unread}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat_content_left__persons default" v-else>
                    <div class="chat_content_left__default_messages">
                        У вас пока нет сообщений
                    </div>
                </div>
            </div>
            <div v-if="isRightChat" class="chat_content_right">
                <div class="chat_header_right">
                    <div class="chat_header__person">
                        <div class="chat_header__person_container" v-if="users.length > 0">
                            <div class="chat_header__back" @click="clickBack"></div>
                            <div class="personal_chat_option_dots__container" @click.stop="closeForm()"
                                 @click="openOptionModal">
                                <div class="personal_chat_option_dots"></div>
                                <div class="personal_chat_option" v-bind:class="{is_active_modal:userOption === 1}">
                                    <ul class="personal_chat_option__ul" ref="option_user_modal">
                                        <li @click.stop="closeForm()">Название пункта</li>
                                        <li @click.stop="closeForm()">Название пункта</li>
                                        <li @click.stop="closeForm()">Название пункта</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="personal_chat__avatar"
                                 v-bind:style="{ background: 'url('+selectelAvatarSrc+ userInformation.avatar.src+') no-repeat' }">
                                <div class="chat__online_icon_container" v-if="isOnlineFriend(userInformation.id)">
                                    <div class="chat__online_icon"></div>
                                </div>
                            </div>
                            <div class="personal_chat__title_container">
                                <div class="personal_chat__name">{{ userInformation.surname +' '+
                                    userInformation.name}}
                                </div>
                                <div class="personal_chat__status" v-if="isOnlineFriend(userInformation.id)">Online
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="position: relative; min-height: calc(100vh - 200px);" @click="readMessages">
                    <div class="chat_message_content" ref="message_area">
                        <div class="chat_person_messages">
                            <ul class="person_message">
                                <li v-for="data in dataMessages"
                                    v-bind:class="{right_person:data['message']['right_person']==='right_person'}">
                                    <div class="person_message__avatar"
                                         v-bind:style="{ background: 'url('+selectelAvatarSrc+ data.message.src+') no-repeat' }">
                                    </div>
                                    <div class="person_message_container">
                                        <div class="person_message_text" v-html="data.message.text"></div>
                                        <div class="person_message_date">{{ data.message.created | moment("H : mm")}}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat_write_input_message__wrapper">
                            <div class="chat_write_input_message__container">
                                <div class="chat_write_input_message__smile_icon"></div>
                                <div class="chat_write_input_message__btn_send" @click="sendMessage"></div>
<!--                                <div class="chat_write_input_message__option_icon"></div>-->
                                <div class="chat_write_input_message__clear_chat">Очистить переписку</div>
                                <textarea class="chat_write_input_message" placeholder="Напишите сообщение"
                                          v-model="message" @keyup.enter="sendMessage"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                isActive: false,
                userOption: 0,
                clickedOptionMenu: 0,
                message: '',
                isLeftChat: true,
                isRightChat: true,
                selectelAvatarSrc: 'https://357319.selcdn.ru/artspeople/avatars/',
                scrollMounted: false,
                selectUserMessagesIsRead: false,
            }
        },

        props: [
            'users',
            'userAuth',
            'userSelect',
            'dataMessages',
            'userAvatar',
            'connectedUsers'
        ],

        watch: {
            dataMessages: function (newVal, oldVal) {
                this.getScroll();
            }
        },

        created() {
            document.addEventListener('click', () => this.closeForm());
        },

        mounted() {

            window.innerWidth <= 1100 ? this.isRightChat = false : this.isRightChat = true;

            this.$emit('preloader', [{
                'isPreloader': false
            }]);

            this.getScroll();

        },


        computed: {
            userInformation: function () {
                try {
                    if (this.users.find(item => item.id === this.userSelect)) {
                        return this.users.find(item => item.id === this.userSelect);
                    } else {
                        return {
                            'name': 'not found',
                            'surname': 'not found'
                        };
                    }
                } catch (e) {
                    return {
                        'name': 'not found',
                        'surname': 'not found'
                    };
                }
            }
        },

        updated() {

            if (this.dataMessages.length > 0 && this.scrollMounted === false) {
                this.getScroll();
                this.scrollMounted = true;
            }

        },

        methods: {

            /*-------------------------------------------ОСНОВНЫЕ МЕТОДЫ---------------------------------*/
            selectChatUser: function (id) {

                if (window.innerWidth <= 1100) {
                    this.isLeftChat = false;
                    this.isRightChat = true;
                }

                if (this.userSelect !== id) {
                    this.userSelect = id;
                    let area = this.$refs.message_area;
                    this.$emit('clear', [{
                        'userSelect': this.userSelect
                    }]);

                    axios({
                        method: 'post',
                        url: '/api/get-user-messages',
                        params: {
                            userSelect: this.userSelect
                        }
                    }).then((response) => {

                        Object.keys(response.data).forEach(function (key, id) {
                            let userAuth = '';
                            response.data[key].user_from === this.userAuth['id'] ? userAuth = 'right_person' : userAuth = '';
                            this.dataMessages.push({
                                'message': {
                                    'text': response.data[key].text,
                                    'created': response.data[key].created_at,
                                    'user_from': response.data[key].user_from,
                                    'is_read': response.data[key].is_read,
                                    'name': response.data[key].name,
                                    'surname': response.data[key].surname,
                                    'src': response.data[key].avatar.src,
                                    'type': response.data[key].avatar.type,
                                    'right_person': userAuth
                                },
                            });
                        }.bind(this));

                        this.getScroll();
                        this.selectUserMessagesIsRead = false;
                        this.readMessages();
                    });
                }
            },
            sendMessage: function () {
                if (this.message.length > 0) {

                    axios({
                        method: 'post',
                        url: '/api/send-message',
                        params: {user_id: this.userSelect, message: this.message, time: new Date()}
                    }).then((response) => {
                        if (response.data.status === 'success') {
                            let parameters = {
                                'name': this.userAuth.name,
                                'surname': this.userAuth.surname,
                                'text': this.message,
                                'is_read': 1,
                                'right_person': 'right_person',
                                'type': 'avatars',
                                'user_from': this.userAuth.id,
                                'src': this.userAvatar,
                                'created': new Date()
                            };

                            this.$emit('message', [{
                                'message': parameters
                            }]);

                            this.message = "";
                            this.getScroll();
                        }
                    });
                }
            },

            readMessages: function () {

                let user = this.users.find(x => x.id === Number(this.userSelect));
                console.log(this.userAuth.id);

                //   if (this.selectUserMessagesIsRead === false) {

                console.log('selectUserMessagesIsRead');
                if (user.last_messages_from !== null && user.last_messages_from.count_of_unread > 0 && user.last_messages_from.last_user_changes_id !== this.userAuth.id) {
                    let last_message = 'last_message_from';
                    this.clearReadMessages(last_message, user);
                } else if (user.last_messages_to !== null && user.last_messages_to.count_of_unread > 0 && user.last_messages_to.last_user_changes_id !== this.userAuth.id) {
                    let last_message = 'last_message_to';
                    this.clearReadMessages(last_message.user, user);
                }
                //  }
            },

            clickBack: function () {
                this.isRightChat = false;
                this.isLeftChat = true;
            },

            isOnlineFriend: function (id) {
                let user = this.connectedUsers.find(x => x.channel === Number(id));
                return !!user;
            },


            /*-------------------------------------------ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ-------------------------------*/

            getScroll: function () {
                let area = this.$refs.message_area;
                setTimeout(function () {
                    if (area.selectionStart == area.selectionEnd) {
                        area.scrollTop = area.scrollHeight;
                    }
                });
            },

            closeForm: function () {
                this.userOption = 0;
            },
            openOptionModal: function () {
                this.userOption === 0 ? this.userOption = 1 : this.userOption = 0;
            },

            clearReadMessages: function (last_messages, user) {

                console.log('clearMessages');
                axios({
                    method: 'post',
                    url: '/api/read-messages',
                    params: {
                        user_id: this.userSelect
                    }
                }).then((response) => {
                    if (response.data.status === 'success') this.selectUserMessagesIsRead = true;
                    last_messages === 'last_message_from' ? user.last_messages_from.count_of_unread = 0 : user.last_messages_to.count_of_unread = 0;
                });
            },
        }
    }
</script>
