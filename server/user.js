
 // update user
  Meteor.methods({
    updateroles:function(id,mySelect){
        var attr=[mySelect];
        return Meteor.users.update({_id:id},{$set:{roles:attr}});
    },
    edituser: function(id,username,email) {
        var attr={
            emails:[{address: email,verified: "false"}],
            profile:{username:username}
        }
        return Meteor.users.update({_id:id},{$set: attr});
        //return Meteor.users.update(id,{$set: {profile:attr}});
    }
});
 Meteor.methods({
   registerUser:function(username,email,password,mySelect){
    targetUserId=Accounts.createUser({
        email: email,
        password: password,
        profile:{username:username}
       });
    console.log("Hello "+targetUserId);
    // Roles.setUserRoles(id,'member')
    Roles.setUserRoles(targetUserId, [mySelect]);
   },
   deleteUser: function (id) {
      return Meteor.users.remove(id);
  }
});
 