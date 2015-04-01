VERSION=3.0.0.M7
NAME=gremlin-server-$VERSION
ZIPFILE=$NAME.zip
DIR=gremlin-server
if [ -d "$DIR" ]; then 
	echo "You have already downloaded gremlin-server"
	echo "To reinstall, please delete gremlin-server folder"
	echo "Then run './setup-gremlin.sh'"

	read -p "Are you sure that you want to delete $DIR ? " -n 1 -r
	echo    # (optional) move to a new line
	if [[ ! $REPLY =~ ^[Yy]$ ]]
	then
	    exit 1
	fi
	rm -r $DIR
fi
URL=http://tinkerpop.com/downloads/3.0.0.M7/$ZIPFILE

wget $URL
unzip ./$ZIPFILE
rm $ZIPFILE
mv gremlin-server-3.0.0.M7 gremlin-server
