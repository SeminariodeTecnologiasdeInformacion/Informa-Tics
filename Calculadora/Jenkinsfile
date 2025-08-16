pipeline {
  agent any

  tools {
    jdk   'jdk-21'        // Configúralo en Manage Jenkins > Global Tool Configuration
    maven 'maven-3.9.6'   // O el nombre que tengas para Maven
  }

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        // Clona tu repo público
        git branch: 'main', url: 'https://github.com/joseprogramacion2/parcial-aseguramiento2.git'
      }
    }

    stage('Build') {
      steps {
        bat 'mvn -B -ntp clean compile'
      }
    }

    stage('Test') {
      steps {
        bat 'mvn -B -ntp test'
      }
      post {
        always {
          // Publica resultados de pruebas (si no hay tests, no falla)
          junit allowEmptyResults: true, testResults: 'target/surefire-reports/*.xml'
        }
      }
    }

    stage('Run') {
      steps {
        // Ejecuta la app (ajusta el main si tu clase se llama distinto)
        bat 'mvn -B -ntp exec:java -Dexec.mainClass=com.mycompany.calculadora.Main'
      }
    }

    stage('Package') {
      steps {
        // Empaqueta el .jar (omite tests aquí)
        bat 'mvn -B -ntp -DskipTests package'
      }
    }
  }

  post {
    success {
      // Archiva artefactos para descargarlos desde Jenkins
      archiveArtifacts artifacts: 'target/*.jar', fingerprint: true, allowEmptyArchive: true
      echo '✅ Pipeline OK'
    }
    failure {
      echo '❌ Pipeline falló'
    }
    always {
      echo "Pipeline finalizado."
    }
  }
}
