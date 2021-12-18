# This script checks if any commit was made to main in the last 24h.
# It's used to prevent useless releases being pushed to testflight if there where no changes.

DATE_STRING=$(curl -s https://api.github.com/repos/ridenui/mobileapp/branches/main | jq .commit.commit.committer.date;)

node -e "process.exit(new Date().setDate(new Date().getDate() - 1) > new Date($DATE_STRING))"
