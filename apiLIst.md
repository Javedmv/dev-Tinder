authRouter
-POST   /signup
-POST   /login
-POST   /logout

profileRouter
-GET    /profile/view
-PATCH  /profile/edit
-PATCH  /profile/password

connectionRequestRouter
-POST   /request/send/accepted/:userid
-POST   /request/send/rejected/:userid
-POST   /request/review/accepted/:requestId
-POST   /request/review/rejected/:requestId

userRouter
-GET    /user/connections
-GET    /user/requests/recieved
-GET    /feed   :- get you the 28 userprofile


status: ignored,intrested,accepted,rejected

