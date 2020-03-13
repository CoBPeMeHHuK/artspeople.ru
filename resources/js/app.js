require('./bootstrap');
window.io = require('socket.io-client');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(require('vue-moment'));
import VueCoreVideoPlayer from 'vue-core-video-player';
Vue.use(VueCoreVideoPlayer);
import VModal from 'vue-js-modal'



Vue.use(VModal);
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);


import Chat from './components/Chat.vue';
import Person from './components/Person.vue';
import PersonWorks from './components/PersonWorks.vue';
import PersonLikes from './components/PersonLikes.vue';
import PersonAbout from './components/PersonAbout.vue';
import Works from './components/Works.vue';
import Contacts from './components/Contacts';
import Friends from './components/Friends';
import Settings from './components/Settings';
import Notifications from './components/Notifications';

Vue.config.errorHandler = function (err, vm, info) {

}


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/profile/mail',
            name: 'mail',
            component: Chat
        },
        {
            path: '/profile/friends',
            name: 'friends',
            component: Friends
        },
        {
            path: '/profile/works',
            name: 'works',
            component: Works,
        },
        {
            path: '/profile/contacts',
            name: 'Contacts',
            component: Contacts,
        },
        {
            path: '/profile/settings',
            name: 'Settings',
            component: Settings
        },

        {
            path: '/profile/notifications',
            name: 'Notifications',
            component: Notifications
        },

        {
            path: '/profile/:id',
            name: 'person',
            component: Person,
            children: [
                {
                    name: 'personworks',
                    path: '',
                    component: PersonWorks
                },
                {
                    name: 'personlikes',
                    path: 'likes',
                    component: PersonLikes
                },
                {
                    name: 'personabout',
                    path: 'about',
                    component: PersonAbout
                }
            ]
        },

    ],
});

let filter = function (text, length, clamp) {
    clamp = clamp || '...';
    let node = document.createElement('div');
    node.innerHTML = text;
    let content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

const app = new Vue({
    el: '#app',
    components: {
        Person
    },
    router,
    data: function () {
        return {
            preloader: true,
            isOpenFriends: false,
            selectFriend: 0,
            selectedBefore: 0,
            isOpenUserOption: false,
            users: [],
            userAuth: [],
            userAvatar: '',
            userAuthAvatar: '',
            userAuthName: '',
            userAuthSurname: '',
            userAuthQuote: '',
            userSelect: 0,
            dataMessages: [],
            connectedUsers: [],
            friendRequests: [],
            statuses: [],
            isLoadingUserInformation:false,
            selectelAddress:'https://357319.selcdn.ru/artspeople/'
        }
    },
    beforeCreate() {


        axios({
            method: 'post',
            url: '/api/get-auth-user-information',
        }).then((response) => {

            this.userAuthAvatar = 'https://357319.selcdn.ru/artspeople/' + response.data.avatar.type + '/' + response.data.avatar.src;
            this.userAuthName = response.data.name;
            this.userAuthSurname = response.data.surname;
            this.userAuthQuote = response.data.user_information.quote;
            this.isLoadingUserInformation = true;


        });

        axios({
            method: 'post',
            url: '/api/get-message-users',
        }).then((response) => {

            this.users = response.data.users;

            if (this.users !== false) {
                this.userAuth = response.data.user;
                this.userAvatar = response.data.userAvatar.src;
                this.userSelect = response.data.users[0]['id'];

                let socket = io.connect('artspeople.ru:3000');
                socket.emit('connected_server', {channel: this.userAuth.id});

                socket.on('users_connected', function (data) {
                    this.connectedUsers = data['users'];
                }.bind(this));

                /*-------------------Достаём все сообщения первого пользователя---------------*/
                this.dataMessages = [];

                axios({
                    method: 'post',
                    url: '/api/get-user-messages',
                    params: {
                        userSelect: this.userSelect
                    }
                }).then((response) => {

                    Object.keys(response.data).forEach(function (key, id) {
                        let userAuth = '';
                        if (response.data[key].user_from == this.userAuth['id']) {
                            userAuth = 'right_person';
                        }
                        this.dataMessages.push({
                            'message': {
                                'text': response.data[key].text,
                                'created': response.data[key].created_at,
                                'user_from': response.data[key].user_from,
                                'is_read': response.data[key].is_read,
                                'name': response.data[key].get_message_user.name,
                                'surname': response.data[key].get_message_user.surname,
                                'src': response.data[key].avatar.src,
                                'type': response.data[key].avatar.type,
                                'right_person': userAuth
                            },
                        });
                    }.bind(this));
                });


                /*-------------------------------------------------------------------------*/

                /*--------------------------------ПОЛУЧАЕМ СООБЩЕНИЕ ЧЕРЕЗ СОКЕТ----------------------------*/

                socket.on("chat_message." + this.userAuth.id + ":App\\Events\\ChatMessage", function (data) {

                    let parameters = {
                        'message': {
                            'name': data.message.name,
                            'surname': data.message.surname,
                            'text': data.message.message,
                            'src': data.message.avatar,
                            'type': data.message.type,
                            'right_person': '',
                            'is_read': data.message.is_read,
                            'user_from': data.message.user_from,
                            'created': new Date()
                        }
                    };

                    if (data.message.user_from == this.userSelect) {
                        this.dataMessages.push(parameters);
                        this.isActive = false;
                    }

                    let user = this.users.find(x=>x.id === Number(data.message.user_from));
                    this.addLastMessage(user,data);

                }.bind(this));

                /*------------------------------------------------------------------------------------------*/
            }
        });
    },


    created() {
        document.addEventListener('click', () => this.clickOut());
        document.addEventListener('click', () => this.clickOutFriendContainer());

        axios({
            method: 'post',
            url: '/api/notifications',
        }).then((response) => {
            this.friendRequests = response.data.requests;
            this.statuses = response.data.statuses;
        });

    },

    mounted() {
        $(".hamburger").click(function () {

            if (!$('.hamburger').hasClass('is-active')) {

                $(".hamburger").addClass('is-active');
                $(".modalMenu").css({display: 'block'});
                $(".modalMenu").css('z-index', '550');
                $(".hamburger").css('z-index', '551')

            } else {
                $(".hamburger").removeClass('is-active');
                $(".modalMenu").css({display: 'none'})
            }

        });
    },

    computed: {
        countOfUnreadMessages: function () {
            let messages = 0;
            let users = this.users;
            Object.keys(users).forEach(function (key) {
                if (users[key]['last_messages_from'] === null) {
                    if (users[key]['last_messages_to']['last_user_changes_id'] !== this.userAuth.id) {
                        messages += users[key]['last_messages_to']['count_of_unread'];
                    }
                } else {
                    if (users[key]['last_messages_from']['last_user_changes_id'] !== this.userAuth.id) {
                        messages += users[key]['last_messages_from']['count_of_unread'];
                    }
                }
            }.bind(this));

            return messages;
        },

        countOfNotifications: function () {
            return this.friendRequests.length;
        },
        getAuthUserAvatar: function () {
            return this.userAuthAvatar;
        }
    },
    methods: {

        isOnlineFriend:function(id){
            let user = this.connectedUsers.find(x=>x.channel === Number(id));
            return !!user;
        },

        getPreloader: function (data) {
            this.preloader = data[0]['isPreloader']
        },

        clearMessages: function (data) {
            this.userSelect = data[0]['userSelect'];
            this.dataMessages = [];
        },


        /***********************************************  СООБЩЕНИЕ ИЗ ЧАТ КОМПОНЕНТА  ****************************************************/

        getMessage: function (data) {
            this.dataMessages.push({
                'message': data[0]['message'],
            });

            let user = this.users.find(x => x.id === this.userSelect);
            if(user.last_messages_from === null){
                user.last_messages_to.message = data[0]['message'].text;
                user.last_messages_to.updated_at = new Date();
            }else{
                user.last_messages_from.message = data[0]['message'].text;
                user.last_messages_from.updated_at = new Date();
            }
        },

        clickOut: function () {
            this.isOpenFriends = false;
            this.selectFriend = 0;
        },

        clickOutFriendContainer: function () {
            this.selectFriend = 0;
        },

        clickMyFriends: function () {
            this.selectFriend = 0;
        },

        changeComponents: function () {
            this.preloader = true;
        },

        changeComponentsToProfile: function ($id) {
            if ($id != this.$route.params.id) this.preloader = true;
        },
        openFriendsContainer: function () {
            this.isOpenFriends ? this.isOpenFriends = false : this.isOpenFriends = true;
        },
        showFriendsOption: function (event) {

            let response = '';
            this.selectFriend === event ? response = true : response = false;

            return response;
        },
        toggleUserOption: function () {
            this.isOpenUserOption === false ? this.isOpenUserOption = true : this.isOpenUserOption = false;
        },
        changeAvatar: function (data) {
            this.userAuthAvatar = data[0]['avatar'];
        },

        isValidRouter: function ($id) {
            return this.$route.params.id != $id;
        },

        addLastMessage: function(user,data){

            if (user.last_messages_from !== null) {

                user.last_messages_from.count_of_unread++;
                user.last_messages_from.message = data.message.message;
                user.last_messages_from.last_user_changes_id = data.message.user_from;
                user.last_messages_from.updated_at = new Date();

            } else if(user.last_messages_to !== null) {

                user.last_messages_to.count_of_unread++;
                user.last_messages_to.message = data.message.message;
                user.last_messages_to.last_user_changes_id = data.message.user_from;
                user.last_messages_to.updated_at = new Date();
            }
        }
    }


});


