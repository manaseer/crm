## Nod JS and Mongo DB Example

#### 1- Project workspace and setup
Create project folder and initialize an npm project
```
> mkdir crm

> cd crm

> npm init -y

```

#### 2- Set up Git repository

```
> git add .

> git commit -m "Initial Commit"

> git remote add origin https://github.com/manaseer/crm.git

> git push -u origin master

```

#### 3a- Install dependencies
Install MongoDB and then install `Express` and `Mongoose`

```

> git install express body-parser mongoose nodemon

> touch .gitignore

```
#### 3b- Install Dev. dependencies
Install MongoDB and then install `Express` and `Mongoose`

```

> npm install --save-dev babel-cli babel-preset-es2015  babel-preset-stage-0

```


Inside `.gitignore` add the following
- node_modules

#### 4- Create server inside index.js
```
import express from 'express' ;

const PORT = 3000;
const app = express();



app.get('/',(req,res)=>{
  res.send('Node and express server is running on port '+PORT);
});

app.listen(PORT,()=>{
  console.log('Express server is running on '+PORT);
});

```

#### 5- Create folder structure of the project
We'll create a parent `src` folder and inside this create following three subfolders
- controllers 
- models
- routes

```
> mkdir src && cd src && mkdir controllers && mkdir models && mkdir routes

```