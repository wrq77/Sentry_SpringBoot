package com.sentry.Sentry.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sentry.Sentry.entity.Sensor;

public interface SensorRepository extends JpaRepository<Sensor, Integer> {

}
