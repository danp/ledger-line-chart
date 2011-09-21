[d3]: http://mbostock.github.com/d3/
[this tutorial]: http://www.janwillemtulp.com/2011/04/01/tutorial-line-chart-in-d3/
[ledger]: http://www.ledger-cli.org/

# A line chart!

Played with [d3][], took both the line chart example in its repo and
info from [this tutorial][] to make a line chart of the balance from a
[ledger][] register report.

# Using

```
export LEDGER_FILE=... # if not already done
./report_data.sh assets:rbc:canada:checking > data.js
# open line.html in your browser
```
