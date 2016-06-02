# sibyl
Serverless Sentiment Analysis

##### Deploy
```
serverless function deploy
```

##### Run

```
curl -s -X POST -H "Content-Type: application/json" -d '{"text": "VADER is smart, handsome, and funny!"}' https://example.amazonaws.com/development/sentiment
```

```
{
   "positive" : [
      "funny",
      "smart"
   ],
   "negative" : [],
   "comparative" : 0.833333333333333,
   "words" : [
      "funny",
      "smart"
   ],
   "score" : 5,
   "tokens" : [
      "vader",
      "is",
      "smart",
      "handsome",
      "and",
      "funny"
   ]
}
```
