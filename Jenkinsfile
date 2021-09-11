pipeline{
    agent{
        label "node"
    }
    stages{
        stage("GIT_CHECKOUT"){
            steps{
                echo "========executing GIT_CHECKOUT========"
                git "https://github.com/pkboe/enlist.git"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========GIT_CHECKOUT executed successfully========"
                }
                failure{
                    echo "========GIT_CHECKOUT execution failed========"
                }
            }
        }
                stage("Build"){
            steps{
                echo "========executing Build ========"
                sh "npm run compile"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========Build executed successfully========"
                }
                failure{
                    echo "========Build execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}