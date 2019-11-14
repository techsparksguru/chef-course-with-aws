# Install ruby
sudo apt-get update
sudo apt-get install ruby-full

# Install knife and chefdk

sudo gem install knife
sudo gem install chef-dk

# Create a chef app repo

chef generate app chef-repo
cd chef-repo

# Make sure that .chef exists to store the `knife.rb`

mkdir -p .chef