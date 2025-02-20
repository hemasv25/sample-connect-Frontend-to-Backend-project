package com.basicunanu.SampleApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basicunanu.SampleApplication.entity.TaskEntity;
import com.basicunanu.SampleApplication.repository.TaskRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/tasks")
public class TaskController {

	@Autowired
	private TaskRepository taskrepo;

	/**
	 * Get Method
	 * 
	 * @return
	 */
	@GetMapping("/hello-world")
	public String helloWorld() {

		return "Hello World Form SampleApplication";

	}

	/**
	 * Post Map Method
	 * 
	 * @return
	 */

	@PostMapping
	public TaskEntity CreateTask(@RequestBody TaskEntity taskEntity) {

		taskrepo.save(taskEntity);

		return taskEntity;
	}

	/**
	 * GETMAPPING method
	 * 
	 * @return
	 */

	@GetMapping
	public List<TaskEntity> getAllTask() {

		return taskrepo.findAll();
	}

	/**
	 * Put Method
	 * 
	 * @return
	 * 
	 * @return
	 */

	@PutMapping("/{id}") // Parameter
	public TaskEntity getUpadate(@PathVariable int id, @RequestBody TaskEntity taskEntity) {

		taskEntity.setId(id);

		return taskrepo.save(taskEntity);

	}

	/**
	 * 
	 * DELETE
	 * 
	 * @return
	 */

	@DeleteMapping("/{id}")
	public void deleteTask(@PathVariable int id) {
		taskrepo.delete(id);
	}
}
