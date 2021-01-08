package com.jma.sensordataprocessor.repositories;

import com.jma.sensordataprocessor.models.Sensor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SensorRepository extends MongoRepository<Sensor, String> {
}
