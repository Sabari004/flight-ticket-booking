package com.iamneo.security.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.iamneo.security.dto.FeedbackRequest;
import com.iamneo.security.dto.UserRequest;
import com.iamneo.security.entity.User;
import com.iamneo.security.entity.Userf;
import com.iamneo.security.repository.FeedRepository;
import com.iamneo.security.repository.UserRepository;
import com.iamneo.security.vo.Feedback;
import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@RequiredArgsConstructor
@Service
public class UserService {
	private final FeedRepository userRepository;
	
	private final RestTemplate restTemplate;

	public void addUserFeedback(UserRequest userRequest) {
		var user = Userf.builder().name(userRequest.getName()).email(userRequest.getEmail()).build();
		var feedback = FeedbackRequest.builder().email(userRequest.getEmail()).feedback(userRequest.getFeedback()).build();
		userRepository.save(user);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<FeedbackRequest> requestEntity = new HttpEntity<>(feedback, headers);
		restTemplate.postForObject("http://FEEDBACK-SERVICE/api/v1/feed/addFeedback", requestEntity, Feedback.class);
	}
}
