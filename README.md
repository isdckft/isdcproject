# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

# Isdcproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
This project is the source code of this page : http://angular.isdckft.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Make Docker image 
docker build -t isdckft/isdcproject .

## Docker push
docker push isdckft/isdcproject
## Docker RUN
docker run -p 80:80 isdckft/isdcproject 
## Docker run, amikor ne álljon le
##docker run -t isdckft/isdcproject

## Container-be belépés, ha van benne bash
docker exec -it container-id bash

## helm létrehozás root könyvtárból
 helm create helmc

## Szükséges values.yaml módosítások
1. Meg kell adni a repository-t, ahonnan a docker imaget-t lehúzza a k8s-t
Meg kell adni a tag-et : latest

2. K8S-ben meg létre kell hozni egy secretet, ami connectál a registry-hez: 

Dockerhub esetén:
https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/

kubectl create secret docker-registry regcred --docker-server=hub.docker.com --docker-username=isdckft --docker-password=<your-pword> --docker-email=kovacs.attila@isdc.hu

Azure ACR esetén:


Azure Portal
Ekkor: --docker-server=isdckft.azurecr.io

Két lehetőség. Vagy az admin user/jelszót használjuk, ekkor az ACR-ben az ACCESS keys-nél engedélyezni kell az admin usert. Ott található a usernév jelszó.
--docker-username= az ott található username
--docker-password= az ott található password

Vagy Service principall-al:


AD választása
Create App
	Ott egy új app-ot létrehozni (Pl. Service Principal to ACR)
	Abban létrehozni egy secretet.
	
Ezutaán elmenni Az ACR-hez
   OTT az IAM-ban Add role
   Ott kiválasztani az ACR pull role-t
   Ehhez hozzárendelni létrehozott:  Service Principal to ACR)
Ekkor 
--docker-username= A service principal application ID-ja (Nem a secret ID-ja)
--docker-password= a secret value-ja
Majd a fenti kubectl paranccsal létrehozni a secretet

3. Be kell írni a secret nevét
4. Ha nem akarunk Ingress-t, akkor a service type legyen LoadBalancer


## helm módosítás, pl. values docker megadása,  után ellenőrzés
helm lint helmc
## helm package, ez opcionális
helm package helmc
## helm install k8s alá
helm install isdcproject helmc
helm upgrade isdcproject helmc

