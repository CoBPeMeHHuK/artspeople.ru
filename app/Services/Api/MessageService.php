<?php
    
    namespace App\Services\Api;
    
    use App\Events\ChatMessage;
    use App\Model\LastMessageUser;
    use App\Model\Message;
    use App\Model\User;
    use Carbon\Carbon;
    use Illuminate\Support\Facades\Auth;
    use Illuminate\Support\Facades\DB;
    
    class MessageService extends AppService
    {
        public function __construct()
        {
            parent::__construct();
        }
        
        public function sendMessage($request)
        {
            Auth::check() ? $auth_id = Auth::id() : $auth_id = false;
            $request->user_id ? $user_id = $request->user_id : $user_id = false;
            strlen($request->message) > 0 ? $message = $request->message : $message = false;
            
            if ($auth_id && $user_id && $message) {
                
                /*************************************************/
                $channels = 'news-action.' . $user_id;
                $user = Auth::user();
                $user_name = $user->name;
                $user_surname = $user->surname;
                $avatarSrc = $user->avatar->src;
                
                
                $parameters = [
                    'channels' => $channels,
                    'name' => $user_name,
                    'surname' => $user_surname,
                    'avatar' => $avatarSrc,
                    'message' => $message,
                    'user_from' => $auth_id,
                    'is_read' => 0,
                    'right_person' => '',
                    'type' => 'avatars'
                ];
                
                ChatMessage::dispatch($parameters);
                /*************************************************/
                
                
                $messageResponse = Message::query()->create([
                    'user_from' => $auth_id,
                    'user_to' => $user_id,
                    'text' => $message,
                    'is_read' => 0,
                    'created_at' => Carbon::now()
                ]);
                
                $auth_id < $user_id ? $uniqueRecord = $auth_id . '-' . $user_id : $uniqueRecord = $user_id . '-' . $auth_id;
                
                $lastMessage = LastMessageUser::where(['unique_users_record' => $uniqueRecord])
                    ->first();
                
                if ($lastMessage) {
                    
                    $lastMessageResponse = LastMessageUser::where(['unique_users_record' => $uniqueRecord])->update([
                        'message' => $message,
                        'count_of_unread' => DB::raw('count_of_unread + 1'),
                        'last_user_changes_id' => $auth_id,
                        'updated_at' => Carbon::now()
                    ]);
                    
                } else {
                    $lastMessageResponse = LastMessageUser::query()->create([
                        'user_from' => $auth_id,
                        'user_to' => $user_id,
                        'message' => $message,
                        'count_of_unread' => 1,
                        'unique_users_record' => $uniqueRecord,
                        'last_user_changes_id' => $auth_id,
                        'created_at' => Carbon::now()
                    ]);
                }
                
                if ($messageResponse && $lastMessageResponse) {
                    return [
                        'status' => 'success',
                        'message' => $message
                    ];
                } else {
                    return [
                        'status' => 'error',
                        'message' => 'Не удалось отправить сообщение.'
                    ];
                }
            } else {
                return [
                    'status' => 'error',
                    'message' => 'Пользователь не авторизирован, либо не выбран пользователь, либо сообщение пустое.'
                ];
            }
        }
        
        public function getUserMessages($request)
        {
            
            return $this->getMessages($request);
            
        }
        
        public function readMessages($request)
        {
            Auth::check() ? $auth_id = Auth::id() : $auth_id = false;
            $request->user_id ? $user_id = $request->user_id : $user_id = false;
            
            if ($user_id && $auth_id) {
                
                $auth_id < $user_id ? $uniqueRecord = $auth_id . '-' . $user_id : $uniqueRecord = $user_id . '-' . $auth_id;
                
                $lastMessageResponse = LastMessageUser::where(['unique_users_record' => $uniqueRecord])->update([
                    'count_of_unread' => 0,
                    'updated_at' => Carbon::now()
                ]);
                
                if ($lastMessageResponse > 0) {
                    return [
                        'status' => 'success',
                        'message' => 'messages read',
                    ];
                } else {
                    return [
                        'status' => 'error',
                        'message' => 'Запись с последним сообщением не найдена.'
                    ];
                }
            } else {
                return [
                    'status' => 'error',
                    'message' => 'Пользователь не найден или вы не авторизованы.'
                ];
            }
            
        }
        
        public static function getAuthUserMessages()
        {
            $authUserId = Auth::id();
            $users = User::whereHas('messages_to', function ($query) use ($authUserId) {
                $query->where('user_from', $authUserId);
            })->orWhereHas('messages_from', function ($query) use ($authUserId) {
                $query->where('user_to', $authUserId);
            })
                ->with(array(
                    'last_messages_to' => function ($query) use ($authUserId) {
                        $query->where('user_from', $authUserId);
                    }
                ))
                ->with(array(
                    'last_messages_from' => function ($query) use ($authUserId) {
                        $query->where('user_to', $authUserId);
                    }
                ))
                ->with('avatar')
                ->get();
            
            return $users;
        }
        
        
        /*----------------------------------------------------Вспомогательные методы-------------------------------------*/
        
        private function getMessages($request)
        {
            $messages = Message::where([['user_from', Auth::id()], ['user_to', $request->userSelect]])
                ->orWhere([['user_to', Auth::id()], ['user_from', $request->userSelect]])
                ->with(['avatar', 'getMessageUser'])
                ->get();
            return $messages;
        }
        
        
    }
