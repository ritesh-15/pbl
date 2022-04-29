package com.example.myfirstapp;

import android.content.Intent;
import android.view.View;
import android.view.WindowManager;


import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button login,signup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getSupportActionBar().setTitle("Car Park");

        login = findViewById(R.id.btnlogin);
        signup =findViewById(R.id.btnsignup);
        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent= new Intent(MainActivity.this , SignIn_Activity.class);
                startActivity(intent);
            }
        });
            signup.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    Intent intent= new Intent(MainActivity.this , signUp_Activity.class);
                    startActivity(intent);
                }
            });
    }


    }
