package com.jma.sensordataprocessor.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jma.sensordataprocessor.models.Weather;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriTemplate;

import java.net.URI;

@Service
public class WeatherService {
  private static final String WEATHER_API_URL =
    "http://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={weatherApiKey}&units=metric";

  @Value("${api.openweathermap.key}") private String weatherApiKey;
  private final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  public WeatherService(RestTemplateBuilder restTemplateBuilder, ObjectMapper objectMapper) {
    this.restTemplate = restTemplateBuilder.build();
    this.objectMapper = objectMapper;
  }

  public Weather getWeather(double latitude, double longitude) {
    URI url = new UriTemplate(WEATHER_API_URL).expand(latitude, longitude, weatherApiKey);
    ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
    return convertWeatherData(response);
  }

  private Weather convertWeatherData(ResponseEntity<String> response) {
    try {
      JsonNode root = objectMapper.readTree(response.getBody());
      return new Weather(
        root.path("main").path("temp").asDouble(),
        root.path("wind").path("speed").asDouble(),
        root.path("main").path("humidity").asDouble()
      );
    } catch (JsonProcessingException e) {
      throw new RuntimeException("Error parsing JSON", e);
    }
  }
}
