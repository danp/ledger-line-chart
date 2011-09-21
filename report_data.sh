#!/bin/sh

if [ -z "$LEDGER_FILE" ]; then
  echo "ERROR: \$LEDGER_FILE not set"
  exit 1
fi

ledger -D -J register "$@" | awk 'BEGIN { print "var entries = [" } { print("  { date: \"" $1 "\", balance: " $2 " },") } END { print "];" }'
