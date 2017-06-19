package com.example.pingservice;

public final class PingResponse {

	private String message;
	
	public PingResponse(final String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
