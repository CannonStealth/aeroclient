# DONT TOUCH OR EXECUTE UNTIL WE RELEASE v1.0.0

git add .

echo "Enter the commit message: "

read msg

git commit -m $msg

git push

tsc

version=${1:-"minor"}

npm version $version

npm publish --access public