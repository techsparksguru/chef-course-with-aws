# Vagrant

- Download and Install virtualbox from [here](https://www.virtualbox.org/wiki/Downloads) based on your host OS
- This set up requires at least 8gb RAM ,because chef server system requirements are at least 4gb and 2 core cpu
- Each machine will have two network adapters - hostonly (cidr 192.168.99.1/16) and NAT for reaching internet out
- For all practical purposes the network ip for machines will be 192.168.99.100, 192.168.99.101 and 192.168.99. Please take a look at Vagrantfile for more information
- Once you have successfully installed virtualbox, step into this folder and run `vagrant up` 