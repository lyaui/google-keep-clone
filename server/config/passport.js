const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models');

// JWT Strategy
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
opts.secretOrKey = process.env.TOKEN_SECRET;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const foundUser = await User.findOne({ _id: jwt_payload.id });
      if (!foundUser) return done(null, false);
      return done(null, { id: foundUser._id });
    } catch (err) {
      return done(err, false);
    }
  }),
);

// google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/user/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const foundUser = await User.findOne({ googleId: profile.id });
        if (foundUser) {
          return done(null, foundUser);
        } else {
          const createdUser = await new User({
            name: profile.displayName,
            googleID: profile.id,
            thumbnail: profile.photos[0].value,
            email: profile.emails[0].value,
          }).save();
          return done(null, createdUser);
        }
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);
