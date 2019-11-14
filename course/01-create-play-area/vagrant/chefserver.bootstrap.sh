sudo apt-get update -y
sudo apt-get upgrade -y
wget https://packages.chef.io/files/stable/chef-server/12.18.14/ubuntu/18.04/chef-server-core_12.18.14-1_amd64.deb
sudo dpkg -i chef-server-core_12.18.14-1_amd64.deb
rm chef-server-core_12.18.14-1_amd64.deb
sudo chef-server-ctl reconfigure
mkdir .chef
sudo chef-server-ctl user-create user userfirst userlast user@techsparks.guru 'Welcome123' --filename ~/.chef/user.pem

sudo chef-server-ctl org-create techsparks "Tech Spars Guru" --association_user user --filename ~/.chef/techsparks.pem

# Install chef-manage
sudo chef-server-ctl install chef-manage
sudo chef-server-ctl reconfigure
sudo chef-manage-ctl reconfigure