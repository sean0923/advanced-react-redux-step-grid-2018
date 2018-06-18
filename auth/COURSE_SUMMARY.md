### Cookie vs Token
Cookie can be used in only 1 domain
Token cab be used across multiple domains


### Margan
http req loggin tool -> app.use(morgan('combined'))

### body-parser
-> app.use(bodyParser.json({ type: '*/*' }));

Befoer saving user to database, hash password with bcrypt-nodejs lib
At where you define user schema file do 

### Hashing user's password
'UserSchema.pre('save', function(next) ...
in here you should not user arrow func (=>) because later you have to use

const user = this;

### 
Send err if no password or no username


npm install --save jwt-simple

create secrete string in config.js and git ignore it
jwt is create with secrete string you put in config.js

make generateTokenForUser function

jwt token has sub and iat property

when user is successfully saved to the db res.send ({token: toeknForUser(user)})

### jwt token
- sub (subject)
- iat (issue at time) 

### 107 - Installing Passport
- so far we built signup
- going to builld login function

npm install passport passport-jwt

create service folder
create passport.js file in service

passport
User
config
jwtStrategy
ExtractJwt

### 108 - Passport Strategies
In Passport strategy is method to authenticate user
There are many strategies
1. verify user with a JWT
2. verify user with username and password
...
 
 We will
 1. Setup options for JWT Strategy
 2. Create JWT strategy
 3. Tell psasport to user this strategy

 2. -- JwtStrategy has cb with args 'payload' and 'done'
 - See if the user ID in the payload exists in our database

 - find user -> done(null, user)
 - CANNOT find user -> done(null, false)
 - error -> return done(err, false)
 
 ;; payload is what we put in while we jwt.encode 'sub', 'iat'
 so payload.sub will be user.id


### 109 - Using Strategies with Passport (1. JWT Option)

jwtOptions need to know where to extract Jwt 
for ex) jwtFromReqeust: ExtractJwt.fromHeader('authorization')

### 110 - Making an Authenticated Request (create requireAuth middleware)

Request -> Passport -> Routes

authenticate incoming request with passport

when passport is authenticating tell { session: false }
because session is related to cookies but we are dealing with token

''' it behaves pretty similar to client side HOC '''
''' request goes through middleware and if token is not right then '''
''' send UnAuthorize ```

### 111 - Loggin in with Local Strategy

Sign in user get token, then user need to make req with token
Can Login work with same logic ?
Login, user get token, then ...

It seems like if someone wants to do it with just email and password 
passport might give you option

npm install passport-local

### 112 - Purpose of Local Strategy
### 113 - Bcrypit Full Circle 
compare incoming and stored password with bycript lib

### 114 - Protecting Signin Route

''' Implementing local stretagy using passport '''
''' But I feel like I can do it without passport by creating custom middleware '''
''' I should try this if I have time '''


