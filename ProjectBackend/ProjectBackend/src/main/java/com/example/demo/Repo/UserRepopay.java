package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Payment;

@Repository
public interface UserRepopay  extends JpaRepository<Payment,String>{

}