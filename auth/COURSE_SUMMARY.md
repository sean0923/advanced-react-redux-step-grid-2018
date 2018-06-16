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



