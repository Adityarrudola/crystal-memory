# 🎮 Crystal Memory – Dockerized Web Game

Crystal Memory is a lightweight, browser-based memory game built using HTML, CSS, and JavaScript, containerized with Docker, served via Nginx, and deployed on AWS Elastic Beanstalk. This project demonstrates an end-to-end DevOps workflow, covering local development, containerization, cloud deployment, and infrastructure cleanup.

## 🚀 Project Overview

- Frontend-only interactive memory game  
- Served using Nginx inside a Docker container  
- Source code hosted on GitHub  
- Containerized locally using Docker Desktop with WSL2  
- Deployed and tested on AWS Elastic Beanstalk  
- Cloud resources terminated after testing to avoid billing  

## 🧱 Tech Stack

Frontend: HTML, CSS, JavaScript  
Web Server: Nginx  
Containerization: Docker  
Cloud Platform: AWS (Elastic Beanstalk, EC2, IAM, S3)  
Base OS: Ubuntu 22.04  

## 🔄 Architecture & Flow

Local Development → GitHub Repository → Docker Image (Nginx + Game Files) → Docker Container → AWS Elastic Beanstalk → EC2 Instance (Free Tier) → Public Application URL

## 🛠️ Step-by-Step Workflow

### 1. Game Development  
The memory game was built using plain HTML, CSS, and JavaScript with a focus on clean UI, responsive design, and smooth gameplay logic. All static assets are served directly by Nginx.

### 2. Version Control with GitHub  
A GitHub repository was created to manage the source code and configuration files. GitHub acts as the single source of truth for the project and enables easy integration with Docker and cloud platforms.

### 3. Dockerization  
A Dockerfile was created using Ubuntu 22.04 as the base image. Nginx was installed and configured to serve the static game files. The application is exposed on port 80 inside the container and mapped to a host port during runtime. Docker concepts such as images, containers, detached mode, and port mapping were used.

### 4. Local Testing with Docker Desktop  
Docker Desktop was installed on a Windows system using the WSL2 backend. WSL memory limits were configured for stability. The Docker image was built locally and the container was run in detached mode. The game was tested successfully using a local browser.

### 5. Cloud Deployment using AWS Elastic Beanstalk  
A single-instance Elastic Beanstalk environment was created using the Docker platform. AWS-managed IAM roles were used for both the Elastic Beanstalk service role and the EC2 instance profile. The Docker container was deployed to an EC2 instance, making the application publicly accessible through an Elastic Beanstalk-generated URL.

### 6. Security and Cost Management  
Only AWS-managed IAM policies were used, following the principle of least privilege. The EC2 instance type was kept Free Tier eligible. Elastic IP usage was monitored, and no unnecessary permissions or resources were created.

### 7. Resource Cleanup  
After successful testing, the Elastic Beanstalk environment was terminated. This removed all associated resources, including EC2 instances, Elastic IPs, and security groups, ensuring zero ongoing AWS costs.

## 🧠 Key Learnings

This project provided hands-on experience with Docker on Windows using WSL2, Linux memory management differences, container-based application serving using Nginx, IAM role configuration in AWS, Elastic Beanstalk deployment workflows, and safe cloud resource cleanup practices.

## 📌 Future Enhancements

Future improvements may include setting up CI/CD pipelines using GitHub Actions, pushing Docker images to Amazon ECR, enabling HTTPS using AWS Certificate Manager, deploying via ECS Fargate, and adding monitoring and logging.

## 👤 Author

Aditya Rudola  
Cloud / DevOps Engineer  
GitHub: https://github.com/Adityarrudola/crystal-memory
