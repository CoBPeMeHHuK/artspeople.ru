<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form method="POST"  class="login100-form validate-form flex-sb flex-w" action="{{ route('register') }}">
                @csrf
                <span class="login100-form-title p-b-16">
						Регистрация
					</span>

				<div class="first_register_container register_container p-b-10">

	            <span class="p-b-11 auth-label">
						Категория
					</span>
	            <div class="wrap-input100 validate-input m-b-36" >
		            <label for="category"></label>
		            <select id="category" class="input100 form-control form-control-select" name="category">
			            @if (old('category') == 1)
				            <option value="1" selected>Фотографирование</option>
			            @else
				            <option value="1">Фотографирование</option>
			            @endif
			            @if (old('category') == 2)
				            <option value="2" selected>Татуирование</option>
			            @else
				            <option value="2">Татуирование</option>
			            @endif
		            </select>
	            </div>


					<span class="p-b-11 auth-label">
						Имя
					</span>
                <div class="wrap-input100 validate-input m-b-36" >
                    <input  class="input100 form-control @error('name') is-invalid @enderror"  type="text" name="name" value="{{ old('name') }}" >
                    @error('name')
                    <span class="invalid-feedback error-message" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>

                <span class="p-b-11 auth-label">
						Фамилия
					</span>
                <div class="wrap-input100 validate-input m-b-36" >
                    <input  class="input100 form-control @error('name') is-invalid @enderror"  type="text" name="surname" value="{{ old('surname') }}" >
                    @error('surname')
                    <span class="invalid-feedback error-message" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>

				</div>

	            <div class="second_register_container register_container">

                <span class="p-b-11 auth-label">
						E-mail
					</span>
                <div class="wrap-input100 validate-input m-b-36" >
                    <input  class="input100 form-control @error('email') is-invalid @enderror"  type="text" name="email" value="{{ old('email') }}" >
                    @error('email')
                    <span class="invalid-feedback error-message" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror
                    <span class="focus-input100"></span>
                </div>

                <span class="p-b-11 auth-label">
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
                <span class="p-b-11 auth-label">
						Повторите пароль
					</span>
                <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                    <input id="password-confirm" class="input100 form-control @error('password') is-invalid @enderror" type="password"  name="password_confirmation">
                    <span class="focus-input100"></span>
                </div>

                    <div>
                        {!! NoCaptcha::renderJs() !!}
                        {!! NoCaptcha::display() !!}
                        <span class="text-danger">{{ $errors->first('g-recaptcha-response') }}</span>
                    </div>

	            </div>
                <div class="container-login100-form-btn register_button_container">

	                <span class="login100-form-btn register_next">
		                ДАЛЕЕ
	                </span>
	                <span class="login100-form-btn register_back">
		                НАЗАД
	                </span>
	                <button class="login100-form-btn register_button" type="submit">
		                {{ __('ЗАРЕГИСТРИРОВАТЬСЯ') }}
	                </button>
                </div>
            </form>
        </div>
    </div>
</div>
