package com.basicunanu.SampleApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.basicunanu.SampleApplication.entity.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, Integer> {

}
