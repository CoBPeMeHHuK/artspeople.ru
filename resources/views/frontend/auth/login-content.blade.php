<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form method="POST"  class="login100-form validate-form flex-sb flex-w" action="{{ route('login') }}">
                @csrf
					<span class="login100-form-title p-b-16">
						Авторизация
					</span>

                <span class="txt1 auth-label">
						E-mail
					</span>
                <div class="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
                    <input  class="input100 form-control @error('email') is-invalid @enderror"  type="text" name="email" value="{{ old('email') }}" >
                    @error('email')
                    <span class="invalid-feedback error-message" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>

                <span class="txt1 auth-label">
						Пароль
					</span>
                <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                    <input  class="input100 form-control @error('password') is-invalid @enderror" type="password" name="password">
                    @error('password')
                    <span class="invalid-feedback error-message" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>

                <div class="flex-sb-m w-full p-b-16">
                    <div class="contact100-form-checkbox">
                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember" checked>
                        <label class="label-checkbox100 label-remember" for="ckb1">
                            Запомнить меня
                        </label>
                    </div>

                    @if (Route::has('password.request'))
                        <a class="btn btn-link txt3" href="{{ route('password.request') }}">
                            {{ __('Забыли ваш пароль ?') }}
                        </a>
                    @endif

                </div>

                <div class="container-login100-form-btn register_button_container">
                    <button class="login100-form-btn login" type="submit">
                        {{ __('ВОЙТИ') }}
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
