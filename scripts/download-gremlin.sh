VERSION=3.0.0.M7
NAME=gremlin-server-$VERSION
ZIPFILE=$NAME.zip
DIR=gremlin-server
URL=http://tinkerpop.com/downloads/3.0.0.M7/$ZIPFILE

if [ -d "$DIR" ]; then 
	echo "You have already downloaded gremlin-server"
	echo "To launch gremlin-server,"
	echo "please run '\033[1mmake gremlin-server\033[0m'"
	echo    # new line

	echo "To reinstall Tinkerpop's gremlin-server, press 'y'"

	read -p "Are you sure that you want to delete and reinstall $DIR ? " -n 1 -r
	echo    # new line
	if [[ ! $REPLY =~ ^[Yy]$ ]]
	then
	    exit 1
	fi
	rm -r $DIR
fi

download()
{
    local url=$1
    echo "    "
    wget -N --progress=dot $url 2>&1 | grep --line-buffered "%" | \
        sed -u -e "s,\.,,g" | awk '{printf("\b\b\b\b%4s", $2)}'
    echo "\n"
}

echo "\nDownloading Tinkerpop's gremlin-server"
download $URL
echo "Extracting zip file..."
unzip ./$ZIPFILE > /dev/null
rm $ZIPFILE
mv $NAME $DIR
echo "Done."
echo "\nNow you can launch gremlin server, by running:"
echo "\033[1mmake gremlin-server\033[0m"