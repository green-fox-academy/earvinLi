package com.jma.sensordataprocessor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class SensordataprocessorApplication {
	public static void main(String[] args) {
		SpringApplication.run(SensordataprocessorApplication.class, args);
	}
}
