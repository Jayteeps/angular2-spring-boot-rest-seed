package com.example.pingservice;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @RequestMapping("/ping")
    public PingResponse ping() {
        return new PingResponse(getClass().getCanonicalName() + " " + new Date().toString());
    }
}
