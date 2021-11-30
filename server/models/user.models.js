const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    }
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value);

UserSchema.pre("validate", function(next){
    if(this.password!=this.confirmPassword){
        console.log(this.password);
        console.log(this.confirmPassword);
        this.invalidate("confirmPassword", "Passwords did not match, please try again.");
    }
    next();
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password,10)
    .then((hashedPassword)=>{
        console.log("Password: " + this.password);
        console.log("Hashed: " + this.hashedPassword);
        this.password=hashedPassword;
        next();
    })
    .catch
})

const User = mongoose.Schema("User", UserSchema);

module.exports = User;