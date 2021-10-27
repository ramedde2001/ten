function getdata(chats)
{
ansers=[]
questions=[]
table=[]
for(var key in chats)
{
for (var ques in chats[key].question)
{

questions.push(chats[key].question[ques])
table.push(parseInt(key))
}
ansers.push(chats[key].anser)
}
return {table,questions,ansers}
}

 function tokenize(text) {
    
		text=text.
      replace("مادا","")
	.replace("كيف","")
.replace("\\n","")
	.replace("اين","")
	.replace("متى","")
	.replace("في","")
	.replace("لمادا","")
	.replace("لعل","")
	.replace("ان","")
	.replace("بعد","")
	.replace("ما","")
	.replace("منك","")
	.replace("انا","")
	.replace(" و ","")
        .replace("هل","")
		
		
	
	return text
     
      
      .split(' ').map(function (s) {

if(s.startsWith("ب"))
s=s.substring(1)
if(s.startsWith("ال"))
s=s.substring(2)
if(s.startsWith("ت"))
s=s.substring(1)

if(s.endsWith("ون"))
s=s.substring(0,s.length-2)
if(s.endsWith("ة"))
s=s.substring(0,s.length-1)
if(s.endsWith("ك"))
s=s.substring(0,s.length-1)
if(s.endsWith("ه"))
s=s.substring(0,s.length-1)
if(s.endsWith("ها"))
s=s.substring(0,s.length-2)
if(s.endsWith("ني"))
s=s.substring(0,s.length-2)
if(s.endsWith("تي"))
s=s.substring(0,s.length-2)
if(s.endsWith("ك"))
s=s.substring(0,s.length-1)
if(s.endsWith("يني"))
s=s.substring(0,s.length-3)


        return s.toLowerCase();
      });
  }

  function  extractDictionary(textArray) {
    var dict = {},
      keys = [],
      words;
    textArray = Array.isArray(textArray) ? textArray : [textArray];
    textArray.forEach(function (text) {
      words = tokenize(text);
      words.forEach(function (word) {
        word = word.toLowerCase();
        if (!dict[word] && word !== '') {
          dict[word] = 1;
          keys.push(word);
        } else {
          dict[word] += 1;
        }
      });
    });

    return {
      words: keys,
      dict: dict
    };
  }
function tfdivvector(textlist,vocabulary)
{
var dict = vocabulary.dict
      vector = [];
textlist.forEach(function (text) {
vectortext=[]
vocabulary.words.forEach(function (word){
vectortext.push(tfidf(word, text, textlist)|| 0)

}

)
vector.push(vectortext)

})

return vector;
}

  function bow(text, vocabulary) {
    var dict = extractDictionary([text]).dict,
      vector = [];

    vocabulary.words.forEach(function (word) {
      vector.push(dict[word] || 0);
    });
    return vector;
  }

  function tf(word, text) {
    var input = word.toLowerCase();
    var dict = extractDictionary(text).dict;
    return dict[input] / tokenize(text).length;
  }

  function wordInDocsCount(word, textlist) {
    var sum = 0;
    textlist.forEach(function (text) {
      sum += tokenize(text).indexOf(word) > -1 ? 1 : 0;
    });
    return sum;
  }

  function idf(word, textlist) {
    return Math.log(textlist.length / (1 + wordInDocsCount(word, textlist)));
  }

  function tfidf(word, text, textlist) {
    return tf(word, text) * idf(word, textlist);
  }
  function onehot(data)
  {
	  dic= extractDictionary(data)
vecs=[]
for(d in data)
{
vec=[]

data[d].split(" ").map(function(s){
vec.push(dic.words.indexOf(s)+1)

})
vecs.push(vec)
}
return vecs
	  
  }
  function pad(vecs,num)
  
  {
	  
newvecs=[]
for(f in vecs)
{
newvec=[]
for(s=0;s<num;s++)
newvec.push(0)

for (a in vecs[f])
newvec[a]=vecs[f][a]

newvecs.push(newvec)

}
return newvecs
  }
  function towvecn(newvecs)
  
  {
	  dic=extractDictionary(data)

numvoc=dic.words.length


nvecs=[]


for(g=0;g<newvecs.length;g++)
{
	nvec=[]
for(s=0;s<6;s++)
{
wordvec=[]
for(i=0;i<numvoc;i++)
{

if(i==newvecs[g][s])

wordvec.push(1)
else

wordvec.push(0)



}
nvec.push(wordvec)
}

nvecs.push(nvec)
}
return nvecs
	  
  }
  
  function towvec(newvecs)
  
  {
	  dic=extractDictionary(data)

numvoc=dic.words.length


nvecs=[]


for(g=0;g<newvecs.length;g++)
{
	nvec=[]
for(s=0;s<6;s++)
{
wordvec=[]
for(i=0;i<numvoc;i++)
{

if(i==newvecs[g][s])

nvec.push(1)
else

nvec.push(0)



}

}

nvecs.push(nvec)
}
return nvecs


	  
	  
  }
	  
  




