
@if($isAuth)
	<div class="left-section">
		<div class="left_section_container">
			<div class="left_section_options_container">
				<div class="left-section__logo">
					<img src="{{ asset('images/logo/logo_white5.png') }}">
				</div>

				<div class="left-section__avatar"
				     v-bind:style="{ background: 'url('+getAuthUserAvatar+') no-repeat' }">

				</div>
				<div class="left-section__info">
					<div class="title-section">
						<p class="title-section__name">@{{ userAuthName+' '+userAuthSurname }}</p>
						<div class="icons-container" @click.stop="clickOut()" @click="toggleUserOption"><span class="title-section__icons" :class="{rotate:isOpenUserOption}"></span></div>
						<div class="title_section__options" :class="{is_active:isOpenUserOption}">
							<ul class="title_section__ul">
								<li @click="isOpenUserOption = false">Название пункта</li>
								<li @click="isOpenUserOption = false">Название пункта</li>
								<li @click="isOpenUserOption = false">Название пункта</li>
							</ul>
						</div>
					</div>
					<p class="description" v-html="userAuthQuote">
					</p>
				</div>
				<div class="left-section__menu">
					<ul class="left-menu__items">
						<li>
							<router-link class="left-menu__item-container left_menu_homepage"   to="/profile/{{ $user->id }}">
								<span class="left-item__icon left_icon_homepage"></span>
								<p>Мой профиль</p>
							</router-link>
						</li>
						<li>
							<a class="left-menu__item-container left_menu_friends" @click.stop="openFriendsContainer" @click="clickMyFriends()" :class="{is_active:isOpenFriends}">
								<span class="left-item__icon left_icon_friends"></span>
								<p>Мои друзья</p>
								{{--<span class="count_message">1</span>--}}
							</a>
						</li>
						<li>
							<router-link @click="changeComponents" class="left-menu__item-container left_menu_mail" to="/profile/mail">
								<span class="left-item__icon left_icon_mail"></span>
								<p>Сообщения</p>
								<span class="count_message" :class="{is_visible_flex:countOfUnreadMessages > 0}" v-html="countOfUnreadMessages"></span>
							</router-link>
						</li>
						<li>
							<router-link class="left-menu__item-container left_menu_works"   to="/profile/works">
								<span class="left-item__icon left_icon_works"></span>
								<p>Мои работы</p>
							</router-link>
						</li>


						<li>
							<router-link @click="changeComponents" class="left-menu__item-container left_menu_contacts" to="/profile/settings">
								<span class="left-item__icon left_icon_contacts"></span>
								<p>Настройки</p>
							</router-link>
						</li>

						<li>
							<router-link @click="changeComponents" class="left-menu__item-container left_menu_notifications" to="/profile/notifications">
								<span class="left-item__icon left_icon_notifications"></span>
								<p>Уведомления</p>
								<span class="count_message" :class="{is_visible_flex:countOfNotifications > 0}" v-html="countOfNotifications"></span>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="left_section__friend_options" :class="{is_visible:isOpenFriends}" @click.stop="clickOut()" @click="isOpenFriends = true">
					<div class="friend_options__container">
						<ul class="friend_options_ul">
                            @foreach($friends as $friend)
							<li class="friend_options__li">
								<div class="option_people">
									<div class="option_people__avatar_container">
										@if($friend->second_user == Auth::id())
										<div class="option_people__avatar"
										     style="background: url({{ asset('https://357319.selcdn.ru/artspeople/'.$friend->firstUser->avatar->type.'/'.$friend->firstUser->avatar->src) }}) no-repeat;">
											@elseif($friend->first_user == Auth::id())
												<div class="option_people__avatar"
												     style="background: url({{ asset('https://357319.selcdn.ru/artspeople/'.$friend->secondUser->avatar->type.'/'.$friend->secondUser->avatar->src) }}) no-repeat;">
													@endif
											<div class="option_people__online_icon_container">
												<div class="option_people__online_icon"></div>
											</div>
										</div>
									</div>
										@if($friend->second_user == Auth::id())
									<router-link   to="/profile/{{ $friend->firstUser->id }}">
									<div class="option_people_name" @click="changeComponents">
										{{ $friend->firstUser->surname.' '.$friend->firstUser->name }}
									</div>
										@elseif($friend->first_user == Auth::id())
											<router-link   to="/profile/{{ $friend->secondUser->id }}">
												<div class="option_people_name" @click="changeComponents">
													{{ $friend->secondUser->surname.' '.$friend->secondUser->name }}
												</div>
										@endif
									</router-link>
										@if($friend->second_user == Auth::id())
									<div class="option_people_dots" @click.stop="clickOutFriendContainer()" @click="selectFriend = {{ $friend->firstUser->id }}" :class="{is_active:showFriendsOption({{ $friend->firstUser->id }})}">
										<div class="option_people_dots__menu"  v-show="showFriendsOption({{ $friend->firstUser->id }})">
											@elseif($friend->first_user == Auth::id())
												<div class="option_people_dots" @click.stop="clickOutFriendContainer()" @click="selectFriend = {{ $friend->secondUser->id }}" :class="{is_active:showFriendsOption({{ $friend->secondUser->id }})}">
													<div class="option_people_dots__menu"  v-show="showFriendsOption({{ $friend->secondUser->id }})">
												@endif
											<ul class="option_people_dots__ul">
												<li @click.stop="isOpenFriends = false">Написать сообщение</li>
												<li @click.stop="isOpenFriends = false">Посмотреть друзей</li>
												<li @click.stop="isOpenFriends = false">Удалить из друзей</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
                            @endforeach
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	@endif
