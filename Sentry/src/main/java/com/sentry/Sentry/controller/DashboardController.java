package com.sentry.Sentry.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {
	 @GetMapping("/dashboard")
	    public String displayDashboardPage(){
	        return "dashboard";
	    }

}
