# proyecto1TopTel

## Topicos especiales en telematica

Realizado por:
- Stiven Hurtado Loaiza


![image](https://user-images.githubusercontent.com/30469862/63234944-36b18100-c1fd-11e9-9627-99f1158fded5.png)

### Monitoria del 19 de julio
El monitor explica lo que debemos hacer de proyecto1, nos indica que trabajemos con docker y docker compose, despliega una aplicacion para darnos un ejemplo, ademas nos indica cuales serian las herramientas que podriamos usar (MEAN) para desarrollar el proyecto.
Este dia se accede al DCA pero en mi caso no tenia la ip ni la contraseña de la vpn por lo cual no se puede probar.

### Clase del 25 de julio
Se logra acceder al DCA correctamente y el profesor nos da una explicacion mas profunda del proyecto.

### 01-08-2019
Se hace el primer commit de registro de usuarios.

### 04-08-2019
Se tuvo problemas con git ya que al ejecutar el comando " $git push -f origin master" se borro lo que se tenia en el git, pero se vuelven hacer los commit respectivamente y añadiendo el archivo de docker.file, docker-compose.yml y nginx.conf

### 09-08-2019
Se hace commit de la base de datos utilizando mongodb

### 13-08-2019
Se crea la imagen de nginx en docker-compose.yml

### 14-08-2019
La aplicacion trabaja localmente con el registro de usuarios 

![image](https://user-images.githubusercontent.com/30469862/63234040-0f58b500-c1f9-11e9-90d1-d880207d63dd.png)

Se crean las operaciones CRUD, donde el usuario registrado puede hacer dichas operaciones 

![image](https://user-images.githubusercontent.com/30469862/63234608-9b6bdc00-c1fb-11e9-9d9b-bf80a63e4abd.png)

### 17-08-2019
Se agrega certificado de nginx en la carpeta ssl
Se monta la aplicacion al DCA, se accede con la ip : 192.168.10.139 y dominio: shurtad5.dis.eafit.edu.co

![image](https://user-images.githubusercontent.com/30469862/63235345-a07e5a80-c1fe-11e9-9762-a0c650f4f545.png)

### 18-08-2019
Ejecuta en la nube(Amazon), se requiere tener ip fija, la cual se hace el respectivo procedimiento la cual es : 18.220.208.133 y se adquiere el dominio por https://my.freenom.com, donde se accede mediante shurtad52019.tk

![image](https://user-images.githubusercontent.com/30469862/63235437-00750100-c1ff-11e9-82c2-d0dd6ffc3268.png)

### 15-09-2019
Se agrega al marco de referencia los QA, implementados y especificados al proyecto (Disponibilidad, seguridad y rendimiento)
en el cual se trabaja pruebas de carga y stress en rendimiento con JMeter, se desplega la app en otro servidor y se instala nginx en otro servidor para el balanceo de carga, en seguridad se trabaja con el protocolo 443 y se trabaja con una dependencia (bcryptjs) en el cual encripta la contraseña








