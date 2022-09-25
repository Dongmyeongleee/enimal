pipeline {
    agent any
    stages {
        stage("build"){
            steps {
                script{
                    try {
                        sh 'docker stop frontend'
                        sh 'docker rm frontend'
                        sh 'docker rmi wlsgh97/nahonsan-frontend'
                    } catch (e) {
                        sh 'echo "fail to stop and remove container"'
                    }
                }
                sh 'docker build -t wlsgh97/nahonsan-frontend ./frontend —build-arg KAKAO_MAP=${KAKAO_MAP} —build-arg AWS_ACCESS_KEY=${AWS_ACCESS_KEY} —build-arg AWS_SECRET_KEY=${AWS_SECRET_KEY}  —build-arg KAKAO_ID=${KAKAO_ID} —build-arg NAVER_ID=${NAVER_ID} —build-arg GOOGLE_ID=${GOOGLE_ID} '
                sh 'echo "$DOCKER_HUB_PASSWORD" | docker login -u "$DOCKER_HUB_ID" —password-stdin'
                echo 'Build image…'
                sh "docker push wlsgh97/nahonsan-frontend"
                sh "docker run -d -p 3000:3000 —name frontend wlsgh97/nahonsan-frontend"
            }
        }
    }
}
