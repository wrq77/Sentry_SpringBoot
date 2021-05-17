package com.sentry.Sentry.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoomController {
	 @GetMapping("/room")
	    public String displayRoomPage(){
	        return "room";
	    }


}
