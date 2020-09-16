FILE="./.env"

if [[ $TRAVIS_BRANCH == 'production' ]]; then
cat <<EOM >$FILE
REACT_APP_PROJECT_ID=policygenius-reimagined
EOM
    echo "=========== $TRAVIS_BRANCH ENV ==========="
    cat $FILE
elif [[ $TRAVIS_BRANCH == 'master' ]]; then
cat <<EOM >$FILE
REACT_APP_PROJECT_ID=uat-policygenius-reimagined
EOM
    echo "=========== $TRAVIS_BRANCH ENV ==========="
    cat $FILE
else
    exit 0
fi