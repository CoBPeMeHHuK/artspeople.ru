<?php

namespace App\Http\Controllers\Api;

use App\Events\ChatMessage;
use App\Http\Controllers\AppController;
use App\Model\User;
use App\Services\Api\MessageService;
use Illuminate\Http\Request;


class MessageController extends AppController
{

	protected $messageService;

	public function __construct(MessageService $messageService)
	{
		parent::__construct();
		$this->messageService = $messageService;
	}

    public function getUsers(){
        return $this->messageService->getUsers();
    }


    public function sendMessage(Request $request){
        return $this->messageService->sendMessage($request);
    }

    public function getUserMessages(Request $request){
		return $this->messageService->getUserMessages($request);
    }

    public function readMessages(Request $request){
	    return $this->messageService->readMessages($request);
    }


}
